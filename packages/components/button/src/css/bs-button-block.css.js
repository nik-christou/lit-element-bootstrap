import { css } from "lit-element";

export const BsButtonBlockCss = css`
    bs-button[block],
    bs-button-link[block],
    bs-button-input[block] {
        display: block;
        --btn-width: 100%;
    }

    bs-button[block]:not(:first-child),
    bs-button-link[block]:not(:first-child),
    bs-button-input[block]:not(:first-child) {
        margin-top: 0.5rem;
    }
`;
