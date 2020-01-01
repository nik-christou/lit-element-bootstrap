import { css } from "lit-element";

export const BsButtonGroupSizeCss = css`
    :host([size="small"]) {
        --btn-pd-top: 0.25rem;
        --btn-pd-bottom: 0.25rem;
        --btn-pd-left: 0.5rem;
        --btn-pd-right: 0.5rem;
        --btn-font-size: 0.875rem;
        --btn-line-height: 1.5;
        --btn-bd-top-left-radius: 0.2rem;
        --btn-bd-bottom-left-radius: 0.2rem;
        --btn-bd-top-right-radius: 0.2rem;
        --btn-bd-bottom-right-radius: 0.2rem;
    }

    :host([size="large"]) {
        --btn-pd-top: 0.5rem;
        --btn-pd-bottom: 0.5rem;
        --btn-pd-left: 1rem;
        --btn-pd-right: 1rem;
        --btn-font-size: 1.25rem;
        --btn-line-height: 1.5;
        --btn-bd-top-left-radius: 0.3rem;
        --btn-bd-bottom-left-radius: 0.3rem;
        --btn-bd-top-right-radius: 0.3rem;
        --btn-bd-bottom-right-radius: 0.3rem;
    }
`;
