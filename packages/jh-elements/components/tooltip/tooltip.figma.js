// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

// url=https://www.figma.com/design/4XCx820ycbQ3RCOj1AXo8J/-v2--Forge-Design-Kit?node-id=4343-17614&m=dev
import figma from 'figma';

const instance = figma.selectedInstance;

//get the properties from the Figma instance (not from code)
// const flipDisabled = instance.getBoolean('flip-disabled'); not actually present in Figma component - only in specs.
const position = instance.getEnum('position', {
  'top-center': 'top-center',
  'top-start': 'top-start',
  'top-end': 'top-end',
  'bottom-center': 'bottom-center',
  'bottom-start': 'bottom-start',
  'bottom-end': 'bottom-end',
  left: 'left',
  right: 'right'
})

//shows up correctly but it can't show it as slot content in a named slot.
// the component that is in the instance swap would need a code connect set up to show up correctly.
const content = instance.getInstanceSwap('slot/content').executeTemplate().example;
//does not show up at all. Probably because nothing is added as trigger in the design kit. 
const trigger = instance.findInstance('default').executeTemplate().example;


export default {
  id: 'jh-tooltip',
  nestable: true,
  imports: ["import '@jack-henry/jh-elements/components/tooltip/tooltip.js';"],
  //it makes more sense to hard code the example with the 2 different slots.
  example: figma.code`<jh-tooltip position="${position}">${trigger}${content}</jh-tooltip>`,
};