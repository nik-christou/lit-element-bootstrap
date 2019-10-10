
import { css } from 'lit-element';

export const BsNavbarCollapseCss = css`

    :host {
        flex-grow: 1;
        height: 0;
        overflow: hidden;
        align-items: center;
        transition: height 0.35s ease;
        display: var(--navbar-collapse-display);
        flex-basis: var(--navbar-collapse-flex-basis, 100%);
    }

    :host([transitioning]) {
        position: relative;
    }

    @media screen and (prefers-reduced-motion: reduce) {
        :host {
            transition: none;
        }
    }

    @media (min-width: 992px) {

        :host {
            height: auto;
            overflow: inherit;
        }
    }
`;
