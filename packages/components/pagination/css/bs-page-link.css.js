import { css } from 'lit-element';

export const BsPageLinkCss = css`

    :host {
        position: relative;
        display: block;
        padding: var(--bs-page-link-padding, 0.5rem 0.75rem);
        margin-left: -1px;
        line-height: var(--bs-page-link-line-height, 1.25);
        background-color: #fff;
        border: 1px solid #dee2e6;
        font-size: var(--bs-page-link-font-size);
        border-top-left-radius: var(--bs-page-link-radius-top-left);
        border-bottom-left-radius: var(--bs-page-link-radius-bottom-left);
        border-top-right-radius: var(--bs-page-link-radius-top-right);
        border-bottom-right-radius: var(--bs-page-link-radius-bottom-right);
    }

    :host a {
        color: var(--bs-page-link-color, #007bff);
    }

    :host(:hover) {
        z-index: 2;
        color: #0056b3;
        background-color: #e9ecef;
        border-color: #dee2e6;
    }

    :host(:hover) a {
        text-decoration: none;
    }

    :host(:focus) {
        z-index: 2;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }

    :host(:not([disabled])) {
        cursor: pointer;
    }
`;
