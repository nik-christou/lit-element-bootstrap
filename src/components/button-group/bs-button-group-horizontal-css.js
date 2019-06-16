
import { css } from 'lit-element';

export const BsButtonGroupHorizontalCss = css`

    :host([horizontal]) ::slotted(bs-button:not(:last-child):not(bs-dropdown)),
    :host([horizontal]) ::slotted(bs-link-button:not(:last-child):not(bs-dropdown)),
    :host([horizontal]) ::slotted(bs-input-button:not(:last-child):not(bs-dropdown)) {
        --bs-button-border-top-right-radius: 0;
        --bs-button-border-bottom-right-radius: 0;
    }

    :host([horizontal]) ::slotted(bs-button:not(:first-child)),
    :host([horizontal]) ::slotted(bs-link-button:not(:first-child)),
    :host([horizontal]) ::slotted(bs-input-button:not(:first-child)),
    :host([horizontal]) ::slotted(bs-button-group:not(:first-child)) {
        --bs-button-border-top-left-radius: 0;
        --bs-button-border-bottom-left-radius: 0;
    }
`;