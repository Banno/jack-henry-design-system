import {LitElement, css, html} from 'lit';

export default class JhIconHouseDollarSign extends LitElement {
  /** @type {ElementInternals} */
  #internals;

  static get styles() {
    return css`
      :host {
        fill: var(
          --jh-icon-color-fill,
          var(--jh-color-content-secondary-enabled)
        );
        width: var(--icon-size);
        height: var(--icon-size);
        display: inline-block;
      }
      :host([size='x-small']) {
        --icon-size: var(
          --jh-icon-size-extra-small,
          var(--jh-size-400)
        );
      }
      :host([size='small']) {
        --icon-size: var(
          --jh-icon-size-small,
          var(--jh-size-500)
        );
      }
      :host([size='medium']) {
        --icon-size: var(
          --jh-icon-size-medium,
          var(--jh-size-600)
        );
      }
      :host([size='large']) {
        --icon-size: var(
          --jh-icon-size-large,
          var(--jh-size-900)
        );
      }
      :host([size='x-large']) {
        --icon-size: var(
          --jh-icon-size-extra-large,
          var(--jh-size-1400)
        );
      }
      svg {
        width: 100%;
        height: 100%;
      }
    `;
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

    /** @type {'x-small'|'small'|'medium'|'large'|'x-large'} */
    this.size = 'medium';
  }

  render() {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M11.506 2.936a.75.75 0 0 1 .988 0l3.256 2.849V4.5h2v3h-.04l2.784 2.436a.75.75 0 1 1-.988 1.129l-.756-.662v7.347H20a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5h1.25v-7.347l-.756.662a.75.75 0 1 1-.988-1.13l8-7ZM17.25 9.09v8.66H6.75V9.09L12 4.497l5.25 4.594Zm-4.75-.34v-.5h-1v.754c-.273.06-.538.174-.765.347a1.59 1.59 0 0 0-.635 1.298c0 .663.226 1.137.605 1.474.332.295.757.457 1.083.58l.034.013c.37.141.627.246.808.407.146.13.27.322.27.726a.591.591 0 0 1-.24.502c-.16.122-.398.198-.66.198s-.5-.076-.66-.198a.591.591 0 0 1-.24-.502v-.5h-1v.5c0 .565.255 1.009.635 1.298.227.173.492.287.765.348v.754h1v-.755c.273-.06.538-.174.765-.347.38-.29.635-.733.635-1.298 0-.662-.226-1.136-.605-1.473-.332-.296-.757-.457-1.083-.581l-.034-.013c-.37-.14-.627-.245-.808-.406-.146-.13-.27-.323-.27-.727 0-.235.095-.391.24-.502.16-.122.398-.198.66-.198s.5.077.66.198c.145.111.24.267.24.502v.5h1v-.5a1.59 1.59 0 0 0-.635-1.297 1.967 1.967 0 0 0-.765-.348V8.75Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-house-dollar-sign', JhIconHouseDollarSign);