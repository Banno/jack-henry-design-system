---
to: components/<%= unprefixedName %>/<%= unprefixedName %>.js
---
import { LitElement, css, html } from 'lit';

/**
 * <%= titleName %>
 * @customElement <%= elementName %>
 */
export class <%= className %> extends LitElement {
  static get styles() {
    return css`
        :host {

      }
    `;
  }

  static get properties() {
    return {
      /** Property description */
      someProperty: { type: String }
    };
  }

  constructor() {
    super();
    /** @type {?string} */
    this.someProperty = 'some initial value';
  }

  render() {
    return html`

    `;
  }
}

customElements.define('<%= elementName %>', <%= className %>);