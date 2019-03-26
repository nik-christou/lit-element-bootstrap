
import { css } from 'lit-element';

export const BsButtonLargeCss = css`
    
    :host([large]) .btn {
        padding: 0.5rem 1rem;
        padding-top: var(--bs-button-large-top-padding, 0.5rem);
        padding-bottom: var(--bs-button-large-bottom-padding, 0.5rem);
        padding-left: var(--bs-button-large-left-padding, 1rem);
        padding-right: var(--bs-button-large-right-padding, 1rem);
        font-size: 1.25rem;
        line-height: 1.5;
        border-top-left-radius: var(--bs-button-border-top-left-radius,  0.3rem);
        border-top-right-radius: var(--bs-button-border-top-right-radius, 0.3rem);
        border-bottom-right-radius: var(--bs-button-border-bottom-right-radius,  0.3rem);
        border-bottom-left-radius: var(--bs-button-border-bottom-left-radius,  0.3rem);
    }
`;