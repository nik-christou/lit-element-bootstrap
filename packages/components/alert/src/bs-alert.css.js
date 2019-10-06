
import { css } from 'lit-element';

export const BsAlertCss = css`

    :host {
        display: block;
        position: relative;
        padding: 0.75rem 1.25rem;
        margin-bottom: 1rem;
        border: 1px solid transparent;
        border-radius: 0.25rem;
    }

    :host([fade]) {
        opacity: 0;
        transition: opacity 0.15s linear;
    }

    :host([fade][show]) {
        opacity: 1;
    }

    :host([dismissable]) {
        padding-right: 4rem;
    }

    :host ::slotted([slot=heading]) {
        color: inherit;
    }

    :host ::slotted([slot=closeButton]) {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0.75rem 1.25rem;
        color: inherit;
    }

    :host([primary]) {
        color: #004085;
        background-color: #cce5ff;
        border-color: #b8daff;
    }

    :host([secondary]) {
        color: #383d41;
        background-color: #e2e3e5;
        border-color: #d6d8db;
    }

    :host([success]) {
        color: #155724;
        background-color: #d4edda;
        border-color: #c3e6cb;
    }

    :host([info]) {
        color: #0c5460;
        background-color: #d1ecf1;
        border-color: #bee5eb;
    }

    :host([warning]) {
        color: #856404;
        background-color: #fff3cd;
        border-color: #ffeeba;
    }

    :host([danger]) {
        color: #721c24;
        background-color: #f8d7da;
        border-color: #f5c6cb;
    }

    :host([light]) {
        color: #818182;
        background-color: #fefefe;
        border-color: #fdfdfe;
    }

    :host([dark]) {
        color: #1b1e21;
        background-color: #d6d8d9;
        border-color: #c6c8ca;
    }
`;
