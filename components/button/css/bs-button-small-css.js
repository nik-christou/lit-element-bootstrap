
import { css } from 'lit-element';

export const BsButtonSmallCss = css`
    
    :host([small]) .btn {
        padding-top: var(--bs-button-small-top-padding, 0.25rem);
        padding-bottom: var(--bs-button-small-bottom-padding, 0.25rem);
        padding-left: var(--bs-button-small-left-padding, 0.5rem);
        padding-right: var(--bs-button-small-right-padding, 0.5rem);
        font-size: 0.875rem;
        line-height: 1.5;
        border-top-left-radius: var(--bs-button-border-top-left-radius, 0.2rem);
        border-top-right-radius: var(--bs-button-border-top-right-radius, 0.2rem);
        border-bottom-right-radius: var(--bs-button-border-bottom-right-radius, 0.2rem);
        border-bottom-left-radius: var(--bs-button-border-bottom-left-radius, 0.2rem);
    }
`;