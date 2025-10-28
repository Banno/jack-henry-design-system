import { JhInput } from '../input/input.js';

/**
 * Input Telephone
 * @customElement jh-input-telephone
 */
export class JhInputTelephone extends JhInput {
  firstUpdated() {
    super.firstUpdated();
    let inputEl = this.shadowRoot.querySelector('input');
    inputEl.setAttribute('type', 'tel');
  }
}
customElements.define('jh-input-telephone', JhInputTelephone);