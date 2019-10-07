
import { css } from 'lit-element';

export const BsCardTextCss = css`

    :host {
        display: block;
    }

    :host > ::slotted(*:last-child) {
        margin-bottom: 0;
    }
`;
