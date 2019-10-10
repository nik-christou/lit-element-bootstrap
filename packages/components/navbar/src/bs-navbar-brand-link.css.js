
import { css } from 'lit-element';

export const BsNavbarBrandLinkCss = css`
    
    :host {
        display: inline-block;
        padding-top: 0.3125rem;
        padding-bottom: 0.3125rem;
        margin-right: 1rem;
        font-size: 1.25rem;
        line-height: inherit;
        white-space: nowrap;
    }

    a {
        color: var(--navbar-brand-color);
    }

    a:hover {
        color: var(--navbar-brand-link-hover-color);
        text-decoration: none;
    }

    a:focus {
        color: var(--navbar-brand-link-focus-color);
        text-decoration: none;
    }
`;