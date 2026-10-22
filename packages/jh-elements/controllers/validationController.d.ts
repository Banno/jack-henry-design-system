// SPDX-FileCopyrightText: 2026 Jack Henry
//
// SPDX-License-Identifier: Apache-2.0

import type { ReactiveController, ReactiveControllerHost } from 'lit';

export type CheckableElement = Element & { checked?: boolean };

export type ValidationControllerHost = ReactiveControllerHost &
  HTMLElement & {
    invalid: boolean;
    value?: string | null;
    required?: boolean;
    maxlength?: number;
    minlength?: number;
    pattern?: string;
    min?: number | string;
    max?: number | string;
    step?: number | string;
    minRequired?: number | null;
    maxRequired?: number | null;
    internals?: ElementInternals;
    attachInternals?: () => ElementInternals;
    dispatchCustomEvent?: (eventName: string, detail?: object) => void;
  };

export const VALIDATION_ERROR_TYPES: {
  VALUE_MISSING: 'valueMissing';
  TOO_LONG: 'tooLong';
  TOO_SHORT: 'tooShort';
  PATTERN_MISMATCH: 'patternMismatch';
  TYPE_MISMATCH: 'typeMismatch';
  RANGE_UNDERFLOW: 'rangeUnderflow';
  RANGE_OVERFLOW: 'rangeOverflow';
  STEP_MISMATCH: 'stepMismatch';
};

/**
 * Reactive controller implementing the validation behavior shared by jh-elements form
 * controls.
 */
export class ValidationController implements ReactiveController {
  host: ValidationControllerHost;

  constructor(host: ValidationControllerHost, options?: { isGroupControl?: boolean });

  hostConnected(): void;
  hostDisconnected(): void;

  readonly validity: ValidityState;
  readonly form: HTMLFormElement | null;

  setFormValue(value: string): void;
  checkValidity(): boolean;

  /** Call from the host's `formResetCallback`. */
  reset(): void;

  calculateCheckedCount(): void;
  validateControl(): void;
  validateGroup(): void;
}
