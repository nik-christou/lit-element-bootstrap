
import { css } from 'lit-element';

export const BsButtonGroupLargeCss = css`
    
    :host([large]) ::slotted(bs-button),
    :host([large]) ::slotted(bs-link-button),
    :host([large]) ::slotted(bs-input-button),
    :host([large]) ::slotted(bs-dropdown) {
        --bs-button-padding-top: 0.5rem;
        --bs-button-padding-bottom: 0.5rem;
        --bs-button-padding-left: 1rem;
        --bs-button-padding-right: 1rem;
        --bs-button-font-size: 1.25rem;
        --bs-button-line-height: 1.5;
        --bs-button-border-top-left-radius: 0.3rem;
        --bs-button-border-bottom-left-radius: 0.3rem;
        --bs-button-border-top-right-radius: 0.3rem;
        --bs-button-border-bottom-right-radius: 0.3rem;
    }
`;