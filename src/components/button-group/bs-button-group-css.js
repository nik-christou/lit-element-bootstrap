
import { css } from 'lit-element';

export const BsButtonGroupCss = css`
    
    :host {
        position: relative;
        display: inline-flex;
        vertical-align: middle;
    }

    :host ::slotted(bs-button),
    :host ::slotted(bs-link-button),
    :host ::slotted(bs-input-button),
    :host ::slotted(bs-dropdown) {
        --bs-button-position: relative;
        --bs-button-flex: 0 1 auto;
        --bs-button-hover-z-index: 1;
        --bs-button-focus-z-index: 1;
        --bs-button-active-z-index: 1;
    }

    :host ::slotted(bs-button:first-child),
    :host ::slotted(bs-link-button:first-child),
    :host ::slotted(bs-input-button:first-child) {
        --bs-button-margin-left: 0;
    }
`;