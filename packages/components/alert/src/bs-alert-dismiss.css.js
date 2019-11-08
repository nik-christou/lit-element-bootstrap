
import { css } from 'lit-element';

export const BsAlertDismissCss = css`

    .close {
        border: 0;
        float: right;
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1;
        color: #000;
        text-shadow: 0 1px 0 #fff;
        opacity: 0.5;
        background-color: transparent;
        -webkit-appearance: none;
        top: 0;
        right: 0;
        color: inherit;
        position: absolute;
        padding: 0.75rem 1.25rem;
    }

    .close:not(:disabled):not(.disabled):hover,
    .close:not(:disabled):not(.disabled):focus {
        color: #000;
        text-decoration: none;
        opacity: 0.75;
        cursor: pointer;
    }
`;
