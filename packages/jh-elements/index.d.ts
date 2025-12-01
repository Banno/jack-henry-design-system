// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

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
import { JhInput } from './components/input/input.js';
import { JhInputPassword } from './components/input-password/input-password.js';
import { JhInputSearch } from './components/input-search/input-search.js';
import { JhInputEmail } from './components/input-email/input-email.js';
import { JhInputUrl } from './components/input-url/input-url.js';
import { JhInputTelephone } from './components/input-telephone/input-telephone.js';
import { JhInputTextarea } from './components/input-textarea/input-textarea.js';
import { JhTable } from './components/table/table.js';
import { JhTableRow } from './components/table-row/table-row.js';
import { JhTableDataCell } from './components/table-data-cell/table-data-cell.js';
import { JhTableHeaderCell } from './components/table-header-cell/table-header-cell.js';

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
    'jh-input-password': JhInputPassword;
    'jh-input-search': JhInputSearch;
    'jh-switch': JhSwitch;
    'jh-checkbox-group': JhCheckboxGroup;
    'jh-radio-group': JhRadioGroup;
    'jh-menu': JhMenu;
    'jh-toast': JhToast;
    'jh-toast-controller': JhToastController;
    'jh-badge': JhBadge;
    'jh-tag': JhTag;
    'jh-tag-group': JhTagGroup;
    'jh-input-email': JhInputEmail;
    'jh-input-url': JhInputUrl;
    'jh-input-telephone': JhInputTelephone;
    'jh-input-textarea': JhInputTextarea;
    'jh-table': JhTable;
    'jh-table-row': JhTableRow;
    'jh-table-data-cell': JhTableDataCell;
    'jh-table-header-cell': JhTableHeaderCell;
  }
}
