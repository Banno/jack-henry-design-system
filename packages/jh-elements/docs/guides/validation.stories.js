// SPDX-FileCopyrightText: 2026 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { html, css } from 'lit';
import '../../components/input/input.js';
import '../../components/input-number/input-number.js';
import '../../components/input-url/input-url.js';
import '../../components/checkbox-group/checkbox-group.js';
import '../../components/checkbox/checkbox.js';
import '../../components/radio-group/radio-group.js';
import '../../components/radio/radio.js';
import '../../components/button/button.js';
import { action } from 'storybook/actions';

const storyStyles = css`
  #validation-demo {
    display: flex;
    align-items: flex-start;
    gap: 24px;
  }
  #validation-example-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 400px;
    flex-shrink: 0;
  }
  #validation-log {
    width: 400px;
    max-height: 500px;
    overflow-y: auto;
    padding: 12px 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  #validation-log h3 {
    margin-top: 0;
  }
  #api-demo {
    display: flex;
    align-items: flex-start;
    gap: 24px;
  }
  #api-example-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 400px;
    flex-shrink: 0;
  }
  #api-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  #api-log {
    width: 400px;
    max-height: 500px;
    overflow-y: auto;
    padding: 12px 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  #api-log h3 {
    margin-top: 0;
  }
  .validation-log-entry {
    margin: 0 0 8px;
    padding: 8px;
    background: #f5f5f5;
    font-size: 12px;
    white-space: pre-wrap;
    word-break: break-word;
  }
`;

// maps a failed jh-invalid component back to a contextual error-text message
function handleInvalid(event) {
  const invalidElement = event.target;
  const errors = event.detail.state.validity;
  const isGroup = invalidElement.constructor.isGroupControl;

  if (errors.includes('valueMissing')) {
    invalidElement.errorText = isGroup ? 'Please select at least one option.' : 'This field is required.';
  } else if (errors.includes('tooShort')) {
    invalidElement.errorText = isGroup
      ? `Please select at least ${invalidElement.minRequired} options.`
      : `Minimum length is ${invalidElement.minlength} characters.`;
  } else if (errors.includes('tooLong')) {
    invalidElement.errorText = isGroup
      ? `Please select no more than ${invalidElement.maxRequired} options.`
      : `Maximum length is ${invalidElement.maxlength} characters.`;
  } else if (errors.includes('patternMismatch')) {
    invalidElement.errorText = 'The input does not match the required pattern.';
  } else if (errors.includes('typeMismatch')) {
    invalidElement.errorText = 'Please enter a valid URL.';
  } else {
    invalidElement.errorText = 'Invalid input.';
  }
}

// renders the jh-invalid event's target and validation payload into the on-page log panel
function logValidationEvent(event) {
  const logContainer = event.currentTarget.parentElement.querySelector('#validation-log');
  logContainer.querySelector('.validation-log-empty')?.remove();

  console.log('jh-invalid event:', event);

  const entry = document.createElement('pre');
  entry.className = 'validation-log-entry';
  entry.textContent = JSON.stringify(
    {
      event: event.type,
      originHost: event.detail.reference.originHost,
      validity: event.detail.state.validity,
    },
    null,
    2
  );
  logContainer.append(entry);
}

function onSubmit(event) {
  event.preventDefault();
  action('onFormdata')([...new FormData(event.target)]);
  action('onSubmit')(event);
}

// renders a labeled API call result into the on-page log panel
function logApiResult(logContainer, label, value) {
  logContainer.querySelector('.validation-log-empty')?.remove();

  const entry = document.createElement('pre');
  entry.className = 'validation-log-entry';
  entry.textContent = `${label}\n${JSON.stringify(value, null, 2)}`;
  logContainer.append(entry);
}

// ValidityState getters live on the prototype, so JSON.stringify needs an explicit plain-object snapshot
function serializeValidity(validity) {
  return {
    valid: validity.valid,
    valueMissing: validity.valueMissing,
    tooShort: validity.tooShort,
    tooLong: validity.tooLong,
    patternMismatch: validity.patternMismatch,
  };
}

export default {
  title: 'Guides/Validation',
  tags: ['!autodocs', '!dev'],
};

/**
 * Demonstrates `jh-validate`'s single-control and group-control rules wired into
 * real design system components (`jh-input`, `jh-checkbox-group`, `jh-radio-group`).
 * Tab through the fields (or click away) to trigger `focusout` validation and see
 * the `jh-invalid` listener populate contextual `error-text` messages.
 */
export const FormValidationExample = {
  render: () => html`
    <div id="validation-demo">
      <form
        id="validation-example-form"
        @submit=${onSubmit}
        @jh-invalid=${(event) => {
          handleInvalid(event);
          logValidationEvent(event);
        }}
      >
        <jh-input
          label="Username"
          helper-text="At least 3 characters, maximum 10"
          name="username"
          required
          show-indicator
          minlength="3"
        ></jh-input>

        <jh-input-number
          label="Number of Accounts"
          helper-text="Max 3, step 1"
          name="accounts"
          required
          show-indicator
          max="3"
          step="1"
        ></jh-input-number>

        <jh-input
          label="Postal Code"
          helper-text="5 digits, e.g. 12345"
          name="postal-code"
          show-indicator
          pattern="^[0-9]{5}$"
        ></jh-input>

        <jh-input-url
          label="Website"
          helper-text="e.g. https://example.com"
          name="website"
          show-indicator
        ></jh-input-url>

        <jh-checkbox-group label="Interests" helper-text="Select at least one" required show-indicator>
          <jh-checkbox label="Design" name="interests" value="design"></jh-checkbox>
          <jh-checkbox label="Engineering" name="interests" value="engineering"></jh-checkbox>
          <jh-checkbox label="Product" name="interests" value="product"></jh-checkbox>
        </jh-checkbox-group>

        <jh-radio-group label="Preferred contact method" name="contact-method" required show-indicator>
          <jh-radio label="Email" value="email"></jh-radio>
          <jh-radio label="Phone" value="phone"></jh-radio>
          <jh-radio label="Mail" value="mail"></jh-radio>
        </jh-radio-group>

      </form>

      <div id="validation-log" aria-live="polite">
        <h3>jh-invalid Events</h3>
        <p class="validation-log-empty">No validation events yet. Tab out of a field to trigger validation.</p>
      </div>
    </div>
  `,
};

FormValidationExample.parameters = {
  styles: storyStyles,
};

/**
 * Demonstrates the standard form-control API (`.form`, `.validity`, `.checkValidity()`)
 * that `jh-validate` adds to components, and confirms that resetting
 * the parent `<form>` clears `invalid` and the control's validity state automatically.
 */
export const StandardFormControlApiExample = {
  render: () => html`
    <div id="api-demo">
      <form
        id="api-example-form"
        @jh-invalid=${handleInvalid}
        @reset=${(event) => {
          const demo = event.target.closest('#api-demo');
          const logContainer = demo.querySelector('#api-log');
          // reflect state after the native reset (and formResetCallback) completes
          setTimeout(() => {
            const input = demo.querySelector('#api-input');
            logApiResult(logContainer, 'form reset', { invalid: input.invalid, valid: input.validity.valid });
          });
        }}
      >
        <jh-input
          id="api-input"
          label="Username"
          helper-text="At least 3 characters, required"
          name="username"
          required
          minlength="3"
        ></jh-input>

        <div id="api-actions">
          <jh-button
            label=".form"
            size="small"
            @click=${(event) => {
              const demo = event.target.closest('#api-demo');
              const input = demo.querySelector('#api-input');
              logApiResult(demo.querySelector('#api-log'), '.form', { form: input.form?.id ?? null });
            }}
          ></jh-button>
          <jh-button
            label=".validity"
            size="small"
            @click=${(event) => {
              const demo = event.target.closest('#api-demo');
              const input = demo.querySelector('#api-input');
              logApiResult(demo.querySelector('#api-log'), '.validity', serializeValidity(input.validity));
            }}
          ></jh-button>
          <jh-button
            label=".checkValidity()"
            size="small"
            @click=${(event) => {
              const demo = event.target.closest('#api-demo');
              const input = demo.querySelector('#api-input');
              logApiResult(demo.querySelector('#api-log'), '.checkValidity()', { returned: input.checkValidity() });
            }}
          ></jh-button>
          <jh-button
            label="Reset Form"
            appearance="tertiary"
            size="small"
            @click=${(event) => event.target.closest('form').reset()}
          ></jh-button>
        </div>
      </form>

      <div id="api-log" aria-live="polite">
        <h3>API Results</h3>
        <p class="validation-log-empty">No results yet. Click a button above to inspect the input's form-control API.</p>
      </div>
    </div>
  `,
};

StandardFormControlApiExample.parameters = {
  styles: storyStyles,
};
