
import { css } from 'lit-element';

export const BsCardFooterCss = css`

    :host {
        padding: 0.75rem 1.25rem;
        background-color: rgba(0, 0, 0, 0.03);
        border-top: 1px solid rgba(0, 0, 0, 0.125);
        border-bottom-left-radius: var(--card-footer-bottom-left-border-radius);
        border-bottom-right-radius: var(--card-footer-bottom-right-border-radius);
    }

    :host ::slotted(*:last-child) {
        border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
    }
`;
