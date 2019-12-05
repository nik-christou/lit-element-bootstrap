
import { css } from 'lit-element';

export const BsCardColumnsCss = css`

    :host {
        display: block;
    }

    :host ::slotted(bs-card) {
        margin-bottom: 0.75rem;
    }

    @media (min-width: 576px) {

        :host {
            -webkit-column-count: var(--card-column-count, 3);
            -moz-column-count: var(--card-column-count, 3);
            column-count: var(--card-column-count, 3);
            -webkit-column-gap: var(--card-column-gap, 1.25rem);
            -moz-column-gap: var(--card-column-gap, 1.25rem);
            column-gap: var(--card-column-gap, 1.25rem);
            orphans: 1;
            widows: 1;
        }

        :host ::slotted(bs-card) {
            display: inline-block;
            width: 100%;
        }
    }
`;
