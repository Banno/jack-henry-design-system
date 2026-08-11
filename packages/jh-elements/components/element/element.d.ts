// SPDX-FileCopyrightText: 2025 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

export class JhElement extends LitElement {
    /**
     * @param {string} tagName
     * @param {CustomElementConstructor} targetClass
     */
    static register(tagName: string, targetClass: CustomElementConstructor): void;
    /** @type {number} */
    get uniqueId(): number;
    /**
     * @protected
     * @type {ElementInternals}
     */
    protected get internals(): ElementInternals;
    /**
     * @param {string} eventName
     * @param {Object} [detail]
     */
    dispatchCustomEvent(eventName: string, detail?: any): void;
    #private;
}
import { LitElement } from 'lit';
