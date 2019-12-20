import { css } from "lit-element";

export const BsButtonSizeCss = css`
    bs-button[size="small"],
    bs-button-link[size="small"],
    bs-button-input[size="small"] {
        --btn-pd-top: var(--bs-btn-small-top-pd, 0.25rem);
        --btn-pd-bottom: var(--bs-btn-small-bottom-pd, 0.25rem);
        --btn-pd-left: var(--bs-btn-small-left-pd, 0.5rem);
        --btn-pd-right: var(--bs-btn-small-right-pd, 0.5rem);
        --btn-font-size: var(--bs-btn-small-font-size, 0.875rem);
        --btn-line-height: var(--bs-btn-small-line-height: 1.5);
        --btn-bd-top-left-radius: var(
            --bs-btn-small-bd-top-left-radius,
            0.2rem
        );
        --btn-bd-top-right-radius: var(
            --bs-btn-small-bd-top-right-radius,
            0.2rem
        );
        --btn-bd-bottom-right-radius: var(
            --bs-btn-small-bd-bottom-right-radius,
            0.2rem
        );
        --btn-bd-bottom-left-radius: var(
            --bs-btn-small-bd-bottom-left-radius,
            0.2rem
        );
    }

    bs-button[size="large"],
    bs-button-link[size="large"],
    bs-button-input[size="large"] {
        --btn-pd-top: var(--bs-btn-large-top-pd, 0.5rem);
        --btn-pd-bottom: var(--bs-btn-large-bottom-pd, 0.5rem);
        --btn-pd-left: var(--bs-btn-large-left-pd, 1rem);
        --btn-pd-right: var(--bs-btn-large-right-pd, 1rem);
        --btn-font-size: var(--bs-btn-large-font-size, 1.25rem);
        --btn-line-height: var(--bs-btn-large-line-height: 1.5);
        --btn-bd-top-left-radius: var(
            --bs-btn-large-bd-top-left-radius,
            0.3rem
        );
        --btn-bd-top-right-radius: var(
            --bs-btn-large-bd-top-right-radius,
            0.3rem
        );
        --btn-bd-bottom-right-radius: var(
            --bs-btn-large-bd-bottom-right-radius,
            0.3rem
        );
        --btn-bd-bottom-left-radius: var(
            --bs-btn-large-bd-bottom-left-radius,
            0.3rem
        );
    }
`;
