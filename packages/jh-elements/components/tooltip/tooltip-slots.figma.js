// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

// url=https://www.figma.com/design/SRGWworum8oIkweSP4Kh4j/-v2--Forge-Design-Kit---Slots?node-id=4343-17614&m=dev
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

const content = instance.getSlot('content');
//does not show up at all. Probably because nothing is added as trigger in the design kit. 
const trigger = instance.getSlot('default');


export default {
  id: 'jh-tooltip',
//   nestable: true,
  imports: ["import '@jack-henry/jh-elements/components/tooltip/tooltip.js';"],
  //static example makes more sense to show usage in code.
  example: figma.code`<jh-tooltip position="${position}">${trigger}${content}</jh-tooltip>`,
};