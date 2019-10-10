
import { css } from 'lit-element';

export const BsNavbarCss = css`

    :host {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 1rem;
    }

    :host ::slotted(bs-container) {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    }
`;
