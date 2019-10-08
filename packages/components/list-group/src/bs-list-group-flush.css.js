
import { css } from 'lit-element';

export const BsListGroupFlushCss = css`

    ul ::slotted(*) {
        --list-group-item-border-right: 0px;
        --list-group-item-border-left: 0px;
        --list-group-item-border-radius-bottom-right: 0;
        --list-group-item-border-radius-bottom-left: 0;
        --list-group-item-border-radius-top-left: 0;
        --list-group-item-border-radius-top-right: 0;
    }

    ul ::slotted(*:first-child) {
        --list-group-item-border-top: var(--flush-list-group-item-top-border, 0);
        --list-group-item-border-radius-top-left: var(--flush-list-group-item-top-left-radius, 0);
        --list-group-item-border-radius-top-right: var(--flush-list-group-item-top-right-radius, 0);
    }

    ul ::slotted(*:last-child) {
        --list-group-item-border-bottom: var(--flush-list-group-item-bottom-border, 0);
        --list-group-item-border-radius-bottom-left: var(--flush-list-group-item-bottom-left-radius, 0);
        --list-group-item-border-radius-bottom-right: var(--flush-list-group-item-bottom-right-radius, 0);
    }
`;
