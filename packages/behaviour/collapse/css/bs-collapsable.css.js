
import { css } from 'lit-element';

export const BsCollapsableCss = css`

    :host {
        display: block;
        height: auto;
        transition-property: var(--bs-collapsable-transition-property, height);
        transition-duration: var(--bs-collapsable-transition-duration, 0.35s);
        transition-timing-function: var(--bs-collapsable-transition-timing-function, ease);
    }

    :host([transitioning]) {
        position: relative;
    }

    @media screen and (prefers-reduced-motion: reduce) {
        :host {
            transition: none;
        }
    }
`;
