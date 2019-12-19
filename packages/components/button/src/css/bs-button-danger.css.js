import { css } from "lit-element";

export const BsButtonDangerCss = css`
    :host {
        --danger-color: var(--danger, #dc3545);
    }

    bs-button[context="danger"]:not([outline]),
    bs-button-link[context="danger"]:not([outline]),
    bs-button-input[context="danger"]:not([outline]) {
        --btn-text-color: var(--btn-danger-text-color, #fff);
        --btn-bg-color: var(--btn-danger-bg-color, var(--danger-color));
        --btn-bd-color: var(--btn-danger-bd-color, var(--danger-color));
        --btn-text-color-hover: var(--btn-danger-text-color-hover, #fff);
        --btn-bg-color-hover: var(--btn-danger-bg-color-hover, #c82333);
        --btn-bd-color-hover: var(--btn-danger-bd-color-hover, #bd2130);
        --btn-bd-color-focus: var(--btn-danger-bd-color-focus, #bd2130);
        --btn-bg-color-focus: var(--btn-danger-bg-color-focus, #c82333);
        --btn-text-color-focus: var(--btn-danger-text-color-focus, #fff);
        --btn-box-shadow-focus: var(
            --btn-danger-box-shadow-focus,
            0 0 0 0.2rem rgba(220, 53, 69, 0.5)
        );
        --btn-text-color-disabled: var(
            --btn-danger-text-color-disabled,
            #fff
        );
        --btn-bg-color-disabled: var(
            --btn-danger-bg-color-disabled,
            var(--danger-color)
        );
        --btn-bd-color-disabled: var(
            --btn-danger-bd-color-disabled,
            var(--danger-color)
        );
        --btn-text-color-active: var(--btn-danger-text-color-active, #fff);
        --btn-bg-color-active: var(--btn-danger-bg-color-active, #bd2130);
        --btn-bd-color-active: var(--btn-danger-bd-color-active, #b21f2d);
        --btn-box-shadow-active-focus: var(
            --btn-danger-box-shadow-active-focus,
            0 0 0 0.2rem rgba(220, 53, 69, 0.5)
        );
    }

    bs-button[context="danger"][outline],
    bs-button-link[context="danger"][outline],
    bs-button-input[context="danger"][outline] {
        --btn-text-color: var(
            --btn-outline-danger-text-color,
            var(--danger-color)
        );
        --btn-bg-color: var(
            --btn-outline-danger-bg-color,
            transparent
        );
        --btn-bd-color: var(
            --btn-outline-danger-bd-color,
            var(--danger-color)
        );
        --btn-text-color-hover: var(
            --btn-outline-danger-text-color-hover,
            #fff
        );
        --btn-bg-color-hover: var(
            --btn-outline-danger-bg-color-hover,
            var(--danger-color)
        );
        --btn-bd-color-hover: var(
            --btn-outline-danger-bd-color-hover,
            var(--danger-color)
        );
        --btn-box-shadow-focus: var(
            --btn-outline-danger-box-shadow-focus,
            0 0 0 0.2rem rgba(220, 53, 69, 0.5)
        );
        --btn-text-color-disabled: var(
            --btn-outline-danger-text-color-disabled,
            var(--danger-color)
        );
        --btn-bg-color-disabled: var(
            --btn-outline-danger-bg-color-disabled,
            #transparent
        );
        --btn-text-color-active: var(
            --btn-outline-danger-text-color-active,
            #fff
        );
        --btn-bg-color-active: var(
            --btn-outline-danger-bg-color-active,
            var(--danger-color)
        );
        --btn-bd-color-active: var(
            --btn-outline-danger-bd-color-active,
            var(--danger-color)
        );
        --btn-box-shadow-active-focus: var(
            --btn-outline-danger-box-shadow-active-focus,
            0 0 0 0.2rem rgba(220, 53, 69, 0.5)
        );
    }
`;
