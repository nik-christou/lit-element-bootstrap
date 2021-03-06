
import { css } from 'lit-element';

export const BsListGroupActionCss = css`

    div ::slotted(*:first-child) {
        --list-group-item-border-radius-top-left: 0.25rem;
        --list-group-item-border-radius-top-right: 0.25rem;
    }

    div ::slotted(*:last-child) {
        margin-bottom: 0;
        --list-group-item-border-radius-bottom-left: 0.25rem;
        --list-group-item-border-radius-bottom-right: 0.25rem;
    }
`;
