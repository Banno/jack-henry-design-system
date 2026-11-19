// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

const camelize = (str) =>
  str
    .split('-')
    .map((part, i) => {
      const word = i === 0 ? part : part.toLowerCase();
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');

// The svg is placed inside an html`` literal, so escape anything that would end
// the literal or start an interpolation.
const escapeSvg = (svg) =>
  svg.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

/**
 * @param {{ name: string, prefix: string, svg: string }} ctx
 */
module.exports = ({ name, prefix, svg }) => {
  const className = `${camelize(prefix)}Icon${camelize(name)}`;

  return `/**
* SPDX-FileCopyrightText: 2025 Jack Henry
*
* SPDX-License-Identifier: Apache-2.0
*/
import {LitElement, css, html} from 'lit';

export default class ${className} extends LitElement {
  /** @type {ElementInternals} */
  #internals;

  static get styles() {
    return css\`
      :host {
        fill: var(
          --jh-icon-color-fill,
          var(--jh-color-content-secondary-enabled)
        );
        width: var(--icon-size);
        height: var(--icon-size);
        display: inline-block;
      }
      :host(:not([size])) {
        --icon-size: var(
          --jh-icon-size-medium,
          var(--jh-dimension-600)
        );
      }
      :host([size='x-small']) {
        --icon-size: var(
          --jh-icon-size-extra-small,
          var(--jh-dimension-400)
        );
      }
      :host([size='small']) {
        --icon-size: var(
          --jh-icon-size-small,
          var(--jh-dimension-500)
        );
      }
      :host([size='medium']) {
        --icon-size: var(
          --jh-icon-size-medium,
          var(--jh-dimension-600)
        );
      }
      :host([size='large']) {
        --icon-size: var(
          --jh-icon-size-large,
          var(--jh-dimension-900)
        );
      }
      :host([size='x-large']) {
        --icon-size: var(
          --jh-icon-size-extra-large,
          var(--jh-dimension-1400)
        );
      }
      :host([size='xx-large']) {
        --icon-size: var(
          --jh-icon-size-extra-extra-large,
          var(--jh-dimension-2100)
        );
      }
      svg {
        width: 100%;
        height: 100%;
      }
    \`;
  }

  static get properties() {
    return {
      /**
      * The size of the icon.
      */
      size: {
        type: String, reflect: true 
      }
    }
  }

  constructor() {
    super();
    this.#internals = this.attachInternals();
    this.#internals.role = 'graphics-symbol';
    this.#internals.ariaHidden = 'true';

    /** @type {'x-small'|'small'|'medium'|'large'|'x-large'|'xx-large'} */
    this.size = 'medium';
  }

  render() {
    return html\`
      ${escapeSvg(svg)}
    \`;
  }
}

customElements.define('${prefix}-icon-${name}', ${className});`;
};
