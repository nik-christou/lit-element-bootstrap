
import { css } from 'lit-element';

export const BsInputGroupAppendCss = css`
    
    :host {
        display: flex;
        margin-left: -1px;
    }
    
    :host ::slotted(bs-button),
    :host ::slotted(bs-link-button),
    :host ::slotted(bs-input-button),
    :host ::slotted(bs-dropdown),
    :host ::slotted(bs-input-group-text) {
        --bs-button-border-top-left-radius: 0;
        --bs-button-border-bottom-left-radius: 0;
        --bs-input-group-text-border-top-left-radius: 0;
        --bs-input-group-text-border-bottom-left-radius: 0;
        --bs-button-position: relative;
        --bs-button-focus-z-index: 2;
    }

    :host(:not(:last-child)) ::slotted(bs-button),
    :host(:not(:last-child)) ::slotted(bs-link-button),
    :host(:not(:last-child)) ::slotted(bs-input-button),
    :host(:not(:last-child)) ::slotted(bs-dropdown),
    :host(:not(:last-child)) ::slotted(bs-input-group-text) {
        --bs-button-border-top-right-radius: 0;
        --bs-button-border-bottom-right-radius: 0;
        --bs-input-group-text-border-top-right-radius: 0;
        --bs-input-group-text-border-bottom-right-radius: 0;
    }

    :host(:last-child) ::slotted(bs-button:not(:last-child)),
    :host(:last-child) ::slotted(bs-link-button:not(:last-child)),
    :host(:last-child) ::slotted(bs-input-button:not(:last-child)),
    :host(:last-child) ::slotted(bs-dropdown:not(:last-child)),
    :host(:last-child) ::slotted(bs-input-group-text:not(:last-child)) {
        --bs-button-border-top-right-radius: 0;
        --bs-button-border-bottom-right-radius: 0;
        --bs-input-group-text-border-top-right-radius: 0;
        --bs-input-group-text-border-bottom-right-radius: 0;
    }
`;