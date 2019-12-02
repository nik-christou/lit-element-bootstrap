import { css } from "lit-element";

export const BsButtonSuccessCss = css`
    :host {
        --success-color: var(--success, #28a745);
    }

    :host([context="success"]) {
        --btn-text-color: var(--btn-success-text-color, #fff);
        --btn-bg-color: var(--btn-success-bg-color, var(--success-color));
        --btn-bd-color: var(--btn-success-bd-color, var(--success-color));
        --btn-text-color-hover: var(--btn-success-text-color-hover, #fff);
        --btn-bg-color-hover: var(--btn-success-bg-color-hover, #218838);
        --btn-bd-color-hover: var(--btn-success-bd-color-hover, #1e7e34);
        --btn-bd-color-focus: var(--btn-success-bd-color-focus, #1e7e34);
        --btn-box-shadow-focus: var(
            --btn-success-box-shadow-focus,
            0 0 0 0.2rem rgba(40, 167, 69, 0.5)
        );
        --btn-text-color-disabled: var(--btn-success-text-color-disabled, #fff);
        --btn-bg-color-disabled: var(
            --btn-success-bg-color-disabled,
            var(--success-color)
        );
        --btn-bd-color-disabled: var(
            --btn-success-bd-color-disabled,
            var(--success-color)
        );
        --btn-text-color-active: var(--btn-success-text-color-active, #fff);
        --btn-bg-color-active: var(--btn-success-bg-color-active, #1e7e34);
        --btn-bd-color-active: var(--btn-success-bd-color-active, #1c7430);
        --btn-box-shadow-active-focus: var(
            --btn-success-box-shadow-active-focus,
            0 0 0 0.2rem rgba(40, 167, 69, 0.5)
        );
    }

    :host([context="success"][outline]) {
        --btn-text-color: var(
            --btn-outline-success-text-color,
            var(--success-color)
        );
        --btn-bg-color: var(--btn-outline-success-bg-color, transparent);
        --btn-bd-color: var(
            --btn-outline-success-bd-color,
            var(--success-color)
        );
        --btn-text-color-hover: var(
            --btn-outline-success-text-color-hover,
            #fff
        );
        --btn-bg-color-hover: var(
            --btn-outline-success-bg-color-hover,
            var(--success-color)
        );
        --btn-bd-color-hover: var(
            --btn-outline-success-bd-color-hover,
            var(--success-color)
        );
        --btn-box-shadow-focus: var(
            --btn-outline-success-box-shadow-focus,
            0 0 0 0.2rem rgba(40, 167, 69, 0.5)
        );
        --btn-text-color-disabled: var(
            --btn-outline-success-text-color-disabled,
            var(--success-color)
        );
        --btn-bg-color-disabled: var(
            --btn-outline-success-bg-color-disabled,
            #transparent
        );
        --btn-text-color-active: var(
            --btn-outline-success-text-color-active,
            #fff
        );
        --btn-bg-color-active: var(
            --btn-outline-success-bg-color-active,
            var(--success-color)
        );
        --btn-bd-color-active: var(
            --btn-outline-success-bd-color-active,
            var(--success-color)
        );
        --btn-box-shadow-active-focus: var(
            --btn-outline-success-box-shadow-active-focus,
            0 0 0 0.2rem rgba(40, 167, 69, 0.5)
        );
    }
`;
