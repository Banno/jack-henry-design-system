// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import { css, html } from 'lit';
import { JhElement } from '../element/element.js';

const openAttr = 'open';
const positions = ['left', 'right', 'top-start', 'top-end', 'top-center', 'bottom-start', 'bottom-end', 'bottom-center'];
const closeDelay = 100;
const openDelay = 100;
/** @type {JhTooltip | undefined} */
let activeTooltip;

/**
 * Tooltips are floating components that appears when a user hovers or focuses onto an originating element 
 * such as a button, icon or link. They display additional information about the originating element which is not 
 * critical in nature.
 * 
 * [Tooltip Storybook Documentation](https://main--68f8e6a25b256d0ef89b13e6.chromatic.com/?path=/docs/components-tooltip--docs)
 * 
 * @cssprop --jh-tooltip-color-background - The tooltip and arrow background-color. Defaults to `--jh-color-content-primary-enabled`.
 * @cssprop --jh-tooltip-color-text - The tooltip text color. Defaults to `--jh-color-content-on-primary-enabled`.
 * @cssprop --jh-tooltip-size-max-width - The maximum width of the tooltip. Defaults to `160px`.
 *
 * @slot default - Use to insert the element that triggers the tooltip.
 * @slot jh-tooltip-content - Use to insert the content of the tooltip.
 *
 * @customElement jh-tooltip
 */
export class JhTooltip extends JhElement {

  /** @type {number | undefined} */
  #closeTimer;
  /** @type {number | undefined} */
  #openTimer;
  /** @type {Element | null} */
  #describedElement = null;
  /** @type {number} */
  #descriptionRequest = 0;

  static get styles() {
    return css`
      :host {
        display: inline-block;
        anchor-name: --jh-tooltip-anchor;
      }
      :host span {
        position-anchor: --jh-tooltip-anchor;
        background-color: var(
          --jh-tooltip-color-background,
          var(--jh-color-content-primary-enabled)
        );
        color: var(
          --jh-tooltip-color-text,
          var(--jh-color-content-on-primary-enabled)
        );
        max-width: var(--jh-tooltip-size-max-width, 160px);
        border-radius: var(--jh-border-radius-100);
        padding: var(--jh-dimension-200);
        font-family: var(--jh-font-helper-bold-font-family);
        font-weight: var(--jh-font-helper-bold-font-weight);
        font-size: var(--jh-font-helper-bold-font-size);
        line-height: var(--jh-font-helper-bold-line-height);
        width: max-content;
        box-sizing: border-box;
        word-wrap: break-word;
        border: 0;
        overflow: visible; /* keeps the ::before arrow from being clipped */
        margin: 0;
        inset: auto;
      }
      span::before {
        position: absolute;
        z-index: 1060;
        width: 0;
        height: 0;
        pointer-events: none;
        content: '';
        border: 4px solid transparent;
      }
      .content.placement-bottom-center::before,
      .content.placement-bottom-start::before,
      .content.placement-bottom-end::before {
        border-bottom-color: var(
          --jh-tooltip-color-background,
          var(--jh-color-content-primary-enabled)
        );
        top: auto;
        bottom: 100%;
      }
      .content.placement-bottom-center::before {
        margin-right: calc(var(--jh-dimension-200) * -0.5);
        right: 50%;
      }
      .content.placement-bottom-start::before {
        left: var(--jh-dimension-200);
      }
      .content.placement-bottom-end::before {
        right: var(--jh-dimension-200);
      }
      .content.placement-top-center::before,
      .content.placement-top-start::before,
      .content.placement-top-end::before {
        border-top-color: var(
          --jh-tooltip-color-background,
          var(--jh-color-content-primary-enabled)
        );
        top: 100%;
        bottom: auto;
      }
      .content.placement-top-center::before {
        margin-right: calc(var(--jh-dimension-200) * -0.5);
        right: 50%;
      }
      .content.placement-top-start::before {
        left: var(--jh-dimension-200);
      }
      .content.placement-top-end::before {
        right: var(--jh-dimension-200);
      }
      .content.placement-left::before {
        border-left-color: var(
          --jh-tooltip-color-background,
          var(--jh-color-content-primary-enabled)
        );
        margin-top: calc(var(--jh-dimension-200) * -0.5);
        top: 50%;
        bottom: 50%;
        left: 100%;
      }
      .content.placement-right::before {
        border-right-color: var(
          --jh-tooltip-color-background,
          var(--jh-color-content-primary-enabled)
        );
        margin-top: calc(var(--jh-dimension-200) * -0.5);
        top: 50%;
        right: 100%;
        bottom: 50%;
      }
            @supports (anchor-name: --a) {
        /* main axis: place against the trigger with the 8px gap */
        .content.placement-top-start,
        .content.placement-top-center,
        .content.placement-top-end {
          bottom: anchor(top);
          margin-bottom: var(--jh-dimension-200);
        }
        .content.placement-bottom-start,
        .content.placement-bottom-center,
        .content.placement-bottom-end {
          top: anchor(bottom);
          margin-top: var(--jh-dimension-200);
        }
        .content.placement-left {
          right: anchor(left);
          margin-right: var(--jh-dimension-200);
        }
        .content.placement-right {
          left: anchor(right);
          margin-left: var(--jh-dimension-200);
        }

        /* cross axis: center on the trigger; translate doesn't affect layout, so the browser never shifts it */
        .content.placement-top-center,
        .content.placement-bottom-center {
          left: anchor(center);
          translate: -50% 0;
        }
        .content.placement-left,
        .content.placement-right {
          top: anchor(center);
          translate: 0 -50%;
        }

        /* start/end: the arrow (1.5 × dimension-200 in from the edge) lines up with the anchor's center */
        .content.placement-top-start,
        .content.placement-bottom-start {
          left: calc(anchor(center) - var(--jh-dimension-200) * 1.5);
        }
        .content.placement-top-end,
        .content.placement-bottom-end {
          right: calc(anchor(center) - var(--jh-dimension-200) * 1.5);
        }
      }
    `;
  }

  static get properties() {
    return {
      flipDisabled: {
        type: Boolean,
        attribute: 'flip-disabled',
      },
      open: {
        type: Boolean,
        reflect: true,
      },
      position: {
        type: String,
        reflect: true,
      },
      _placement: { 
        type: String, 
        state: true 
      },
    };
  }

  constructor() {
    super();
    /**
     * Determines whether the tooltip flips to a different position when it reaches the edge of the viewport.
     * @attr flip-disabled
     * @type {boolean}
     */
    this.flipDisabled = false;
    /**
     * Determines whether the tooltip is open or closed. Can be set on the tooltip to force it open.
     * @type {boolean}
     */
    this.open = false;
    /**
     * The position of the tooltip and its arrow.
     * @type { 'left' | 'right' | 'top-start' | 'top-end' | 'top-center' | 'bottom-start' | 'bottom-end' | 'bottom-center' }
     */
    this.position = 'top-center';
     /** 
      * The placement of the tooltip when it needs to flip.
      * @internal @type {string | undefined} */
    this._placement = undefined;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('focus', this.#handleOpenTooltip, true);
    this.removeEventListener('mouseenter', this.#handleMouseEnter);
    this.removeEventListener('blur', this.#handleCloseTooltip, true);
    this.removeEventListener('mouseleave', this.#handleMouseLeave);
    document.removeEventListener('keydown', this.#handleKeyDown);
    clearTimeout(this.#openTimer);
    clearTimeout(this.#closeTimer);
    if (activeTooltip === this) activeTooltip = undefined;
  }

  #handleContentSlotChange(e) {
    const slot = e.target;
    const hasContent = slot.assignedNodes().length > 0;

    if (hasContent) {
      this.addEventListener('focus', this.#handleOpenTooltip, true);
      this.addEventListener('mouseenter', this.#handleMouseEnter);
      this.addEventListener('blur', this.#handleCloseTooltip, true);
      this.addEventListener('mouseleave', this.#handleMouseLeave);
    } else {
      this.#handleCloseTooltip();
      this.removeEventListener('focus', this.#handleOpenTooltip, true);
      this.removeEventListener('mouseenter', this.#handleMouseEnter);
      this.removeEventListener('blur', this.#handleCloseTooltip, true);
      this.removeEventListener('mouseleave', this.#handleMouseLeave);
    }
    this.#updateDescription();
  }

  #handleSlotChange(e) {
    this.#updateDescription();

    const slottedElements = e.target.assignedElements();
    const tooltipContent = this.shadowRoot.querySelector('slot[name="jh-tooltip-content"]').assignedElements();

    if (slottedElements.length === 0 || tooltipContent.length === 0) {
      return;
    }
    const triggerElement = slottedElements[0];

    //get display property of element in slot and set it on the jh-tooltip.
    const tooltipDisplay = window.getComputedStyle(triggerElement).display;
    this.style.setProperty('display', tooltipDisplay );
  }

  // for aria-describedby: links the focusable element to the tooltip content; it may be inside the trigger's shadow root (e.g. jh-button)
  async #updateDescription() {
    const request = ++this.#descriptionRequest;
    const [trigger] = this.shadowRoot.querySelector('slot:not([name])').assignedElements();
    const content = this.shadowRoot.querySelector('slot[name="jh-tooltip-content"]').assignedElements();

    if (this.#describedElement) this.#describedElement.ariaDescribedByElements = null;
    this.#describedElement = null;
    if (!trigger || content.length === 0) return;

    // Lit triggers render their shadow content asynchronously
    await trigger.updateComplete;
    // a newer slot change superseded this one while waiting
    if (request !== this.#descriptionRequest) return;

    const focusable = 'button, a[href], input, select, textarea, [tabindex]';
    const focusTarget = trigger.matches(focusable)
      ? trigger
      : trigger.shadowRoot?.querySelector(focusable) ?? trigger;
    focusTarget.ariaDescribedByElements = content;
    this.#describedElement = focusTarget;
  }

  //calls getPlacement() whenever the tooltip is updated, including manually opened with 'open' property.
  /** @protected */
  updated(changedProperties) {
    if (changedProperties.has('open')) {
      this.shadowRoot.querySelector('.content').togglePopover(this.open);
      if (this.open) {
        document.addEventListener('keydown', this.#handleKeyDown);
      } else {
        document.removeEventListener('keydown', this.#handleKeyDown);
      }
    }
    if (this.open && !changedProperties.has('_placement')) {
      this._placement = this.#getPlacement();
    }
  }

  #handleKeyDown = (e) => {
    if (e.key === 'Escape') this.#handleCloseTooltip();
  }

  #handleOpenTooltip() {
    if (activeTooltip && activeTooltip !== this) activeTooltip.#handleCloseTooltip();
    activeTooltip = this;
    this.setAttribute(openAttr, '');
  }

  #handleCloseTooltip() {
    clearTimeout(this.#openTimer);
    clearTimeout(this.#closeTimer);
    if (activeTooltip === this) activeTooltip = undefined;
    this.removeAttribute(openAttr);
  }

  #handleMouseEnter = () => {
    clearTimeout(this.#closeTimer);
    if (this.open) return;
    clearTimeout(this.#openTimer);
    this.#openTimer = setTimeout(() => this.#handleOpenTooltip(), openDelay);
  };

  #handleMouseLeave = () => {
    clearTimeout(this.#openTimer);
    clearTimeout(this.#closeTimer);
    this.#closeTimer = setTimeout(() => this.#handleCloseTooltip(), closeDelay);
  };

  // returns the placement to render: the consumer's position, or a flipped one if it doesn't fit
  #getPlacement() {
    const position = this.position;
    if (!positions.includes(position)) return 'top-center';
    if (this.flipDisabled) return position;

    const availablePositions = this.#getValidPositions();
    if (availablePositions.includes(position)) return position;

    const [currentTooltip, currentArrow] = position.split('-');

    // same side, different arrow (top-end -> top-center)
    const hasSameTooltipDifferentArrow = (p) => currentTooltip === p.split('-')[0];

    // opposite side, same arrow (top-end -> bottom-end, left -> right)
    const hasOppositePosition = (p) => {
      const [newTooltip, newArrow] = p.split('-');
      return (
        (position === 'left' && p === 'right') ||
        (position === 'right' && p === 'left') ||
        (currentTooltip === 'bottom' && newTooltip === 'top' && currentArrow === newArrow) ||
        (currentTooltip === 'top' && newTooltip === 'bottom' && currentArrow === newArrow)
      );
    };

    return (
      availablePositions.find(hasSameTooltipDifferentArrow) ||
      availablePositions.find(hasOppositePosition) ||
      availablePositions[0] ||
      position
    );
  }

  //method to check if the tooltip is fully visible on the screen
  #getValidPositions() {
    const gap = 8; // matches the var(--jh-dimension-200) margin between tooltip and trigger
    const { tooltipWidth, tooltipHeight, elemHeight, elemWidth } =
      this.#getDimensions();

    const { elemLeft, elemRight, elemTop, elemBottom } = this.#getCoordinates();

    //Returns false if tooltip with position top (start/center/end) is out of the screen on the top
    const topOutTop = elemTop - tooltipHeight - gap > 0;

    //Returns false if tooltip with position bottom (start/center/end) is out of the screen on the bottom
    const bottomOutBottom = elemBottom - tooltipHeight - gap > 0;

    //Returns false if tooltip with position right is out of the screen on the right
    const rightOutRight = elemRight - tooltipWidth - gap > 0;

    //Returns false if tooltip with position left is out of the screen on the left
    const leftOutLeft = elemLeft - tooltipWidth - gap > 0;

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
        .querySelector('.content')
        .getBoundingClientRect().width,
      tooltipHeight: this.shadowRoot
        .querySelector('.content')
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

  /** @protected */
  render() {
    return html`
      <slot @slotchange=${this.#handleSlotChange}></slot>
      <span
        class="content placement-${this._placement ?? this.position}"
        role="tooltip"
        popover="manual">
        <slot name="jh-tooltip-content" @slotchange=${this.#handleContentSlotChange}></slot>
      </span>

    `;
  }
}

JhTooltip.register('jh-tooltip', JhTooltip);
