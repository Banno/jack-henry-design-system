/**
 * SPDX-FileCopyrightText: 2026 Jack Henry
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const pageHtml = `<!doctype html>
<html>
  <body>
    <script type="module">
      import { html } from 'lit';
      import '@jack-henry/jh-tokens/platforms/web/css/jh-theme-light.css';
      import '/components/select/select.js';

      const failures = [];
      const check = (condition, message) => {
        if (!condition) failures.push(message);
      };

      try {
        const select = document.createElement('jh-select');
        select.label = 'Account type';
        select.searchable = true;
        select.options = [
          {
            label: 'Basic Checking',
            value: 'checking-01',
            leading: html\`<span class="lead-mark">lead-checking</span>\`,
          },
          { label: 'High-Yield Savings', value: 'savings-01' },
          { label: 'Money Market', value: 'money-market-01', leading: 'MM' },
          {
            groupLabel: 'Cards',
            groupValues: [
              {
                label: 'Travel Rewards',
                value: 'cc-travel',
                leading: html\`<span class="lead-mark">lead-travel</span>\`,
              },
            ],
          },
        ];
        document.body.append(select);
        await select.updateComplete;
        await new Promise((resolve) => requestAnimationFrame(resolve));

        const options = () => [...select.shadowRoot.querySelectorAll('jh-list-item[role="option"]')];
        const option = (label) => options().find((item) => item.getAttribute('primary-text') === label);
        const leftSlot = (item) => item?.querySelector('[slot="jh-list-item-left"]');

        const checking = option('Basic Checking');
        check(leftSlot(checking)?.textContent.includes('lead-checking'), 'option with leading did not render left-slot content');
        check(
          checking?.shadowRoot?.querySelector('slot[name="jh-list-item-left"]')?.classList.contains('has-content'),
          'list-item did not treat the left slot as filled',
        );

        const savings = option('High-Yield Savings');
        check(savings && !leftSlot(savings), 'option without leading rendered left-slot content');

        const moneyMarket = option('Money Market');
        check(leftSlot(moneyMarket)?.textContent.trim() === 'MM', 'string leading did not render in the left slot');

        const travel = option('Travel Rewards');
        check(leftSlot(travel)?.textContent.includes('lead-travel'), 'grouped option leading did not render in the left slot');

        select.value = 'checking-01';
        await select.updateComplete;
        const input = select.shadowRoot.querySelector('input');
        check(input.value === 'Basic Checking', 'trigger showed something other than the label: ' + input.value);

        input.value = 'Savings';
        input.dispatchEvent(new Event('input', { bubbles: true }));
        await select.updateComplete;
        await select.updateComplete;
        const filtered = options().map((item) => item.getAttribute('primary-text'));
        check(
          filtered.length === 1 && filtered[0] === 'High-Yield Savings',
          'filtering by label failed when leading is set: ' + filtered.join(', '),
        );
        check(!leftSlot(option('High-Yield Savings')), 'filtered option rendered left-slot content');

        input.value = 'lead-checking';
        input.dispatchEvent(new Event('input', { bubbles: true }));
        await select.updateComplete;
        await select.updateComplete;
        const byLeading = options().map((item) => item.getAttribute('primary-text'));
        check(!byLeading.includes('Basic Checking'), 'filtering matched leading content: ' + byLeading.join(', '));

        window.__failures = failures;
      } catch (error) {
        window.__error = error?.stack || String(error);
      }
      window.__ready = true;
    </script>
  </body>
</html>`;

function chromePath() {
  const candidates = [
    process.env.CHROME_PATH,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ].filter(Boolean);
  return candidates.find((candidate) => existsSync(candidate));
}

function send(ws, method, params = {}, sessionId) {
  const id = ws._nextId++;
  const message = { id, method, params };
  if (sessionId) message.sessionId = sessionId;
  ws.send(JSON.stringify(message));
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      ws._pending.delete(id);
      reject(new Error(`Timed out waiting for ${method}`));
    }, 8000);
    ws._pending.set(id, {
      resolve: (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      reject: (error) => {
        clearTimeout(timer);
        reject(error);
      },
    });
  });
}

test('leading content renders in the left slot and stays out of filtering', async () => {
  const executable = chromePath();
  assert.ok(executable, 'Set CHROME_PATH to a Chrome or Chromium binary to run select tests');

  const server = await createServer({
    root: packageRoot,
    server: { host: '127.0.0.1', port: 0, strictPort: false },
    logLevel: 'silent',
    plugins: [
      {
        name: 'select-test-page',
        configureServer(devServer) {
          devServer.middlewares.use(async (req, res, next) => {
            const url = req.url?.split('?')[0];
            if (url === '/' || url === '/index.html') {
              const transformed = await devServer.transformIndexHtml(req.url, pageHtml);
              res.setHeader('content-type', 'text/html');
              res.end(transformed);
              return;
            }
            next();
          });
        },
      },
    ],
  });
  await server.listen();
  const { port } = server.httpServer.address();

  const userDataDir = mkdtempSync(path.join(tmpdir(), 'jh-select-'));
  const chrome = spawn(executable, [
    '--headless=new',
    '--disable-gpu',
    '--no-first-run',
    '--window-size=800,600',
    `--user-data-dir=${userDataDir}`,
    '--remote-debugging-port=0',
    'about:blank',
  ], { stdio: ['ignore', 'ignore', 'pipe'] });

  let browserWs;
  try {
    browserWs = await new Promise((resolve, reject) => {
      let stderr = '';
      const timer = setTimeout(() => reject(new Error(`Chrome did not expose DevTools\n${stderr}`)), 10000);
      chrome.stderr.on('data', (chunk) => {
        stderr += chunk.toString();
        const match = stderr.match(/DevTools listening on (ws:\/\/\S+)/);
        if (match) {
          clearTimeout(timer);
          resolve(match[1]);
        }
      });
      chrome.on('exit', (code) => reject(new Error(`Chrome exited ${code}\n${stderr}`)));
    });

    const ws = new WebSocket(browserWs);
    ws._nextId = 1;
    ws._pending = new Map();
    await new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error('DevTools socket did not open')), 8000);
      ws.addEventListener('open', () => {
        clearTimeout(timer);
        resolve();
      });
      ws.addEventListener('error', (error) => {
        clearTimeout(timer);
        reject(error);
      });
    });
    ws.addEventListener('message', (event) => {
      const raw = typeof event.data === 'string' ? event.data : event.data.toString();
      const data = JSON.parse(raw);
      if (data.id == null || !ws._pending.has(data.id)) return;
      const { resolve, reject } = ws._pending.get(data.id);
      ws._pending.delete(data.id);
      if (data.error) reject(new Error(JSON.stringify(data.error)));
      else resolve(data.result);
    });

    const { targetId } = await send(ws, 'Target.createTarget', { url: 'about:blank' });
    const { sessionId } = await send(ws, 'Target.attachToTarget', { targetId, flatten: true });
    await send(ws, 'Page.enable', {}, sessionId);
    await send(ws, 'Runtime.enable', {}, sessionId);
    await send(ws, 'Page.navigate', { url: `http://127.0.0.1:${port}/` }, sessionId);

    const started = Date.now();
    let payload;
    while (Date.now() - started < 15000) {
      const evaluated = await send(ws, 'Runtime.evaluate', {
        expression: 'window.__ready ? JSON.stringify({ error: window.__error || "", failures: window.__failures || [] }) : ""',
        returnByValue: true,
      }, sessionId);
      if (evaluated.result?.value) {
        payload = JSON.parse(evaluated.result.value);
        break;
      }
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    assert.ok(payload, 'select leading test did not finish');
    assert.equal(payload.error, '');
    assert.deepEqual(payload.failures, []);
    ws.close();
  } finally {
    chrome.kill();
    await server.close();
    rmSync(userDataDir, { recursive: true, force: true });
  }
});
