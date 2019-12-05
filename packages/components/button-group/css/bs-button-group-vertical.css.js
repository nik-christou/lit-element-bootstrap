
import { css } from 'lit-element';

export const BsButtonGroupVerticalCss = css`
    
    :host([vertical]) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    :host([vertical]) ::slotted(bs-button),
    :host([vertical]) ::slotted(bs-link-button),
    :host([vertical]) ::slotted(bs-input-button),
    :host([vertical]) ::slotted(bs-dropdown) {
        --bs-button-width: 100%;
    }

    :host([vertical]) ::slotted(bs-button:not(:last-child):not(bs-dropdown)),
    :host([vertical]) ::slotted(bs-link-button:not(:last-child):not(bs-dropdown)),
    :host([vertical]) ::slotted(bs-input-button:not(:last-child):not(bs-dropdown)),
    :host([vertical]) ::slotted(bs-button-group:not(:last-child)) {
        --bs-button-border-bottom-left-radius: 0;
        --bs-button-border-bottom-right-radius: 0;
    }
    
    :host([vertical]) ::slotted(bs-button:not(:first-child)),
    :host([vertical]) ::slotted(bs-link-button:not(:first-child)),
    :host([vertical]) ::slotted(bs-input-button:not(:first-child)),
    :host([vertical]) ::slotted(bs-button-group:not(:first-child)) {
        --bs-button-border-top-left-radius: 0;
        --bs-button-border-top-right-radius: 0;
    }
`;