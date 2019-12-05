import { css } from "lit-element";

export const BsBreadcrumbCss = css`
    :host {
        display: var(--breadcrumb-display, flex);
        flex-wrap: var(--breadcrumb-flex-wrap, wrap);
        padding-top: var(--breadcrumb-padding-top, 0.75rem);
        padding-bottom: var(--breadcrumb-padding-bottom, 0.75rem);
        padding-right: var(--breadcrumb-padding-right, 1rem);
        padding-left: var(--breadcrumb-padding-left, 1rem);
        margin-bottom: var(--breadcrumb-margin-bottom, 1rem);
        background-color: var(--breadcrumb-bg-color, #e9ecef);
        border-radius: var(--breadcrumb-border-radius, 0.25rem);
    }
`;
