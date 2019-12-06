
import { css } from 'lit-element';

export const BsNavItemCss = css`

    :host {
        margin-bottom: var(--nav-item-margin-bottom);
    }

    :host([show]) {
        --dropdown-nav-link-color: #fff;
        --dropdown-nav-link-hover-color: #fff;
        --dropdown-nav-link-background-color: #007bff;
    }
`;
