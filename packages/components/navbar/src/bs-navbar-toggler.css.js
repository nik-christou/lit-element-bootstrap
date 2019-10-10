
import { css } from 'lit-element';

export const BsNavbarTogglerCss = css`

    button {
        padding: var(--navbar-toggler-padding, 0.25rem 0.75rem);
        font-size: var(--navbar-toggler-font-size, 1.25rem);
        line-height: 1;
        border: var(--navbar-toggler-border, 1px solid transparent);
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
        background-color: transparent;
        color: var(--navbar-toggler-color);
        border-color: var(--navbar-toggler-border-color);
    }

    button:focus {
        text-decoration: none;
        outline: var(--navbar-toggler-outline-focus);
    }

    button:hover {
        text-decoration: none;
    }

    button:not(:disabled):not(.disabled)  {
        cursor: pointer;
    }
`;
