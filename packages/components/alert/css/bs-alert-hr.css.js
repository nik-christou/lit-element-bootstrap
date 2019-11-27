import { css } from "lit-element";

export const BsAlertHrCss = css`
    :host([context="primary"]) {
        --alert-hr-bd-top-color: var(--alert-hr-primary-bd-top-color, #9fcdff);
    }

    :host([context="secondary"]) {
        --alert-hr-bd-top-color: var(
            --alert-hr-secondary-bd-top-color,
            #c8cbcf
        );
    }

    :host([context="success"]) {
        --alert-hr-bd-top-color: var(--alert-hr-success-bd-top-color, #b1dfbb);
    }

    :host([context="info"]) {
        --alert-hr-bd-top-color: var(--alert-hr-info-bd-top-color, #abdde5);
    }

    :host([context="warning"]) {
        --alert-hr-bd-top-color: var(--alert-hr-warning-bd-top-color, #ffe8a1);
    }

    :host([context="danger"]) {
        --alert-hr-bd-top-color: var(--alert-hr-danger-bd-top-color, #f1b0b7);
    }

    :host([context="light"]) {
        --alert-hr-bd-top-color: var(--alert-hr-light-bd-top-color, #ececf6);
    }

    :host([context="dark"]) {
        --alert-hr-bd-top-color: var(--alert-hr-dark-bd-top-color, #b9bbbe);
    }

    hr {
        height: 0;
        border: 0;
        overflow: visible;
        box-sizing: content-box;
        margin-top: 1rem;
        margin-bottom: 1rem;
        border-top-width: 1px;
        border-top-style: solid;
        border-top-color: var(--alert-hr-bd-top-color, rgba(0, 0, 0, 0.1));
    }
`;
