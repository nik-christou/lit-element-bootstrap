
import { css } from 'lit-element';

export const BsButtonGroupSmallCss = css`
    
    :host([small]) ::slotted(bs-button),
    :host([small]) ::slotted(bs-link-button),
    :host([small]) ::slotted(bs-input-button),
    :host([small]) ::slotted(bs-dropdown) {
        --bs-button-padding-top: 0.25rem;
        --bs-button-padding-bottom: 0.25rem;
        --bs-button-padding-left: 0.5rem;
        --bs-button-padding-right: 0.5rem;
        --bs-button-font-size: 0.875rem;
        --bs-button-line-height: 1.5;
        --bs-button-border-top-left-radius: 0.2rem;
        --bs-button-border-bottom-left-radius: 0.2rem;
        --bs-button-border-top-right-radius: 0.2rem;
        --bs-button-border-bottom-right-radius: 0.2rem;
    }
`;