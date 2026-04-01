/**
 * Data presets for the US States and Territories.
 * Format: Array<{ label: string, value: string, disabled: boolean, selected: boolean }>
 * or: Array<{ groupLabel: string, groupValues: Array<{...}> }>
 */


export const US_STATES_FLAT = [
  { label: "Select a state...", value: "", disabled: false, selected: true },
  { label: "Alabama", value: "AL", disabled: false, selected: false },
  { label: "Alaska", value: "AK", disabled: false, selected: false },
  { label: "Arizona", value: "AZ", disabled: false, selected: false },
  { label: "Arkansas", value: "AR", disabled: false, selected: false },
  { label: "California", value: "CA", disabled: false, selected: false },
  { label: "Colorado", value: "CO", disabled: false, selected: false },
  { label: "Connecticut", value: "CT", disabled: false, selected: false },
  { label: "Delaware", value: "DE", disabled: false, selected: false },
  { label: "Florida", value: "FL", disabled: false, selected: false },
  { label: "Georgia", value: "GA", disabled: false, selected: false },
  { label: "Hawaii", value: "HI", disabled: false, selected: false },
  { label: "Idaho", value: "ID", disabled: false, selected: false },
  { label: "Illinois", value: "IL", disabled: false, selected: false },
  { label: "Indiana", value: "IN", disabled: false, selected: false },
  { label: "Iowa", value: "IA", disabled: false, selected: false },
  { label: "Kansas", value: "KS", disabled: false, selected: false },
  { label: "Kentucky", value: "KY", disabled: false, selected: false },
  { label: "Louisiana", value: "LA", disabled: false, selected: false },
  { label: "Maine", value: "ME", disabled: false, selected: false },
  { label: "Maryland", value: "MD", disabled: false, selected: false },
  { label: "Massachusetts", value: "MA", disabled: false, selected: false },
  { label: "Michigan", value: "MI", disabled: false, selected: false },
  { label: "Minnesota", value: "MN", disabled: false, selected: false },
  { label: "Mississippi", value: "MS", disabled: false, selected: false },
  { label: "Missouri", value: "MO", disabled: false, selected: false },
  { label: "Montana", value: "MT", disabled: false, selected: false },
  { label: "Nebraska", value: "NE", disabled: false, selected: false },
  { label: "Nevada", value: "NV", disabled: false, selected: false },
  { label: "New Hampshire", value: "NH", disabled: false, selected: false },
  { label: "New Jersey", value: "NJ", disabled: false, selected: false },
  { label: "New Mexico", value: "NM", disabled: false, selected: false },
  { label: "New York", value: "NY", disabled: false, selected: false },
  { label: "North Carolina", value: "NC", disabled: false, selected: false },
  { label: "North Dakota", value: "ND", disabled: false, selected: false },
  { label: "Ohio", value: "OH", disabled: false, selected: false },
  { label: "Oklahoma", value: "OK", disabled: false, selected: false },
  { label: "Oregon", value: "OR", disabled: false, selected: false },
  { label: "Pennsylvania", value: "PA", disabled: false, selected: false },
  { label: "Rhode Island", value: "RI", disabled: false, selected: false },
  { label: "South Carolina", value: "SC", disabled: false, selected: false },
  { label: "South Dakota", value: "SD", disabled: false, selected: false },
  { label: "Tennessee", value: "TN", disabled: false, selected: false },
  { label: "Texas", value: "TX", disabled: false, selected: false },
  { label: "Utah", value: "UT", disabled: false, selected: false },
  { label: "Vermont", value: "VT", disabled: false, selected: false },
  { label: "Virginia", value: "VA", disabled: false, selected: false },
  { label: "Washington", value: "WA", disabled: false, selected: false },
  { label: "West Virginia", value: "WV", disabled: false, selected: false },
  { label: "Wisconsin", value: "WI", disabled: false, selected: false },
  { label: "Wyoming", value: "WY", disabled: false, selected: false },
  { label: "American Samoa", value: "AS", disabled: false, selected: false },
  { label: "Guam", value: "GU", disabled: false, selected: false },
  { label: "Puerto Rico", value: "PR", disabled: false, selected: false },
  { label: "US Virgin Islands", value: "VI", disabled: false, selected: false }
];

export const US_STATES_GROUPED = [
  {
    groupLabel: "Northeast",
    groupValues: [
      { label: "Connecticut", value: "CT", disabled: false, selected: false },
      { label: "Maine", value: "ME", disabled: false, selected: false },
      { label: "Massachusetts", value: "MA", disabled: false, selected: false },
      { label: "New Hampshire", value: "NH", disabled: false, selected: false },
      { label: "New Jersey", value: "NJ", disabled: false, selected: false },
      { label: "New York", value: "NY", disabled: false, selected: false },
      { label: "Pennsylvania", value: "PA", disabled: false, selected: false },
      { label: "Rhode Island", value: "RI", disabled: false, selected: false },
      { label: "Vermont", value: "VT", disabled: false, selected: false }
    ]
  },
  {
    groupLabel: "Midwest",
    groupValues: [
      { label: "Illinois", value: "IL", disabled: false, selected: false },
      { label: "Indiana", value: "IN", disabled: false, selected: false },
      { label: "Iowa", value: "IA", disabled: false, selected: false },
      { label: "Kansas", value: "KS", disabled: false, selected: false },
      { label: "Michigan", value: "MI", disabled: false, selected: false },
      { label: "Minnesota", value: "MN", disabled: false, selected: false },
      { label: "Missouri", value: "MO", disabled: false, selected: false },
      { label: "Nebraska", value: "NE", disabled: false, selected: false },
      { label: "North Dakota", value: "ND", disabled: false, selected: false },
      { label: "Ohio", value: "OH", disabled: false, selected: false },
      { label: "South Dakota", value: "SD", disabled: false, selected: false },
      { label: "Wisconsin", value: "WI", disabled: false, selected: false }
    ]
  },
  {
    groupLabel: "South",
    groupValues: [
      { label: "Alabama", value: "AL", disabled: false, selected: false },
      { label: "Arkansas", value: "AR", disabled: false, selected: false },
      { label: "Delaware", value: "DE", disabled: false, selected: false },
      { label: "Florida", value: "FL", disabled: false, selected: false },
      { label: "Georgia", value: "GA", disabled: false, selected: false },
      { label: "Kentucky", value: "KY", disabled: false, selected: false },
      { label: "Louisiana", value: "LA", disabled: false, selected: false },
      { label: "Maryland", value: "MD", disabled: false, selected: false },
      { label: "Mississippi", value: "MS", disabled: false, selected: false },
      { label: "North Carolina", value: "NC", disabled: false, selected: false },
      { label: "Oklahoma", value: "OK", disabled: false, selected: false },
      { label: "South Carolina", value: "SC", disabled: false, selected: false },
      { label: "Tennessee", value: "TN", disabled: false, selected: false },
      { label: "Texas", value: "TX", disabled: false, selected: false },
      { label: "Virginia", value: "VA", disabled: false, selected: false },
      { label: "West Virginia", value: "WV", disabled: false, selected: false }
    ]
  },
  {
    groupLabel: "West",
    groupValues: [
      { label: "Alaska", value: "AK", disabled: false, selected: false },
      { label: "Arizona", value: "AZ", disabled: false, selected: false },
      { label: "California", value: "CA", disabled: false, selected: false },
      { label: "Colorado", value: "CO", disabled: false, selected: false },
      { label: "Hawaii", value: "HI", disabled: false, selected: false },
      { label: "Idaho", value: "ID", disabled: false, selected: false },
      { label: "Montana", value: "MT", disabled: false, selected: false },
      { label: "Nevada", value: "NV", disabled: false, selected: false },
      { label: "New Mexico", value: "NM", disabled: false, selected: false },
      { label: "Oregon", value: "OR", disabled: false, selected: false },
      { label: "Utah", value: "UT", disabled: false, selected: false },
      { label: "Washington", value: "WA", disabled: false, selected: false },
      { label: "Wyoming", value: "WY", disabled: false, selected: false }
    ]
  },
  {
    groupLabel: "Territories",
    groupValues: [
      { label: "American Samoa", value: "AS", disabled: false, selected: false },
      { label: "Guam", value: "GU", disabled: false, selected: false },
      { label: "Puerto Rico", value: "PR", disabled: false, selected: false },
      { label: "US Virgin Islands", value: "VI", disabled: false, selected: false }
    ]
  }
];

export function getPresetData({ 
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