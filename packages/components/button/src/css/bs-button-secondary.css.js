import { css } from "lit-element";

export const BsButtonSecondaryCss = css`
    bs-button,
    bs-button-link,
    bs-button-input  {
        --secondary-color: var(--secondary, #6c757d);
    }

    bs-button[context="secondary"]:not([outline]),
    bs-button-link[context="secondary"]:not([outline]),
    bs-button-input[context="secondary"]:not([outline]) {
        --btn-text-color: var(--btn-secondary-text-color, #fff);
        --btn-bg-color: var(--btn-secondary-bg-color, var(--secondary-color));
        --btn-bd-color: var(--btn-secondary-bd-color, var(--secondary-color));
        --btn-text-color-hover: var(--btn-secondary-text-color-hover, #fff);
        --btn-bg-color-hover: var(--btn-secondary-bg-color-hover, #5a6268);
        --btn-bd-color-hover: var(--btn-secondary-bd-color-hover, #545b62);
        --btn-bd-color-focus: var(--btn-secondary-bd-color-focus, #545b62);
        --btn-bg-color-focus: var(--btn-secondary-bg-color-focus, #5a6268);
        --btn-text-color-focus: var(--btn-secondary-text-color-focus, #fff);
        --btn-box-shadow-focus: var(
            --btn-secondary-box-shadow-focus,
            0 0 0 0.2rem rgba(108, 117, 125, 0.5)
        );

        --btn-text-color-disabled: var(
            --btn-secondary-text-color-disabled,
            #fff
        );
        --btn-bg-color-disabled: var(
            --btn-secondary-bg-color-disabled,
            var(--secondary-color)
        );
        --btn-bd-color-disabled: var(
            --btn-secondary-bd-color-disabled,
            var(--secondary-color)
        );
        --btn-text-color-active: var(--btn-secondary-text-color-active, #fff);
        --btn-bg-color-active: var(--btn-secondary-bg-color-active, #545b62);
        --btn-bd-color-active: var(--btn-secondary-bd-color-active, #4e555b);
        --btn-box-shadow-active-focus: var(
            --btn-secondary-box-shadow-active-focus,
            0 0 0 0.2rem rgba(108, 117, 125, 0.5)
        );
    }

    bs-button[context="secondary"][outline],
    bs-button-link[context="secondary"][outline],
    bs-button-input[context="secondary"][outline] {
        --btn-text-color: var(
            --btn-outline-secondary-text-color,
            var(--secondary-color)
        );
        --btn-bg-color: var(--btn-outline-secondary-bg-color, transparent);
        --btn-bd-color: var(
            --btn-outline-secondary-bd-color,
            var(--secondary-color)
        );
        --btn-text-color-hover: var(
            --btn-outline-secondary-text-color-hover,
            #fff
        );
        --btn-bg-color-hover: var(
            --btn-outline-secondary-bg-color-hover,
            var(--secondary-color)
        );
        --btn-bd-color-hover: var(
            --btn-outline-secondary-bd-color-hover,
            var(--secondary-color)
        );
        --btn-box-shadow-focus: var(
            --btn-outline-secondary-box-shadow-focus,
            0 0 0 0.2rem rgba(108, 117, 125, 0.5)
        );
        --btn-text-color-disabled: var(
            --btn-outline-secondary-text-color-disabled,
            var(--secondary-color)
        );
        --btn-bg-color-disabled: var(
            --btn-outline-secondary-bg-color-disabled,
            #transparent
        );
        --btn-text-color-active: var(
            --btn-outline-secondary-text-color-active,
            #fff
        );
        --btn-bg-color-active: var(
            --btn-outline-secondary-bg-color-active,
            var(--secondary-color)
        );
        --btn-bd-color-active: var(
            --btn-outline-secondary-bd-color-active,
            var(--secondary-color)
        );
        --btn-box-shadow-active-focus: var(
            --btn-outline-secondary-box-shadow-active-focus,
            0 0 0 0.2rem rgba(108, 117, 125, 0.5)
        );
    }
`;
