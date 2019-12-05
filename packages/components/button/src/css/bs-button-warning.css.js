import { css } from "lit-element";

export const BsButtonWarningCss = css`
    :host {
        --warning-color: var(--warning, #ffc107);
    }

    :host([context="warning"]:not([outline])) {
        --btn-text-color: var(--btn-warning-text-color, #212529);
        --btn-bg-color: var(--btn-warning-bg-color, var(--warning-color));
        --btn-bd-color: var(--btn-warning-bd-color, var(--warning-color));
        --btn-text-color-hover: var(--btn-warning-text-color-hover, #212529);
        --btn-bg-color-hover: var(--btn-warning-bg-color-hover, #e0a800);
        --btn-bd-color-hover: var(--btn-warning-bd-color-hover, #d39e00);
        --btn-bd-color-focus: var(--btn-warning-bd-color-focus, #d39e00);
        --btn-bg-color-focus: var(--btn-warning-bg-color-focus, #e0a800);
        --btn-text-color-focus: var(--btn-warning-text-color-focus, #fff);
        --btn-box-shadow-focus: var(
            --btn-warning-box-shadow-focus,
            0 0 0 0.2rem rgba(255, 193, 7, 0.5)
        );
        --btn-text-color-disabled: var(
            --btn-warning-text-color-disabled,
            #212529
        );
        --btn-bg-color-disabled: var(
            --btn-warning-bg-color-disabled,
            var(--warning-color)
        );
        --btn-bd-color-disabled: var(
            --btn-warning-bd-color-disabled,
            var(--warning-color)
        );
        --btn-text-color-active: var(--btn-warning-text-color-active, #212529);
        --btn-bg-color-active: var(--btn-warning-bg-color-active, #d39e00);
        --btn-bd-color-active: var(--btn-warning-bd-color-active, #c69500);
        --btn-box-shadow-active-focus: var(
            --btn-warning-box-shadow-active-focus,
            0 0 0 0.2rem rgba(255, 193, 7, 0.5)
        );
    }

    :host([context="warning"][outline]) {
        --btn-text-color: var(
            --btn-outline-warning-text-color,
            var(--warning-color)
        );
        --btn-bg-color: var(
            --btn-outline-warning-bg-color,
            transparent
        );
        --btn-bd-color: var(
            --btn-outline-warning-bd-color,
            var(--warning-color)
        );
        --btn-text-color-hover: var(
            --btn-outline-warning-text-color-hover,
            #212529
        );
        --btn-bg-color-hover: var(
            --btn-outline-warning-bg-color-hover,
            var(--warning-color)
        );
        --btn-bd-color-hover: var(
            --btn-outline-warning-bd-color-hover,
            var(--warning-color)
        );
        --btn-box-shadow-focus: var(
            --btn-outline-warning-box-shadow-focus,
            0 0 0 0.2rem rgba(255, 193, 7, 0.5)
        );
        --btn-text-color-disabled: var(
            --btn-outline-warning-text-color-disabled,
            var(--warning-color)
        );
        --btn-bg-color-disabled: var(
            --btn-outline-warning-bg-color-disabled,
            #transparent
        );
        --btn-text-color-active: var(
            --btn-outline-warning-text-color-active,
            #212529
        );
        --btn-bg-color-active: var(
            --btn-outline-warning-bg-color-active,
            var(--warning-color)
        );
        --btn-bd-color-active: var(
            --btn-outline-warning-bd-color-active,
            var(--warning-color)
        );
        --btn-box-shadow-active-focus: var(
            --btn-outline-warning-box-shadow-active-focus,
            0 0 0 0.2rem rgba(255, 193, 7, 0.5)
        );
    }
`;
