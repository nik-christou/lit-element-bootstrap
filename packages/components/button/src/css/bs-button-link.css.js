import { css } from "lit-element";

export const BsButtonLinkCss = css`
    bs-button[context="link"],
    bs-button-link[context="link"],
    bs-button-input[context="link"] {
        --btn-text-color: var(--btn-link-text-color, #007bff);
        --btn-bg-color: var(--btn-link-bg-color, transparent);
        --btn-font-weight: var(--btn-link-font-weight, 400);

        --btn-text-color-hover: var(--btn-link-text-color-hover, #0056b3);
        --btn-bg-color-hover: var(--btn-link-bg-color-hover, transparent);
        --btn-bd-color-hover: var(--btn-link-bd-color-hover, transparent);
        --btn-text-decoration-hover: var(
            --btn-link-text-decoration-hover,
            underline
        );

        --btn-text-color-disabled: var(--btn-link-text-color-disabled, #6c757d);
        --btn-pointer-events-disabled: var(
            btn-link-pointer-events-disabled,
            none
        );

        --btn-text-decoration-focus: var(
            --btn-link-text-decoration-focus,
            underline
        );
        --btn-box-shadow-focus: var(--btn-link-box-shadow-focus, none);
        --btn-bd-color-focus: var(--btn--link-bd-color-focus, transparent);
    }
`;
