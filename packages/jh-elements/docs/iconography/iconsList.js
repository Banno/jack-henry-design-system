// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { LitElement, css, html } from 'lit';
import '../../components/card/card.js';
import '../../components/button/button.js';
import '../../components/input-search/input-search.js';
import '../../components/toast-controller/toast-controller.js';
import '../../components/toast/toast.js';
// Use import.meta.glob to import all .js files within the 'icons-wc' directory
// The `eager: true` option ensures that all modules are imported immediately
// rather than lazily.
const modules = import.meta.glob(
  '../../../../packages/jh-icons/icons-wc/*.js',
  { eager: true }
);

const iconMap = [];
for (const path in modules) {
  // Example path: "@jack-henry/jh-icons/icons-wc/icon-ellipsis.js"
  const fileName = path.split('/').pop(); // "icon-ellipsis.js"
  const iconName = fileName.replace('icon-', 'jh-icon-').replace('.js', ''); // "jh-icon-ellipsis"
  iconMap.push(iconName);
}

export class JhIconsList extends LitElement {
  static styles = css`
    :host {
      font-family: var(--jh-font-body-regular-1-font-family);
      font-weight: var(--jh-font-body-regular-1-font-weight);
      font-size: var(--jh-font-body-regular-1-font-size);
      line-height: var(--jh-font-body-regular-1-line-height);
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    jh-card {
      width: 150px;
      height: 100%;
      text-align: center;
    }
    jh-input-search {
      padding-bottom: 16px;
    }
    .icon-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 80px;
      padding: 0 8px;
    }
    .icon-name {
      flex-grow: 1;
    }
    .icon-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }
  `;
  static get properties() {
    return {
      icons: { type: Array },
    };
  }
  constructor() {
    super();
    this.icons = iconMap;
  }

  #handleSearch(e) {
    if (!e.detail.value) {
      // If the search input is cleared, reset icons to all available icons
      this.icons = iconMap;
      this.#renderIcons();
      return;
    }
    const searchTerm = e.detail.value.toLowerCase();
    // Filter icons based on search term
    this.icons = iconMap.filter((icon) =>
      icon.toLowerCase().includes(searchTerm)
    );
    this.#renderIcons();
  }

  #renderIcons() {
    const gallery = this.shadowRoot.querySelector('.icon-grid');
    gallery.innerHTML = '';
    //append each icon to the gallery declaratively (can't do dynamic binding in tags)
    if (this.icons.length === 0) {
      const noResults = document.createElement('p');
      noResults.textContent = 'Sorry, no icons found. Try a different search.';
      gallery.appendChild(noResults);
      return;
    }
    for (const icon of this.icons) {
      const iconItem = document.createElement(icon);
      iconItem.setAttribute('slot', 'jh-card-header');
      iconItem.setAttribute('size', 'large');
      const iconName = document.createElement('span');
      iconName.textContent = icon;
      iconName.classList.add('icon-name');
      const iconButton = document.createElement('jh-button');
      iconButton.setAttribute('size', 'small');
      iconButton.setAttribute('appearance', 'tertiary');
      iconButton.setAttribute('label', 'Copy');
      iconButton.setAttribute('accessible-label', `Copy ${icon} to clipboard`);
      const iconContainer = document.createElement('div');
      iconContainer.classList.add('icon-container');
      const iconCard = document.createElement('jh-card');
      iconCard.setAttribute('padding', 'none');
      iconButton.addEventListener('click', () => {
        // Copy the icon tag to clipboard. This also includes size="medium"
        navigator.clipboard.writeText(iconItem.outerHTML);
        this.#createToast(icon);
      });

      iconCard.appendChild(iconItem);
      iconContainer.appendChild(iconName);
      iconContainer.appendChild(iconButton);
      iconCard.appendChild(iconContainer);
      gallery.appendChild(iconCard);
    }
  }
  updated(changedProperties) {
    // Only re-render icons into DOM if the 'icons' property has changed
    if (changedProperties.has('icons')) {
      this.#renderIcons();
    }
  }
  #createToast(icon) {
    const createToast = new CustomEvent('jh-create-toast', {
      detail: {
        appearance: 'positive',
        stacked: false,
        text: `${icon} copied to clipboard`,
        timeout: 2000,
        hideDismissButton: true,
      },
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(createToast);
  }

  render() {
    return html`
      <jh-input-search
        label="Search for icons by name"
        helper-text="Click on any icon to copy its code to the clipboard."
        show-clear-button accessible-label-clear-button="Clear search"
       @jh-input=${this.#handleSearch} @jh-input:clear-button-click=${this.#handleSearch}
      ></jh-input-search>
      <div class="icon-grid"></div>
      <jh-toast-controller max-count=1></jh-toast-controller>
    `;
  }
}
customElements.define('jh-icons-list', JhIconsList);
