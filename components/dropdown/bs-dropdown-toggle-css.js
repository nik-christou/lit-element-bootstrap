
import { css } from 'lit-element';

export const BsDropdownToggleCss = css`
    
    :host ::slotted(bs-button[dropdown-toggle]),
    :host ::slotted(bs-link-button[dropdown-toggle]),
    :host ::slotted(bs-input-button[dropdown-toggle]) {
        --bs-button-after-display: inline-block;
        --bs-button-after-width: 0;
        --bs-button-after-height: 0;
        --bs-button-after-margin-left: 0.255em;
        --bs-button-after-vertical-align: 0.255em;
        --bs-button-after-content: "";
        --bs-button-after-border-top: 0.3em solid;
        --bs-button-after-border-right: 0.3em solid transparent;
        --bs-button-after-border-bottom: 0;
        --bs-button-after-border-left: 0.3em solid transparent;
        --bs-button-empty-after-margin-left: 0;
    }
    
    :host ::slotted(bs-button[dropdown-toggle][dropup]),
    :host ::slotted(bs-link-button[dropdown-toggle][dropup]),
    :host ::slotted(bs-input-button[dropdown-toggle][dropup]) {
        --bs-button-after-display: inline-block;
        --bs-button-after-width: 0;
        --bs-button-after-height: 0;
        --bs-button-after-margin-left: 0.255em;
        --bs-button-after-vertical-align: 0.255em;
        --bs-button-after-content: "";
        --bs-button-after-border-top: 0;
        --bs-button-after-border-right: 0.3em solid transparent;
        --bs-button-after-border-bottom: 0.3em solid;
        --bs-button-after-border-left: 0.3em solid transparent;
        --bs-button-empty-after-margin-left: 0;
    }

    :host ::slotted(bs-button[dropdown-toggle][dropright]),
    :host ::slotted(bs-link-button[dropdown-toggle][dropright]),
    :host ::slotted(bs-input-button[dropdown-toggle][dropright]) {
        --bs-button-after-display: inline-block;
        --bs-button-after-width: 0;
        --bs-button-after-height: 0;
        --bs-button-after-margin-left: 0.255em;
        --bs-button-after-vertical-align: 0;
        --bs-button-after-content: "";
        --bs-button-after-border-top: 0.3em solid transparent;
        --bs-button-after-border-right: 0;
        --bs-button-after-border-bottom: 0.3em solid transparent;
        --bs-button-after-border-left: 0.3em solid;
        --bs-button-empty-after-margin-left: 0;
    }

    :host ::slotted(bs-button[dropdown-toggle][dropleft])
    :host ::slotted(bs-link-button[dropdown-toggle][dropleft]),
    :host ::slotted(bs-input-button[dropdown-toggle][dropleft]) {
        --bs-button-after-display: none;
        --bs-button-after-width: 0;
        --bs-button-after-height: 0;
        --bs-button-after-margin-left: 0.255em;
        --bs-button-after-vertical-align: 0.255em;
        --bs-button-after-content: "";
        --bs-button-empty-after-margin-left: 0;
        --bs-button-before-display: inline-block;
        --bs-button-before-width: 0;
        --bs-button-before-height: 0;
        --bs-button-before-margin-right: 0.255em;
        --bs-button-before-vertical-align: 0;
        --bs-button-before-content: "";
        --bs-button-before-border-top: 0.3em solid transparent;
        --bs-button-before-border-right: 0.3em solid;
        --bs-button-before-border-bottom: 0.3em solid transparent;
    }
`;