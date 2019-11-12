import { css } from "lit-element";

export const BsBadgeCss = css`
    :host([pill]) {
        --badge-pd-right: var(--badge-pill-pd-top, 0.6em);
        --badge-pd-left: var(--badge-pill-pd-left, 0.6em);
        --badge-bd-radius: var(--badge-pill-bd-radius, 10rem);
    }

    :host([context="primary"]) {
        --badge-color: var(--badge-primary-color, #fff);
        --badge-bg-color: var(--badge-primary-bg-color, #007bff);
    }

    :host([context="secondary"]) {
        --badge-color: var(--badge-secondary-color, #fff);
        --badge-bg-color: var(--badge-secondary-bg-color, #6c757d);
    }

    :host([context="success"]) {
        --badge-color: var(--badge-success-color, #fff);
        --badge-bg-color: var(--badge-success-bg-color, #28a745);
    }

    :host([context="info"]) {
        --badge-color: var(--badge-info-color, #fff);
        --badge-bg-color: var(--badge-info-bg-color, #17a2b8);
    }

    :host([context="warning"]) {
        --badge-color: var(--badge-warning-color, #212529);
        --badge-bg-color: var(--badge-warning-bg-color, #ffc107);
    }

    :host([context="danger"]) {
        --badge-color: var(--badge-danger-color, #fff);
        --badge-bg-color: var(--badge-danger-bg-color, #dc3545);
    }

    :host([context="light"]) {
        --badge-color: var(--badge-light-color, #212529);
        --badge-bg-color: var(--badge-light-bg-color, #f8f9fa);
    }

    :host([context="dark"]) {
        --badge-color: var(--badge-dark-color, #fff);
        --badge-bg-color: var(--badge-dark-bg-color, #343a40);
    }

    :host {
        display: inline-block;
        padding-top: var(--badge-pd-top, 0.25em);
        padding-bottom: var(--badge-pd-bottom, 0.25em);
        padding-left: var(--badge-pd-left, 0.4em);
        padding-right: var(--badge-pd-right, 0.4em);
        font-size: var(--badge-font-size, 75%);
        font-weight: var(--badge-font-wg, 700);
        line-height: var(--badge-line-hg, 1);
        text-align: var(--badge-text-align, center);
        white-space: nowrap;
        vertical-align: baseline;
        border-radius: var(--badge-bd-radius, 0.25rem);
        color: var(--badge-color);
        background-color: var(--badge-bg-color);
    }

    @media (prefers-reduced-motion: reduce) {
        :host {
            transition: none;
        }
    }

    :host:empty {
        display: none;
    }
`;
