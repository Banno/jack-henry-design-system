/**
* SPDX-FileCopyrightText: 2026 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/

// TODO for tagged multi-select we will need to filter out already selected items from the list of options.

// returns a filtered list of terms that include the search term in the specified key (default is 'label')
export const JhFilter = {
filterList(items, searchTerm, key = 'label') {
    if (!items || items.length === 0) {
        return [];
    }
    if (!searchTerm) {
        return items;
    }
    const lowerSearchTerm = searchTerm.toLowerCase();
    return items.filter(item => String(item[key] || '').toLowerCase().includes(lowerSearchTerm));
},

// returns the first term that includes the search term in the specified key (default is 'label'), or null if not found.
// Skip disabled items in the inline suggestions as they are not selectable.
filterInline(items, searchTerm, key = 'label') {
    if (!searchTerm || !items || items.length === 0) {
        return null;
    }
    const lowerSearchTerm = searchTerm.toLowerCase();
    return items.find(item => !item.disabled && String(item[key] || '').toLowerCase().startsWith(lowerSearchTerm)) || null;
},
//returns the index of the first term that starts with the buffer, or -1 if not found
// exclude disabled items from the search as they are not selectable.
// when it is a multi-select, return selected items as well, so users can deselect easily.

jumpAhead(items, buffer, activeIndex, key = 'label') {
    if (!buffer || !items || items.length === 0) {
        return -1;
    }

    const lowerBuffer = buffer.toLowerCase();
    const char = lowerBuffer[0];
    const isCycling = allCharsSame(lowerBuffer);

    if (isCycling) {
        // Find the next item that starts with the character after the active index
        const nextIndex = items.findIndex((item, index) => index > activeIndex && !item.disabled && String(item[key] || '').toLowerCase().startsWith(char));
        if (nextIndex !== -1) {
            return nextIndex;
        }
        // If not found, wrap around and search from the beginning up to the active index
        return items.findIndex((item) => !item.disabled && String(item[key] || '').toLowerCase().startsWith(char));
    }
    return items.findIndex(item => !item.disabled && String(item[key] || '').toLowerCase().startsWith(lowerBuffer));
}
}

// more than one character that are same.
const allCharsSame = (str) => {
    if (str.length <= 1) return false;
    return str.split('').every(char => char === str[0]);
};