import { css } from "lit-element";

export const BsButtonGroupSizeCss = css`
    :host([size="small"]) {
        --btn-pd-top: var(--btn-group-pd-top-sm, 0.25rem);
        --btn-pd-bottom: var(--btn-group-pd-bottom-sm, 0.25rem);
        --btn-pd-left: var(--btn-group-pd-left-sm, 0.5rem);
        --btn-pd-right: var(--btn-group-pd-right-sm, 0.5rem);
        --btn-font-size: var(--btn-group-font-size-sm, 0.875rem);
        --btn-line-height: var(--btn-group-line-height-sm, 1.5);
        --btn-bd-top-left-radius: var(--btn-group-top-left-radius-sm, 0.2rem);
        --btn-bd-bottom-left-radius: var(
            --btn-group-bottom-left-radius-sm,
            0.2rem
        );
        --btn-bd-top-right-radius: var(--btn-group-top-right-radius-sm, 0.2rem);
        --btn-bd-bottom-right-radius: var(
            --btn-group-bottom-left-radius-sm,
            0.2rem
        );
    }

    :host([size="large"]) {
        --btn-pd-top: var(--btn-group-pd-top-lg, 0.5rem);
        --btn-pd-bottom: var(--btn-group-pd-bottom-lg, 0.5rem);
        --btn-pd-left: var(--btn-group-pd-left-lg, 1rem);
        --btn-pd-right: var(--btn-group-pd-right-lg, 1rem);
        --btn-font-size: var(--btn-group-font-size-lg, 1.25rem);
        --btn-line-height: var(--btn-group-line-height-lg, 1.5);
        --btn-bd-top-left-radius: var(--btn-group-top-left-radius-lg, 0.3rem);
        --btn-bd-bottom-left-radius: var(
            --btn-group-bottom-left-radius-lg,
            0.3rem
        );
        --btn-bd-top-right-radius: var(--btn-group-top-right-radius-lg, 0.3rem);
        --btn-bd-bottom-right-radius: var(
            --btn-group-bottom-left-radius-lg,
            0.3rem
        );
    }
`;
