
import { css } from 'lit-element';

// TODO: Delete this file if not used elsewhere

export const BsDropdownButtonNavLinkCss = css`
    
    :host([dropdown-nav-link]) .btn {
        display: block;
        padding-bottom: var(--dropdown-nav-link-padding-bottom);
        padding-left: var(--dropdown-nav-link-padding-left);
        padding-right: var(--dropdown-nav-link-padding-right);
        border: 1px solid transparent;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
        margin-bottom: var(--dropdown-nav-margin-bottom);
        border-bottom-right-radius: var(--nav-link-active-border-bottom-right-radius, 0);
        border-bottom-left-radius: var(--nav-link-active-border-bottom-left-radius, 0);
        color: var(--dropdown-nav-link-color-show, #007bff);
        background-color: var(--dropdown-nav-link-background-color-show);
    }
    
    :host([dropdown-nav-link][active]) .btn {
        color: var(--nav-link-active-color, #495057);
        background-color: #fff;
        border-color: #dee2e6 #dee2e6 #fff;
    }
    
    :host([dropdown-nav-link]) .btn:hover,
    :host([dropdown-nav-link]) .btn:focus {
        border-color: var(--dropdown-nav-link-hover-border-color, #e9ecef #e9ecef #dee2e6);
        box-shadow: none;
        color: var(--dropdown-nav-link-hover-color);
    }

    :host([dropdown-nav-link][active]) .btn:hover,
    :host([dropdown-nav-link][active]) .btn:focus {
        color: var(--dropdown-nav-link-color-show);
        border-color: #dee2e6 #dee2e6 #fff;
        box-shadow: none;
    }
`;