
import { css } from 'lit-element';

export const BsDropdownSplitCss = css`
    
    :host([split]) ::slotted(bs-button:not(:last-child)),
    :host([split]) ::slotted(bs-link-button:not(:last-child)),
    :host([split]) ::slotted(bs-input-button:not(:last-child)) {
        --bs-button-border-top-right-radius: 0;
        --bs-button-border-bottom-right-radius: 0;
    }

    :host([split]) ::slotted(bs-button:not(:first-child)),
    :host([split]) ::slotted(bs-link-button:not(:first-child)),
    :host([split]) ::slotted(bs-input-button:not(:first-child)) {
        --bs-button-border-top-left-radius: 0;
        --bs-button-border-bottom-left-radius: 0;
    }
    
    :host([split]) ::slotted(bs-button[dropdown-toggle]),
    :host([split]) ::slotted(bs-link-button[dropdown-toggle]),
    :host([split]) ::slotted(bs-input-button[dropdown-toggle]) {
        --bs-button-border-top-right-radius: var(--dropdown-toggle-border-top-right, 0.25rem);
        --bs-button-border-bottom-right-radius: var(--dropdown-toggle-border-bottom-right, 0.25rem);
        --bs-button-padding-left: 0.5625rem;
        --bs-button-padding-right: 0.5625rem;
        --bs-button-after-margin-left: 0;
        --bs-button-margin-left: var(--dropdown-toggle-margin-left);
    }
    
    /* applies to drop-left split dropdown */
    :host([split]) ::slotted(bs-button[dropdown-toggle]:first-child),
    :host([split]) ::slotted(bs-link-button[dropdown-toggle]:first-child),
    :host([split]) ::slotted(bs-input-button[dropdown-toggle]:first-child) {
        --bs-button-border-top-right-radius: 0;
        --bs-button-border-bottom-right-radius: 0;
        --bs-button-padding-left: 0.5625rem;
        --bs-button-padding-right: 0.5625rem;
        --bs-button-after-margin-left: 0;
    }
`;