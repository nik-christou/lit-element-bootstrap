
import { css } from 'lit-element';

export const BsDropdownItemCss = css`

    :host {
        display: block;
    }

    .dropdown-item {
        display: block;
        width: 100%;
        padding: 0.25rem 1.5rem;
        clear: both;
        font-weight: 400;
        color: #212529;
        text-align: inherit;
        white-space: nowrap;
        background-color: transparent;
        border: 0;
    }

    .dropdown-item.hover {
        color: #16181b;
        text-decoration: none;
        background-color: #f8f9fa;
    }

    .dropdown-item:hover,
    .dropdown-item:focus {
        color: #16181b;
        text-decoration: none;
        background-color: #f8f9fa;
    }

    :host([active]) .dropdown-item,
    :host:active .dropdown-item {
        color: #fff;
        text-decoration: none;
        background-color: #007bff;
    }

    :host([disabled]) .dropdown-item, 
    :host:disabled .dropdown-item {
        color: #6c757d;
        background-color: transparent;
    }
`;