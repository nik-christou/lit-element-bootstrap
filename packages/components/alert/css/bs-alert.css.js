import { css } from "lit-element";

export const BsAlertCss = css`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    :host,
    :host::before,
    :host::after {
        box-sizing: border-box;
    }

    :host {
        display: block;
        position: relative;
        padding: 0.75rem 1.25rem;
        margin-bottom: 1rem;
        border: 1px solid transparent;
        border-radius: 0.25rem;
        opacity: 1;
        transition: opacity 0.15s linear;
    }

    :host([dismissable]) {
        padding-right: 4rem;
    }

    :host ::slotted([slot="heading"]) {
        color: inherit;
    }

    :host ::slotted([slot="dismiss"]) {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0.75rem 1.25rem;
        color: inherit;
    }

    :host([context="primary"]) {
        --alert-color: var(--alert-primary-color, #004085);
        --alert-bg-color: var(--alert-primary-bg-color, #cce5ff);
        --alert-bd-color: var(--alert-primary-bd-color, #b8daff);
    }

    :host([context="secondary"]) {
        --alert-color: var(--alert-secondary-color, #383d41);
        --alert-bg-color: var(--alert-secondary-bg-color, #e2e3e5);
        --alert-bd-color: var(--alert-secondary-bd-color, #d6d8db);
    }

    :host([context="success"]) {
        --alert-color: var(--alert-success-color, #155724);
        --alert-bg-color: var(--alert-success-bg-color, #d4edda);
        --alert-bd-color: var(--alert-success-bd-color, #c3e6cb);
    }

    :host([context="info"]) {
        --alert-color: var(--alert-info-color, #0c5460);
        --alert-bg-color: var(--alert-info-bg-color, #d1ecf1);
        --alert-bd-color: var(--alert-info-bd-color, #bee5eb);
    }

    :host([context="warning"]) {
        --alert-color: var(--alert-warning-color, #856404);
        --alert-bg-color: var(--alert-warning-bg-color, #fff3cd);
        --alert-bd-color: var(--alert-warning-bd-color, #ffeeba);
    }

    :host([context="danger"]) {
        --alert-color: var(--alert-danger-color, #721c24);
        --alert-bg-color: var(--alert-danger-bg-color, #f8d7da);
        --alert-bd-color: var(--alert-danger-bd-color, #f5c6cb);
    }

    :host([context="light"]) {
        --alert-color: var(--alert-light-color, #818182);
        --alert-bg-color: var(--alert-light-bg-color, #fefefe);
        --alert-bd-color: var(--alert-light-bd-color, #fdfdfe);
    }

    :host([context="dark"]) {
        --alert-color: var(--alert-dark-color, #1b1e21);
        --alert-bg-color: var(--alert-dark-bg-color, #d6d8d9);
        --alert-bd-color: var(--alert-dark-bd-color, #c6c8ca);
    }

    :host {
        color: var(--alert-color);
        background-color: var(--alert-bg-color);
        border-color: var(--alert-bd-color);
    }
`;
