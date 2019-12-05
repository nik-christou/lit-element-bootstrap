
import { css } from 'lit-element';

export const BsInputGroupPrependCss = css`
    
    :host {
        display: flex;
        margin-right: -1px;
    }
    
    :host ::slotted(bs-button),
    :host ::slotted(bs-link-button),
    :host ::slotted(bs-input-button),
    :host ::slotted(bs-dropdown),
    :host ::slotted(bs-input-group-text) {
        --bs-button-border-top-right-radius: 0;
        --bs-button-border-bottom-right-radius: 0;
        --bs-input-group-text-border-top-right-radius: 0;
        --bs-input-group-text-border-bottom-right-radius: 0;
        --bs-button-position: relative;
        --bs-button-focus-z-index: 2;
    }
    
    :host(:not(:first-child)) ::slotted(bs-button:not(:first-child)),
    :host(:not(:first-child)) ::slotted(bs-link-button:not(:first-child)),
    :host(:not(:first-child)) ::slotted(bs-input-button:not(:first-child)),
    :host(:not(:first-child)) ::slotted(bs-dropdown:not(:first-child)),
    :host(:not(:first-child)) ::slotted(bs-input-group-text:not(:first-child)) {
        --bs-button-border-top-left-radius: 0;
        --bs-button-border-bottom-left-radius: 0;
        --bs-input-group-text-border-top-left-radius: 0;
        --bs-input-group-text-border-bottom-left-radius: 0;
    }
    
    :host(:first-child) ::slotted(bs-button:not(:first-child)),
    :host(:first-child) ::slotted(bs-link-button:not(:first-child)),
    :host(:first-child) ::slotted(bs-input-button:not(:first-child)),
    :host(:first-child) ::slotted(bs-dropdown:not(:first-child)),
    :host(:first-child) ::slotted(bs-input-group-text:not(:first-child)) {
        --bs-button-border-top-left-radius: 0;
        --bs-button-border-bottom-left-radius: 0;
        --bs-input-group-text-border-top-left-radius: 0;
        --bs-input-group-text-border-bottom-left-radius: 0;
    }
`;