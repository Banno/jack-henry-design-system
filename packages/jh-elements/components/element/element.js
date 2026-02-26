/**
 * SPDX-FileCopyrightText: 2025 Jack Henry
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { LitElement } from 'lit';

let id = 0;
/**
 * Element
 * @customElement jh-element
 */
export class JhElement extends LitElement {
  /** @type {ElementInternals} */
  #internals;
  /** @type {number} */
  #id;

  constructor() {
    super();
    /** @type {ElementInternals} */
    this.#internals = this.attachInternals();
  }

  connectedCallback() {
    super.connectedCallback();
    this.#id = id++;
  }

  // getter for unique id
  /** @ignore */
  get uniqueId() {
    return this.#id;
  }

  // getter for element internals
  /** @ignore */
  get internals() {
    return this.#internals;
  }

  // custom event dispatcher (TODO: add additional event properties)
  dispatchCustomEvent(eventName, e, detail = {}) {
    // gather base detail info
    let baseDetail = {
      form: {
        formName: this.form?.name || null,
        name: this.name || null,
      },
      state: {
        previousValue: this.previousValue || null,
        validity: this.validity || null,
        value: this.value || null,
      },
      reference: {
        id: this.uniqueId,
        label: this.label || null,
        accessibleLabel: this.accessibleLabel || null,
        originElement: e?.target?.localName || null, 
        originHost: this.localName, 
      },
      meta: {
        originalEvent: e || null,
        timestamp: Date.now(),
        rect: this.getBoundingClientRect(),
      },
    };

    const keysToMerge = ['form', 'state', 'reference', 'meta'];
    let finalDetail = { ...baseDetail };

    // merge subclass properties into the base properties for each key
    for (const key of keysToMerge) {
      if (detail[key]) {
        finalDetail[key] = { ...baseDetail[key], ...detail[key] };
      }
    }

    // Handle any "extra" properties that aren't in the standard keys
    Object.keys(detail).forEach(key => {
      if (!keysToMerge.includes(key)) {
        finalDetail[key] = detail[key];
      }
    });

    // create and dispatch event
    const event = new CustomEvent(eventName, {
      detail: finalDetail,
      bubbles: true,
      composed: true,
      cancelable: true,
    });
    this.dispatchEvent(event);
  }

  // register method to avoid custom element registry conflicts
  static register(tagName, targetClass) {
    if (customElements.get(tagName)) {
      console.warn(
        `Registry Conflict: <${tagName}> is already owned by another script.`
      );
      return;
    }
    customElements.define(tagName, targetClass);
  }
}
customElements.define('jh-element', JhElement);
