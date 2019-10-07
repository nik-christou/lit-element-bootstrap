
import { css } from 'lit-element';

export const BsBreadcrumbItemCss = css`

    :host([active]) {
        color: #6c757d;
    }

    :host {
        padding-left: var(--bs-breadcrumb-item-padding-left);
    }

    :host::before {
        display: var(--bs-breadcrumb-item-display);
        padding-right: var(--bs-breadcrumb-item-padding-right);
        color: var(--bs-breadcrumb-item-color);
        text-decoration: var(--bs-breadcrumb-item-text-decoration);
        content: var(--bs-breadcrumb-item-divider);
    }
`;
