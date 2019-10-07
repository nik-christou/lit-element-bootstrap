
import { css } from 'lit-element';

export const BsCardBodyCss = css`

    :host {
        flex: 1 1 auto;
        padding: 1.25rem;
        display: block;
    }

    :host > ::slotted([name="card-text"]:last-child) {
        margin-bottom: 0;
    }
`;
