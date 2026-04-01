// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { LitElement, css, html } from 'lit';

let id = 0;
const openAttr = 'open';

/**
 * @cssprop --jh-tooltip-color-background - The tooltip and arrow background-color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-tooltip-color-text - The tooltip text color. Defaults to `--jh-color-content-on-primary-enabled`.
 * @cssprop --jh-tooltip-helper-color-text - The tooltip helper text color. Defaults to `--jh-color-content-on-primary-enabled`.
 *
 * @slot default - Use to insert the element that triggers the tooltip.
 *
 * @customElement jh-tooltip
 */
export class JhTooltip extends LitElement {
  /** @type {ElementInternals} */
  #internals;

  static get styles() {
    return css`
      :host {
        display: inline-block;
        position: relative;
      }
      .tooltip {
        background-color: var(
          --jh-tooltip-color-background,
          var(--jh-color-content-primary-enabled)
        );
        border-radius: var(--jh-border-radius-100);
        padding: var(--jh-dimension-200);
        max-width: 160px;
        width: max-content;
        position: absolute;
        box-sizing: border-box;
        z-index: 1061;
        word-wrap: break-word;
        display: inline-flex;
        flex-direction: column;
        transition: visibility cubic-bezier(0.1, 0.5, 0.1, 1) 0.09s;
        visibility: hidden;
        opacity: 0;
      }
      .tooltip::before {
        position: absolute;
        z-index: 1060;
        width: 0;
        height: 0;
        pointer-events: none;
        content: '';
        border: 4px solid transparent;
      }
      :host .tooltip.show {
        transition: opacity 0.3s cubic-bezier(0.1, 0.5, 0.1, 1) 0s;
        visibility: visible;
        opacity: 1;
      }
      .label {
        color: var(--jh-tooltip-color-text, var(--jh-color-content-on-primary-enabled));
        font-family: var(--jh-font-helper-regular-font-family);
        font-weight: var(--jh-font-helper-regular-font-weight);
        font-size: var(--jh-font-helper-regular-font-size);
        line-height: var(--jh-font-helper-regular-line-height);
      }
      .helper-text {
        color: var(--jh-tooltip-helper-color-text, var(--jh-color-content-on-primary-enabled));
        font-family: var(--jh-font-micro-regular-font-family);
        font-weight: var(--jh-font-micro-regular-font-weight);
        font-size: var(--jh-font-micro-regular-font-size);
        line-height: var(--jh-font-micro-regular-line-height);
      }
      /* padding and margin used to extend hover surface for tooltip persistence */
      :host([position='bottom-center']),
      :host([position='bottom-start']),
      :host([position='bottom-end']) {
        padding-bottom: 8px;
        margin-bottom: -8px;
      }
      :host([position='top-center']),
      :host([position='top-start']),
      :host([position='top-end']) {
        padding-top: 8px;
        margin-top: -8px;
      }
      :host([position='left']) {
        padding-left: 8px;
        margin-left: -8px;
      }
      :host([position='right']) {
        padding-right: 8px;
        margin-right: -8px;
      }

      /* placement of tooltip and arrow. Default is top-center */
      :host([position='bottom-center']) .tooltip,
      :host([position='bottom-start']) .tooltip,
      :host([position='bottom-end']) .tooltip {
        top: 100%;
        right: 50%;
      }
      :host([position='bottom-center']) .tooltip::before,
      :host([position='bottom-start']) .tooltip::before,
      :host([position='bottom-end']) .tooltip::before {
        border-bottom-color: var(
          --jh-tooltip-color-background,
          var(--jh-color-content-primary-enabled)
        );
        top: auto;
        bottom: 100%;
      }
      :host([position='bottom-center']) .tooltip::before {
        margin-right: calc(var(--jh-dimension-200) * -0.5);
        right: 50%;
      }
      :host([position='bottom-start']) .tooltip::before {
        left: var(--jh-dimension-200);
      }
      :host([position='bottom-end']) .tooltip::before {
        right: var(--jh-dimension-200);
      }
      :host([position='bottom-start']) .tooltip {
        margin-left: calc(var(--jh-dimension-200) * -1.5);
        right: auto;
        left: 50%;
      }
      :host([position='bottom-end']) .tooltip {
        margin-right: calc(var(--jh-dimension-200) * -1.5);
      }
      :host([position='top-center']) .tooltip,
      :host([position='top-start']) .tooltip,
      :host([position='top-end']) .tooltip {
        right: 50%;
        bottom: 100%;
      }
      :host([position='top-center']) .tooltip::before,
      :host([position='top-start']) .tooltip::before,
      :host([position='top-end']) .tooltip::before {
        border-top-color: var(
          --jh-tooltip-color-background,
          var(--jh-color-content-primary-enabled)
        );
        top: 100%;
        bottom: auto;
      }
      :host([position='top-center']) .tooltip::before {
        margin-right: calc(var(--jh-dimension-200) * -0.5);
        right: 50%;
      }
      :host([position='top-start']) .tooltip::before {
        left: var(--jh-dimension-200);
      }
      :host([position='top-end']) .tooltip::before {
        right: var(--jh-dimension-200);
      }
      :host([position='top-start']) .tooltip {
        margin-left: calc(var(--jh-dimension-200) * -1.5);
        right: auto;
        left: 50%;
      }
      :host([position='top-end']) .tooltip {
        margin-right: calc(var(--jh-dimension-200) * -1.5);
      }
      :host([position='bottom-center']) .tooltip,
      :host([position='top-center']) .tooltip {
        transform: translateX(50%);
      }
      :host([position='left']) .tooltip {
        right: 100%;
        bottom: 50%;
        transform: translateY(50%);
      }
      :host([position='left']) .tooltip::before {
        border-left-color: var(
          --jh-tooltip-color-background,
          var(--jh-color-content-primary-enabled)
        );
        margin-top: calc(var(--jh-dimension-200) * -0.5);
        top: 50%;
        bottom: 50%;
        left: 100%;
      }
      :host([position='right']) .tooltip {
        bottom: 50%;
        left: 100%;
        transform: translateY(50%);
      }
      :host([position='right']) .tooltip::before {
        border-right-color: var(
          --jh-tooltip-color-background,
          var(--jh-color-content-primary-enabled)
        );
        margin-top: calc(var(--jh-dimension-200) * -0.5);
        top: 50%;
        right: 100%;
        bottom: 50%;
      }
    `;
  }

  static get properties() {
    return {
      /**
       * Determines whether the tooltip flips to a different position when it reaches the edge of the viewport.
       */
      flipDisabled: {
        type: Boolean,
        attribute: 'flip-disabled',
      },
      /**
       * Describes the item which triggered the tooltip.
       */
      label: {
        type: String,
      },
      /**
       * Provides additional context or guidance about the item that triggered the tooltip.
       */
      helperText: {
        type: String,
        attribute: 'helper-text',
      },
      /**
       * Determines whether the tooltip is open or closed. Can be set on the tooltip to force it open.
       */
      open: {
        type: Boolean,
        reflect: true,
      },
      /**
       * The position of the tooltip and its arrow.
       */
      position: {
        type: String,
        reflect: true,
      },
    };
  }

  constructor() {
    super();
    this.#internals = this.attachInternals();
    /**@type {?Boolean} */
    this.flipDisabled = false;
    /** @type {?string} */
    this.label = null;
    /** @type {?string} */
    this.helperText = null;
    /**@type {?Boolean} */
    this.open = false;
    /** @type {?string} */
    this.position = 'top-center';
  }

  connectedCallback() {
    super.connectedCallback();
    /** @ignore */
    this.id = `tooltip-describedby-${id++}`;
    let observer = new MutationObserver(this.#handleEmptyLabel.bind(this));
    let options = {
      childList: true,
    };
    observer.observe(this.shadowRoot, options);
  }

  #handleEmptyLabel(mutations) {
    for (let mutation of mutations) {
      const addedNodes = Array.from(mutation.addedNodes);
      //check if any of the added nodes is a div
      const divAdded = addedNodes.some(
        (addedNode) => addedNode.tagName === 'DIV'
      );

      if (divAdded) {
        this.#internals.role = 'tooltip';
        this.addEventListener('focus', this.#handleOpenTooltip, true);
        this.addEventListener('mouseenter', this.#handleOpenTooltip);
        this.addEventListener('blur', this.#handleCloseTooltip, true);
        this.addEventListener('mouseleave', this.#handleCloseTooltip);
        this.addEventListener('keydown', this.#handleKeyDown);
      }

      if (mutation.removedNodes.length > 0) {
        this.#internals.role = '';
        this.removeEventListener('focus', this.#handleOpenTooltip);
        this.removeEventListener('mouseenter', this.#handleOpenTooltip);
        this.removeEventListener('blur', this.#handleCloseTooltip);
        this.removeEventListener('mouseleave', this.#handleCloseTooltip);
        this.removeEventListener('keydown', this.#handleKeyDown);
      }
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('focus', this.#handleOpenTooltip);
    this.removeEventListener('mouseenter', this.#handleOpenTooltip);
    this.removeEventListener('blur', this.#handleCloseTooltip);
    this.removeEventListener('mouseleave', this.#handleCloseTooltip);
    this.removeEventListener('keydown', this.#handleKeyDown);
  }

  #handleSlotChange() {
    //get id set previously in the constructor and set it to reference aria-describedby on the first element in the slot
    const tooltipId = this.getAttribute('id');
    this.firstElementChild.setAttribute('aria-describedby', tooltipId);

    //get display property of element in slot and set it on the jh-tooltip.
    const tooltipDisplay = window.getComputedStyle(this.firstElementChild).display;
    this.style.setProperty('display', tooltipDisplay );
  }

  //calls flipTooltip whenever the tooltip is updated, including manually opened with 'open' property.
updated(changedProperties) {
  if (
    this.open &&
    (changedProperties.has('open') ||
      changedProperties.has('label') ||
      changedProperties.has('helperText') ||
      changedProperties.has('position'))
  ) {
    requestAnimationFrame(() => {
      this.#flipTooltip();
    });
  }
}

  #handleKeyDown(e) {
    if (e.key === 'Escape') this.#handleCloseTooltip();
  }

  #handleOpenTooltip() {
      this.setAttribute(openAttr, '');
  }

  #handleCloseTooltip() {
    this.removeAttribute(openAttr);
  }

  //method to flip the tooltip if it is not fully visible on the viewport
  #flipTooltip() {
    //get current position from attribute on hover 
    const currentPosition = this.getAttribute('position');

    //check if current position is a valid position otherwise make it fail.
    if (!['left', 'right', 'top-start', 'top-end', 'top-center', 'bottom-start', 'bottom-end', 'bottom-center'].includes(currentPosition)) return;
    
    if (this.flipDisabled === false && (this.label || this.helperText)) {
     
      //break current position into tooltop position and arrow position
      const [currentTooltip, currentArrow] = currentPosition.split('-');

      //get an array of the available positions
      const availablePositions = this.#getValidPositions();

      //check if position selected by developer is available
      const currentPositionAvailable = (position) =>
        currentPosition === position;

      //check if there is an available position with the same tooltipPosition but a different arrowPosition (top-end -> top-center)
      const hasSameTooltipDifferentArrow = (position) =>
        currentTooltip === position.split('-')[0];

      //check if the opposite position is available
      const hasOppositePosition = (position) => {
        const [newTooltip, newArrow] = position.split('-');

        return (
          (currentPosition === 'left' && position === 'right') ||
          (currentPosition === 'right' && position === 'left') ||
          (currentTooltip === 'bottom' &&
            newTooltip === 'top' &&
            currentArrow === newArrow) ||
          (currentTooltip === 'top' &&
            newTooltip === 'bottom' &&
            currentArrow === newArrow)
        );
      };
  
      //set the position attribute if the position selected by developer is valid but not available.
        if (!availablePositions.some(currentPositionAvailable)) {
          const newPosition =
            availablePositions.find(hasSameTooltipDifferentArrow) ||
            availablePositions.find(hasOppositePosition) ||
            availablePositions[0];
  
          this.setAttribute('position', newPosition);
        }
      }
    }

  //method to check if the tooltip is fully visible on the screen
  #getValidPositions() {
    const { tooltipWidth, tooltipHeight, elemHeight, elemWidth } =
      this.#getDimensions();

    const { elemLeft, elemRight, elemTop, elemBottom } = this.#getCoordinates();

    //Returns false if tooltip with position top (start/center/end) is out of the screen on the top
    const topOutTop = elemTop - tooltipHeight > 0;

    //Returns false if tooltip with position bottom (start/center/end) is out of the screen on the bottom
    const bottomOutBottom = elemBottom - tooltipHeight > 0;

    //Returns false if tooltip with position right is out of the screen on the right
    const rightOutRight = elemRight - tooltipWidth > 0;

    //Returns false if tooltip with position left is out of the screen on the left
    const leftOutLeft = elemLeft - tooltipWidth > 0;

    //Returns false if tooltip with position left or right is out of the screen on the top
    const sideOutTop = this.#calculateSimmetricPositions(
      elemTop,
      elemHeight,
      tooltipHeight
    );

    //Returns false if tooltip with position left or right is out of the screen on the bottom
    const sideOutBottom = this.#calculateSimmetricPositions(
      elemBottom,
      elemHeight,
      tooltipHeight
    );

    //Returns false if tooltip with position top-start or bottom-start is out of the screen on the right
    const startOutRight = window.innerWidth - elemLeft - tooltipWidth > 0;

    //Returns false if tooltip with position top-start or bottom-start is out of the screen on the left
    const startOutLeft = elemLeft > 0;

    //Returns false if tooltip with position top-center or bottom-center is out of the screen on the right
    const centerOutRight = this.#calculateSimmetricPositions(
      elemRight,
      elemWidth,
      tooltipWidth
    );

    //Returns false if tooltip with position top-center or bottom-center is out of the screen on the left
    const centerOutLeft = this.#calculateSimmetricPositions(
      elemLeft,
      elemWidth,
      tooltipWidth
    );

    //Returns false if tooltip with position top-end or bottom-end is out of the screen on the right
    const endOutRight = elemRight > 0;

    //Returns false if tooltip with position top-end or bottom-end is out of the screen on the left
    const endOutLeft = elemLeft + elemWidth - tooltipWidth > 0;

    //returns true if the 3 conditions are met. Means the tooltip is fully visible on the screen in that position.
    const allPositions = {
      left: leftOutLeft && sideOutTop && sideOutBottom,
      right: rightOutRight && sideOutTop && sideOutBottom,
      'top-start': topOutTop && startOutRight && startOutLeft,
      'bottom-start': bottomOutBottom && startOutRight && startOutLeft,
      'top-center': topOutTop && centerOutRight && centerOutLeft,
      'bottom-center': bottomOutBottom && centerOutRight && centerOutLeft,
      'top-end': topOutTop && endOutRight && endOutLeft,
      'bottom-end': bottomOutBottom && endOutRight && endOutLeft,
    };

    //add valid positions to an array and return it.
    const validPositions = Object.entries(allPositions).reduce(
      (positions, [key, value]) => (value ? [...positions, key] : positions),
      []
    );
    return validPositions;
  }

  //get the dimensions of the tooltip and the originating element
  #getDimensions() {
    return {
      tooltipWidth: this.shadowRoot
        .querySelector('.tooltip')
        .getBoundingClientRect().width,
      tooltipHeight: this.shadowRoot
        .querySelector('.tooltip')
        .getBoundingClientRect().height,
      elemHeight: this.getBoundingClientRect().height,
      elemWidth: this.getBoundingClientRect().width,
    };
  }

  //get the coordinates of the 4 edges of the originating element
  #getCoordinates() {
    return {
      elemLeft: this.getBoundingClientRect().left,
      elemRight: window.innerWidth - this.getBoundingClientRect().right,
      elemTop: this.getBoundingClientRect().top,
      elemBottom: window.innerHeight - this.getBoundingClientRect().bottom,
    };
  }

  #calculateSimmetricPositions(elemEdge, elemDimension, tooltipDimension) {
    return elemEdge + elemDimension / 2 - tooltipDimension / 2 > 0;
  }

  render() {
    let tooltip;

    if (this.label || this.helperText) {
      tooltip = html`
        <div
          class=${this.open ? 'tooltip show' : 'tooltip'}
          aria-hidden=${this.open ? 'false' : 'true'}
        >
          ${this.label ? html`<div class="label">${this.label}</div>` : ''}
          ${this.helperText ? html`<div class="helper-text">${this.helperText}</div>` : ''}
    </div>
      `;
    }

    return html`
      <slot @slotchange=${this.#handleSlotChange}></slot>
      ${tooltip}
    `;
  }
}

customElements.define('jh-tooltip', JhTooltip);
