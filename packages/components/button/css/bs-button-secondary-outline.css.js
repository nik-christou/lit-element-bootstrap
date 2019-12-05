
import { css } from 'lit-element';

export const BsButtonSecondaryOutlineCss = css`

    :host([outline-secondary]) .btn {
        color: var(--btn-text-color, var(--secondary));
        background-color: var(--btn-bg-color, transparent);
        background-image: var(--btn-bg-image, none);
        border-color: var(--btn-border-color, var(--secondary));
    }

    :host([outline-secondary]) .btn:hover {
        color: var(--btn-hover-text-color, #fff);
        background-color: var(--btn-hover-bg-color, var(--secondary));
        border-color: var(--btn-hover-border-color, var(--secondary));
    }

    :host([outline-secondary]) .btn:focus, 
    :host([outline-secondary]) .btn.focus {
        box-shadow: var(--btn-focus-shadow, 0 0 0 0.2rem rgba(108, 117, 125, 0.5));
    }

    :host([outline-secondary]) .btn.disabled, 
    :host([outline-secondary]) .btn:disabled {
        color: var(--btn-disabled-text-color, var(--secondary));
        background-color: var(--btn-disabled-bg-color, transparent);
    }

    :host([outline-secondary]) .btn:not(:disabled):not(.disabled):active, 
    :host([outline-secondary]) .btn:not(:disabled):not(.disabled).active,
    :host([outline-secondary][dropdown-toggle][dropdown-show]) .btn {
        color: var(--btn-toggle-text-color, #fff);
        background-color: var(--btn-toggle-bg-color, var(--secondary));
        border-color: var(--btn-toggle-border-color, var(--secondary));
    }

    :host([outline-secondary]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([outline-secondary]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([outline-secondary][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: var(--btn-toggle-focus-shadow, 0 0 0 0.2rem rgba(108, 117, 125, 0.5));
    }
`;