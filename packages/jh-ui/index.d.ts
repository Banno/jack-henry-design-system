import { JhButton } from './components/button/button.js';
import { JhIcon } from './components/icon/icon.js';
import { JhDivider } from './components/divider/divider.js';
import { JhCard } from './components/card/card.js';
import { JhRadio } from './components/radio/radio.js';
import { JhProgress } from './components/progress/progress.js';
import { JhTooltip } from './components/tooltip/tooltip.js';
import { JhCheckbox } from './components/checkbox/checkbox.js';
import { JhListItem } from './components/list-item/list-item.js';
import { JhListGroup } from './components/list-group/list-group.js';
import { JhSwitch } from './components/switch/switch.js';
import { JhCheckboxGroup } from './components/checkbox-group/checkbox-group.js';
import { JhRadioGroup } from './components/radio-group/radio-group.js';
import { JhMenu } from './components/menu/menu.js';
import { JhToast } from './components/toast/toast.js';
import { JhToastController } from './components/toast-controller/toast-controller.js';
import { JhBadge } from './components/badge/badge.js';
import { JhTag } from './components/tag/tag.js';
import { JhTagGroup } from './components/tag-group/tag-group.js';

declare global {
  interface HTMLElementTagNameMap {
    'jh-button': JhButton;
    'jh-icon': JhIcon;
    'jh-divider': JhDivider;
    'jh-card': JhCard;
    'jh-radio': JhRadio;
    'jh-progress': JhProgress;
    'jh-tooltip': JhTooltip;
    'jh-checkbox': JhCheckbox;
    'jh-list-item': JhListItem;
    'jh-list-group': JhListGroup;
    'jh-input': JhInput;
    'jh-switch': JhSwitch;
    'jh-checkbox-group': JhCheckboxGroup;
    'jh-radio-group': JhRadioGroup;
    'jh-menu': JhMenu;
    'jh-toast': JhToast;
    'jh-toast-controller': JhToastController;
    'jh-badge': JhBadge;
    'jh-tag': JhTag;
    'jh-tag-group': JhTagGroup;
  }
}
