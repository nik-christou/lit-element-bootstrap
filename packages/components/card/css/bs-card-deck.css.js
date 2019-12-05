
import { css } from 'lit-element';

export const BsCardDeckCss = css`

    :host {
        display: flex;
        flex-direction: column;
    }

    :host ::slotted(bs-card) {
        margin-bottom: 15px;
    }

    @media (min-width: 576px) {

        :host {
            flex-flow: row wrap;
            margin-right: -15px;
            margin-left: -15px;
        }

        :host ::slotted(bs-card) {
            display: flex;
            flex: 1 0 0%;
            flex-direction: column;
            margin-right: 15px;
            margin-bottom: 0;
            margin-left: 15px;
        }
    }
`;
