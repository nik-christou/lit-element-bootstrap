import { css } from 'lit-element';

export const BsAlertLinkCss = css`

    :host([context="primary"]) {
        --alert-link-color: var(--alert-link-primary-color, #002752);
    }

    :host([context="secondary"]) {
        --alert-link-color: var(--alert-link-secondary-color, #202326);
    }

    :host([context="success"]) {
        --alert-link-color: var(--alert-link-success-color, #0b2e13);
    }

    :host([context="info"]) {
        --alert-link-color: var(--alert-link-info-color, #062c33);
    }

    :host([context="warning"]) {
        --alert-link-color: var(--alert-link-warning-color, #533f03);
    }

    :host([context="danger"]) {
        --alert-link-color: var(--alert-link-danger-color, #491217);
    }

    :host([context="light"]) {
        --alert-link-color: var(--alert-link-light-color, #686868);
    }

    :host([context="dark"]) {
        --alert-link-color: var(--alert-link-dark-color, #040505);
    }

    a {
        color: var(--alert-link-color, #007bff);
        font-weight: var(--alert-link-font-weight, 700);
        text-decoration: var(--alert-link-text-decoration, none);
        background-color: var(--alert-link-bg-color, transparent);
        -webkit-text-decoration-skip: objects;
    }

    a:hover {
        color: var(--alert-link-hover-color, #0056b3);
        text-decoration: var(--alert-link-hover-text-decoration, underline);
    }
`;
