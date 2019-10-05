
import { css } from 'lit-element';

export const BsAccordionCss = css`

    :host ::slotted(bs-card:first-of-type) {
        --bs-card-border-bottom: 0;
        --bs-card-border-bottom-right-radius: 0;
        --bs-card-border-bottom-left-radius: 0;
    }

    :host ::slotted(bs-card:not(:first-of-type):not(:last-of-type)) {
        --bs-card-border-bottom: 0;
        --bs-card-border-top-right-radius: 0;
        --bs-card-border-top-left-radius: 0;
        --bs-card-border-bottom-right-radius: 0;
        --bs-card-border-bottom-left-radius: 0;
    }

    :host ::slotted(bs-card:last-of-type) {
        --bs-card-border-top-left-radius: 0;
        --bs-card-border-top-right-radius: 0;
    }
`;
