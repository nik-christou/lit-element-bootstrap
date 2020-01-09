import { css } from "lit-element";

export const BsButtonGroupCss = css`
    :host {
        position: var(--btn-group-position, relative);
        display: var(--btn-group-display, inline-flex);
        vertical-align: var(--btn-group-vertical-align, middle);
        --btn-position: var(--btn-group-btn-position, relative);
        --btn-flex: var(--btn-group-btn-flex, 0 1 auto);
        --btn-z-index-hover: var(--btn-group-btn-z-index-hover, 1);
        --btn-z-index-active: var(--btn-group-btn-z-index-active, 1);
    }
`;
