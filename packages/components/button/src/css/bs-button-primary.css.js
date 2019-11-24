
import { css } from 'lit-element';

export const BsButtonPrimaryCss = css`

    :host([context="primary"]) {
        --btn-text-color: var(--btn-primary-text-color, #fff);
        --btn-bg-color: var(--btn-primary-bg-color, #007bff);
        --btn-bd-color: var(--btn-primary-bd-color, #007bff);
        --btn-text-color-hover: var(--btn-primary-text-color-hover, #fff);
        --btn-bg-color-hover: var(--btn-primary-bg-color-hover, #0069d9);
        --btn-bd-color-hover: var(--btn-primary-bd-color-hover, #0062cc);
        --btn-box-shadow-focus: var(--btn-primary-box-shadow-focus, 0 0 0 0.2rem rgba(38,143,255,0.5));
        --btn-text-color-disabled: var(--btn-primary-text-color-disabled, #fff);
        --btn-bg-color-disabled: var(--btn-primary-bg-color-disabled, #007bff);
        --btn-bd-color-disabled: var(--btn-primary-bd-color-disabled, #007bff);
        --btn-text-color-active: var(--btn-primary-text-color-active, #fff);
        --btn-bg-color-active: var(--btn-primary-bg-color-active, #0062cc);
        --btn-bd-color-active: var(--btn-primary-bd-color-active, #005cbf);
        --btn-text-color-active-focus: var(--btn-primary-text-color-active-focus, #fff);
        --btn-box-shadow-active-focus: var(--btn-primary-box-shadow-active-focus, 0 0 0 0.2rem rgba(0,123,255,0.5));
    }
`;