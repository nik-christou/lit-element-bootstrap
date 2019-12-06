
import { css } from 'lit-element';

export const BsNavbarLinkCss = css`

    :host {
        display: inline-block;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }

    a {
        color: var(--navbar-text-link-color, rgba(0, 0, 0, 0.9));
    }

    a:hover {
        color: var(--navbar-text-link-hover-color, rgba(0, 0, 0, 0.9));
    }

    a:focus {
        color: var(--navbar-text-link-focus-color, rgba(0, 0, 0, 0.9));
    }
`;
