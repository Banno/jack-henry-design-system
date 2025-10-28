import {LitElement, css, html} from 'lit';

export default class JhIconGear extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">   <path fill-rule="evenodd" d="M13.26 2.089h-.001a8.975 8.975 0 0 0-2.518 0l-.357.045a.75.75 0 0 0-.646.616l-.47 2.727A7.063 7.063 0 0 0 7.495 6.55L4.93 5.642a.75.75 0 0 0-.86.271l-.213.299A9.955 9.955 0 0 0 2.65 8.476l-.128.343a.75.75 0 0 0 .251.863l2.185 1.64a6.454 6.454 0 0 0 0 1.358l-2.185 1.64a.75.75 0 0 0-.251.864l.128.342v.001c.305.807.71 1.57 1.205 2.263v.001l.214.298a.75.75 0 0 0 .86.271l2.565-.907a7.06 7.06 0 0 0 1.773 1.073l.47 2.726a.75.75 0 0 0 .646.617l.357.045A9.96 9.96 0 0 0 12 22c.395 0 .797-.028 1.259-.086l.357-.045a.75.75 0 0 0 .646-.617l.47-2.726a7.062 7.062 0 0 0 1.773-1.073l2.565.907a.75.75 0 0 0 .86-.27l.213-.299a9.995 9.995 0 0 0 1.206-2.264v-.001l.128-.342a.75.75 0 0 0-.251-.864l-2.185-1.64c.023-.22.037-.446.037-.679 0-.232-.014-.459-.037-.678l2.185-1.64a.75.75 0 0 0 .251-.864l-.128-.342v-.001a9.958 9.958 0 0 0-1.205-2.264l-.214-.299a.75.75 0 0 0-.86-.27l-2.565.907a7.065 7.065 0 0 0-1.773-1.073l-.47-2.727a.75.75 0 0 0-.646-.616l-.357-.045Zm-2.586 4.063.448-2.598a7.179 7.179 0 0 1 1.756 0l.448 2.598a.75.75 0 0 0 .494.582c.755.26 1.435.678 2.005 1.215a.75.75 0 0 0 .765.162l2.445-.865c.332.49.614 1.019.838 1.576l-2.084 1.565a.75.75 0 0 0-.29.72c.049.304.08.6.08.894 0 .295-.031.591-.08.895a.75.75 0 0 0 .29.72l2.084 1.565a8.468 8.468 0 0 1-.838 1.576l-2.445-.866a.75.75 0 0 0-.765.162 5.57 5.57 0 0 1-2.005 1.216.75.75 0 0 0-.494.581l-.448 2.598c-.328.036-.61.052-.878.052s-.55-.016-.878-.052l-.448-2.598a.75.75 0 0 0-.495-.581 5.566 5.566 0 0 1-2.004-1.216.75.75 0 0 0-.765-.162l-2.445.866a8.463 8.463 0 0 1-.839-1.576l2.085-1.565a.75.75 0 0 0 .29-.721 5.533 5.533 0 0 1-.08-.894c0-.295.03-.591.08-.893a.75.75 0 0 0-.29-.72L4.126 8.821a8.459 8.459 0 0 1 .839-1.576l2.445.865a.75.75 0 0 0 .765-.162 5.566 5.566 0 0 1 2.004-1.215.75.75 0 0 0 .495-.582ZM10.25 12a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0ZM12 8.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z" clip-rule="evenodd"/> </svg> 
    `;
  }
}

customElements.define('jh-icon-gear', JhIconGear);