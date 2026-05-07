/**
* SPDX-FileCopyrightText: 2026 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

export function manageDataset({ 
  dataset = null,
  initialValue = null, 
  disabledItems = [], 
  emptyLabel = ""
} = {}) {
  if (!dataset) {
    console.warn("No preset dataset provided.");
    return;
  }
  
  let processedData = dataset.map(item => ({
    ...item,
    selected: item.value === initialValue,
    disabled: disabledItems.includes(item.value)
  }));

  // If emptyLabel has any text, add the option to the top
  if (emptyLabel) {
    processedData.unshift({ 
      value: '', 
      label: emptyLabel, 
      disabled: false,
      selected: !initialValue // Auto-select empty if no initialValue is provided
    });
  }

  return processedData;
}