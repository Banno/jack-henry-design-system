// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

// url=https://www.figma.com/design/4XCx820ycbQ3RCOj1AXo8J/-v2--Forge-Design-Kit?node-id=4343-177
import figma from 'figma';

const instance = figma.selectedInstance;

//get the properties from the Figma instance (not from code)
const showCount = instance.getBoolean('showCount');
const rawCount = instance.getString('count');

// Figma writes overflow as a literal "N+"; code derives it from count > max-count
function badge(value) {
  if (value.includes('+')) {
    const max = value.replace('+', '');
    return figma.code`<jh-badge count="${String(Number(max) + 1)}" max-count="${max}"></jh-badge>`;
  }
  return figma.code`<jh-badge count="${value}"></jh-badge>`;
}

export default {
  id: 'jh-badge',
  imports: ["import '@jack-henry/jh-elements/components/badge/badge.js';"],
  example: showCount ? badge(rawCount) : figma.code`<jh-badge></jh-badge>`,
};