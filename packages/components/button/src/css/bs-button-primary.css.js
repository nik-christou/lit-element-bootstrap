import { css } from "lit-element";

export const BsButtonPrimaryCss = css`
    :host {
        --primary-color: var(--primary, #007bff);
    }

    bs-button[context="primary"]:not([outline]),
    bs-button-link[context="primary"]:not([outline]),
    bs-button-input[context="primary"]:not([outline]) {
        --btn-text-color: var(--btn-primary-text-color, #fff);
        --btn-bg-color: var(--btn-primary-bg-color, var(--primary-color));
        --btn-bd-color: var(--btn-primary-bd-color, var(--primary-color));
        --btn-text-color-hover: var(--btn-primary-text-color-hover, #fff);
        --btn-bg-color-hover: var(--btn-primary-bg-color-hover, #0069d9);
        --btn-bd-color-hover: var(--btn-primary-bd-color-hover, #0062cc);
        --btn-bd-color-focus: var(--btn-primary-bd-color-focus, #0062cc);
        --btn-bg-color-focus: var(--btn-primary-bg-color-focus, #0069d9);
        --btn-text-color-focus: var(--btn-primary-text-color-focus, #fff);
        --btn-box-shadow-focus: var(
            --btn-primary-box-shadow-focus,
            0 0 0 0.2rem rgba(38, 143, 255, 0.5)
        );
        --btn-text-color-disabled: var(
            --btn-primary-text-color-disabled,
            #fff
        );
        --btn-bg-color-disabled: var(
            --btn-primary-bg-color-disabled,
            var(--primary-color)
        );
        --btn-bd-color-disabled: var(
            --btn-primary-bd-color-disabled,
            var(--primary-color)
        );
        --btn-text-color-active: var(--btn-primary-text-color-active, #fff);
        --btn-bg-color-active: var(--btn-primary-bg-color-active, #0062cc);
        --btn-bd-color-active: var(--btn-primary-bd-color-active, #005cbf);
        --btn-box-shadow-active-focus: var(
            --btn-primary-box-shadow-active-focus,
            0 0 0 0.2rem rgba(0, 123, 255, 0.5)
        );
    }

    bs-button[context="primary"][outline],
    bs-button-link[context="primary"][outline],
    bs-button-input[context="primary"][outline] {
        --btn-text-color: var(
            --btn-outline-primary-text-color,
            var(--primary-color)
        );
        --btn-bg-color: var(
            --btn-outline-primary-bg-color,
            transparent
        );
        --btn-bd-color: var(
            --btn-outline-primary-bd-color,
            var(--primary-color)
        );
        --btn-text-color-hover: var(
            --btn-outline-primary-text-color-hover,
            #fff
        );
        --btn-bg-color-hover: var(
            --btn-outline-primary-bg-color-hover,
            var(--primary-color)
        );
        --btn-bd-color-hover: var(
            --btn-outline-primary-bd-color-hover,
            var(--primary-color)
        );
        --btn-box-shadow-focus: var(
            --btn-outline-primary-box-shadow-focus,
            0 0 0 0.2rem rgba(0, 123, 255, 0.5)
        );
        --btn-text-color-disabled: var(
            --btn-outline-primary-text-color-disabled,
            var(--primary-color)
        );
        --btn-bg-color-disabled: var(
            --btn-outline-primary-bg-color-disabled,
            transparent
        );
        --btn-text-color-active: var(
            --btn-outline-primary-text-color-active,
            #fff
        );
        --btn-bg-color-active: var(
            --btn-outline-primary-bg-color-active,
            var(--primary-color)
        );
        --btn-bd-color-active: var(
            --btn-outline-primary-bd-color-active,
            var(--primary-color)
        );
        --btn-box-shadow-active-focus: var(
            --btn-outline-primary-box-shadow-active-focus,
            0 0 0 0.2rem rgba(0, 123, 255, 0.5)
        );
    }
`;
