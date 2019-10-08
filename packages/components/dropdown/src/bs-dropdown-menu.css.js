
import { css } from 'lit-element';

export const BsDropdownMenuCss = css`

    :host {
        position: var(--dropdown-menu-position, absolute);
        left: 0;
        z-index: 1000;
        display: var(--dropdown-menu-display, none);
        visibility: hidden !important;
        float: var(--dropdown-menu-float, left);
        min-width: 10rem;
        padding: 0.5rem 0;
        margin-left: 0;
        margin-right: 0;
        font-size: 1rem;
        color: #212529;
        text-align: left;
        list-style: none;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-top-left-radius: var(--dropdown-menu-border-top-left-radius, 0.25rem);
        border-top-right-radius: var(--dropdown-menu-border-top-right-radius, 0.25rem);
        border-bottom-right-radius: var(--dropdown-menu-border-bottom-right-radius, 0.25rem);
        border-bottom-left-radius: var(--dropdown-menu-border-bottom-left-radius, 0.25rem);
    }

    :host([static]) {
        position: static;
    }

    :host([down]) {
        top: 100%;
        margin-top: var(--dropdown-menu-down-margin-top, 0.125rem);
        margin-bottom: 0;
    }

    :host([up]) {
        top: auto;
        bottom: 100%;
        margin-top: var(--dropdown-menu-up-margin-top, 0);
        margin-bottom: 0.125rem;
    }

    :host([right]) {
        top: 0;
        right: auto;
        left: 100%;
        margin-top: var(--dropdown-menu-right-margin-top, 0);
        margin-left: 0.125rem;
    }

    :host([left]) {
        top: 0;
        right: 100%;
        left: auto;
        margin-top: var(--dropdown-menu-left-margin-top, 0);
        margin-right: 0.125rem;
    }

    :host([align-right]) {
        right: 0;
        left: auto;
    }

    :host([show]) {
        visibility: visible !important;
    }

    :host([x-placement^="top"]), 
    :host([x-placement^="right"]), 
    :host([x-placement^="bottom"]), 
    :host([x-placement^="left"]) {
        right: auto;
        bottom: auto;
    }
`;