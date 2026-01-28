import {html, css, LitElement} from 'lit';
import { setJhTheme } from '../../../../packages/jh-elements/utils/themeProvider.js';
import '../../../../packages/jh-elements/components/button/button.js';
import '../../../../packages/jh-elements/components/card/card.js';
import '../../../../packages/jh-elements/components/list-item/list-item.js';
import '../../../../packages/jh-elements/components/checkbox/checkbox.js';
import '../../../../packages/jh-elements/components/switch/switch.js';
import '../../../../packages/jh-elements/components/checkbox-group/checkbox-group.js';

export class AppContainer extends LitElement {
  static styles = css`
    p { color: blue }

    :host {
      --jh-list-item-space-padding-left: 0px;
      --jh-font-family-primary: "Times New Roman",
    }
  `;

  static properties = {
    name: {type: String},
  };

  constructor() {
    super();
    this.name = 'Somebody';

    setJhTheme();
  }

  render() {
    let checkbox = document.createElement('jh-checkbox');
    checkbox.label = true;
    return html`
      <div> In App Container
        <jh-card footer-divider-inset="32"></jh-card>
        <jh-checkbox-group label ></jh-checkbox-group>
        <jh-switch label></jh-switch>
        <jh-checkbox-group label="hello"></jh-checkbox-group>
          <jh-checkbox label="hello" ></jh-checkbox>
          <jh-checkbox label="hello" disabled ></jh-checkbox>
        </jh-checkbox-group>
        <jh-button label >Button</jh-button>
      </div>
    `;
  }
}
customElements.define('app-container', AppContainer);
