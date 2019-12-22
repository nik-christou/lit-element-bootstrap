import { css } from "lit-element";

export const BsButtonInfoCss = css`
    bs-button,
    bs-button-link,
    bs-button-input  {
        --info-color: var(--info, #17a2b8);
    }

    bs-button[context="info"]:not([outline]),
    bs-button-link[context="info"]:not([outline]),
    bs-button-input[context="info"]:not([outline]) {
        --btn-text-color: var(--btn-info-text-color, #fff);
        --btn-bg-color: var(--btn-info-bg-color, var(--info-color));
        --btn-bd-color: var(--btn-info-bd-color, var(--info-color));
        --btn-text-color-hover: var(--btn-info-text-color-hover, #fff);
        --btn-bg-color-hover: var(--btn-info-bg-color-hover, #138496);
        --btn-bd-color-hover: var(--btn-info-bd-color-hover, #117a8b);
        --btn-bd-color-focus: var(--btn-info-bd-color-focus, #117a8b);
        --btn-bg-color-focus: var(--btn-info-bg-color-focus, #138496);
        --btn-text-color-focus: var(--btn-info-text-color-focus, #fff);
        --btn-box-shadow-focus: var(
            --btn-info-box-shadow-focus,
            0 0 0 0.2rem rgba(23, 162, 184, 0.5)
        );
        --btn-text-color-disabled: var(--btn-info-text-color-disabled, #fff);
        --btn-bg-color-disabled: var(
            --btn-info-bg-color-disabled,
            var(--info-color)
        );
        --btn-bd-color-disabled: var(
            --btn-info-bd-color-disabled,
            var(--info-color)
        );
        --btn-text-color-active: var(--btn-info-text-color-active, #fff);
        --btn-bg-color-active: var(--btn-info-bg-color-active, #117a8b);
        --btn-bd-color-active: var(--btn-info-bd-color-active, #10707f);
        --btn-box-shadow-active-focus: var(
            --btn-info-box-shadow-active-focus,
            0 0 0 0.2rem rgba(23, 162, 184, 0.5)
        );
    }

    bs-button[context="info"][outline],
    bs-button-link[context="info"][outline],
    bs-button-input[context="info"][outline] {
        --btn-text-color: var(--btn-outline-info-text-color, var(--info-color));
        --btn-bg-color: var(--btn-outline-info-bg-color, transparent);
        --btn-bd-color: var(--btn-outline-info-bd-color, var(--info-color));
        --btn-text-color-hover: var(--btn-outline-info-text-color-hover, #fff);
        --btn-bg-color-hover: var(
            --btn-outline-info-bg-color-hover,
            var(--info-color)
        );
        --btn-bd-color-hover: var(
            --btn-outline-info-bd-color-hover,
            var(--info-color)
        );
        --btn-box-shadow-focus: var(
            --btn-outline-info-box-shadow-focus,
            0 0 0 0.2rem rgba(23, 162, 184, 0.5)
        );
        --btn-text-color-disabled: var(
            --btn-outline-info-text-color-disabled,
            var(--info-color)
        );
        --btn-bg-color-disabled: var(
            --btn-outline-info-bg-color-disabled,
            #transparent
        );
        --btn-text-color-active: var(
            --btn-outline-info-text-color-active,
            #fff
        );
        --btn-bg-color-active: var(
            --btn-outline-info-bg-color-active,
            var(--info-color)
        );
        --btn-bd-color-active: var(
            --btn-outline-info-bd-color-active,
            var(--info-color)
        );
        --btn-box-shadow-active-focus: var(
            --btn-outline-info-box-shadow-active-focus,
            0 0 0 0.2rem rgba(23, 162, 184, 0.5)
        );
    }
`;
