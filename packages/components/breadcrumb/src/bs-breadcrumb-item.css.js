import { css } from "lit-element";

export const BsBreadcrumbItemCss = css`
    :host {
        padding-left: var(--breadcrumb-item-padding-left, 0.5rem);
    }

    :host([active]) {
        color: var(--breadcrumb-item-active-color, #6c757d);
    }

    :host::before {
        content: var(--breadcrumb-item-divider-content, "/");
        color: var(--breadcrumb-item-divider-color, #6c757d);
        display: var(--breadcrumb-item-divider-display, inline-block);
        padding-right: var(--breadcrumb-item-divider-padding-right, 0.3rem);
        text-decoration: var(--breadcrumb-item-divider-text-decoration, none);
    }

    a {
        color: var(--breadcrumb-item-link-color, #007bff);
        text-decoration: var(--breadcrumb-item-link-text-decoration, none);
        background-color: var(--breadcrumb-item-link-bg-color, transparent);
        -webkit-text-decoration-skip: objects;
    }

    a:hover {
        color: var(--breadcrumb-link-item-link-hover-color, #0056b3);
        text-decoration: var(--breadcrumb-link-item-text-decoration, underline);
    }

    a:not([href]):not([tabindex]) {
        color: inherit;
        text-decoration: none;
    }

    a:not([href]):not([tabindex]):hover,
    a:not([href]):not([tabindex]):focus {
        color: inherit;
        text-decoration: none;
    }

    a:not([href]):not([tabindex]):focus {
        outline: 0;
    }
`;
