import { css } from "lit-element";

export const BsButtonLightCss = css`
    :host {
        --light-color: var(--light, #f8f9fa);
    }

    bs-button[context="light"]:not([outline]),
    bs-button-link[context="light"]:not([outline]),
    bs-button-input[context="light"]:not([outline]) {
        --btn-text-color: var(--btn-light-text-color, #212529);
        --btn-bg-color: var(--btn-light-bg-color, var(--light-color));
        --btn-bd-color: var(--btn-light-bd-color, var(--light-color));
        --btn-text-color-hover: var(--btn-light-text-color-hover, #212529);
        --btn-bg-color-hover: var(--btn-light-bg-color-hover, #e2e6ea);
        --btn-bd-color-hover: var(--btn-light-bd-color-hover, #dae0e5);
        --btn-bd-color-focus: var(--btn-light-bd-color-focus, #dae0e5);
        --btn-bg-color-focus: var(--btn-primary-bg-color-focus, #e2e6ea);
        --btn-text-color-focus: var(--btn-primary-text-color-focus, #212529);
        --btn-box-shadow-focus: var(
            --btn-light-box-shadow-focus,
            0 0 0 0.2rem rgba(216, 217, 219, 0.5)
        );
        --btn-text-color-disabled: var(
            --btn-light-text-color-disabled,
            #212529
        );
        --btn-bg-color-disabled: var(
            --btn-light-bg-color-disabled,
            var(--light-color)
        );
        --btn-bd-color-disabled: var(
            --btn-light-bd-color-disabled,
            var(--light-color)
        );
        --btn-text-color-active: var(--btn-light-text-color-active, #212529);
        --btn-bg-color-active: var(--btn-light-bg-color-active, #dae0e5);
        --btn-bd-color-active: var(--btn-light-bd-color-active, #d3d9df);
        --btn-box-shadow-active-focus: var(
            --btn-light-box-shadow-active-focus,
            0 0 0 0.2rem rgba(216, 217, 219, 0.5)
        );
    }

    bs-button[context="light"][outline],
    bs-button-link[context="light"][outline],
    bs-button-input[context="light"][outline] {
        --btn-text-color: var(
            --btn-outline-light-text-color,
            var(--light-color)
        );
        --btn-bg-color: var(--btn-outline-light-bg-color, transparent);
        --btn-bd-color: var(--btn-outline-light-bd-color, var(--light-color));
        --btn-text-color-hover: var(
            --btn-outline-light-text-color-hover,
            #212529
        );
        --btn-bg-color-hover: var(
            --btn-outline-light-bg-color-hover,
            var(--light-color)
        );
        --btn-bd-color-hover: var(
            --btn-outline-light-bd-color-hover,
            var(--light-color)
        );
        --btn-box-shadow-focus: var(
            --btn-outline-light-box-shadow-focus,
            0 0 0 0.2rem rgba(248, 249, 250, 0.5)
        );
        --btn-text-color-disabled: var(
            --btn-outline-light-text-color-disabled,
            var(--light-color)
        );
        --btn-bg-color-disabled: var(
            --btn-outline-light-bg-color-disabled,
            #transparent
        );
        --btn-text-color-active: var(
            --btn-outline-light-text-color-active,
            #212529
        );
        --btn-bg-color-active: var(
            --btn-outline-light-bg-color-active,
            var(--light-color)
        );
        --btn-bd-color-active: var(
            --btn-outline-light-bd-color-active,
            var(--light-color)
        );
        --btn-box-shadow-active-focus: var(
            --btn-outline-light-box-shadow-active-focus,
            0 0 0 0.2rem rgba(248, 249, 250, 0.5)
        );
    }
`;
