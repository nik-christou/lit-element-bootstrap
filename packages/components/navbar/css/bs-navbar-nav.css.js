
import { css } from 'lit-element';

export const BsNavbarNavCss = css`

    :host {
        display: flex;
        flex-direction: var(--navbar-nav-flex-direction, column);
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
    }

    :host ::slotted(bs-dropdown) {
        position: static;
        float: none;
    }
`;
