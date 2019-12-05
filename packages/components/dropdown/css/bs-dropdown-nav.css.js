
import { css } from 'lit-element';

export const BsDropdownNavCss = css`
    
    :host ::slotted(bs-button[dropdown-nav-link]),
    :host ::slotted(bs-link-button[dropdown-nav-link]),
    :host ::slotted(bs-input-button[dropdown-nav-link]) {
        
        --bs-button-display: block;
        --bs-button-border: 1px solid transparent;
        --bs-button-border-top-left-radius: 0.25rem;
        --bs-button-border-top-right-radius: 0.25rem;
        --bs-button-padding-bottom: var(--dropdown-nav-link-padding-bottom);
        --bs-button-padding-left: var(--dropdown-nav-link-padding-left);
        --bs-button-padding-right: var(--dropdown-nav-link-padding-right);
        --bs-button-border-bottom-right-radius: var(--nav-link-active-border-bottom-right-radius, 0);
        --bs-button-border-bottom-left-radius: var(--nav-link-active-border-bottom-left-radius, 0);
        --bs-button-color: var(--dropdown-nav-link-color, #007bff);
        
        --bs-button-background-color: var(--dropdown-nav-link-background-color);
        --bs-button-color-hover: var(--dropdown-nav-link-hover-color);
        --bs-button-color-focus: var(--dropdown-nav-link-hover-color);
        --bs-button-box-shadow-hover: none;
        --bs-button-box-shadow-focus: none;
        
        --bs-button-border-color-hover: var(--dropdown-nav-link-hover-border-color, #e9ecef #e9ecef #dee2e6);
        --bs-button-border-color-focus: var(--dropdown-nav-link-hover-border-color, #e9ecef #e9ecef #dee2e6);
    }

    :host ::slotted(bs-button[dropdown-nav-link][active]),
    :host ::slotted(bs-link-button[dropdown-nav-link][active]),
    :host ::slotted(bs-input-button[dropdown-nav-link][active]) {
        
        --bs-button-color: var(--dropdown-nav-link-active-color);
        --bs-button-color-hover: var(--dropdown-nav-link-active-hover-color);
        --bs-button-color-focus: var(--dropdown-nav-link-active-focus-color);
        --bs-button-background-color: var(--dropdown-nav-link-active-background-color);
    }
`;