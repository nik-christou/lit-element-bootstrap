import { css } from 'lit-element';

export const BsCloseButtonCss = css`

    .close {
        border: 0;
        float: right;
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1;
        color: #000;
        text-shadow: 0 1px 0 #fff;
        opacity: 0.5;
        margin: var(--bs-close-button-margin);
        padding: var(--bs-close-button-padding, 0);
        background-color: transparent;
        -webkit-appearance: none;
    }

    .close:not(:disabled):not(.disabled):hover,
    .close:not(:disabled):not(.disabled):focus {
        color: #000;
        text-decoration: none;
        opacity: 0.75;
        cursor: pointer;
    }
`;
