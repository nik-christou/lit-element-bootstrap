
import { css } from 'lit-element';

export const BsButtonDarkOutlineCss = css`
    
    :host([outline-dark]) .btn {
        color: var(--btn-text-color, var(--dark));
        background-color: var(--btn-bg-color, transparent);
        background-image: var(--btn-bg-image, none);
        border-color: var(--btn-border-color, var(--dark));
    }

    :host([outline-dark]) .btn:hover {
        color: var(--btn-hover-text-color, #fff);
        background-color: var(--btn-hover-bg-color, var(--dark));
        border-color: var(--btn-hover-border-color, var(--dark));
    }

    :host([outline-dark]) .btn:focus, 
    :host([outline-dark]) .btn.focus {
        box-shadow: var(--btn-focus-shadow, 0 0 0 0.2rem rgba(52, 58, 64, 0.5));
    }

    :host([outline-dark]) .btn.disabled, 
    :host([outline-dark]) .btn:disabled {
        color: var(--btn-disabled-text-color, var(--dark));
        background-color: var(--btn-disabled-bg-color, transparent);
    }

    :host([outline-dark]) .btn:not(:disabled):not(.disabled):active, 
    :host([outline-dark]) .btn:not(:disabled):not(.disabled).active,
    :host([outline-dark][dropdown-toggle][dropdown-show]) .btn {
        color: var(--btn-toggle-text-color, #fff);
        background-color: var(--btn-toggle-bg-color, var(--dark));
        border-color: var(--btn-toggle-border-color, var(--dark));
    }

    :host([outline-dark]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([outline-dark]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([outline-dark][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: var(--btn-toggle-focus-shadow, 0 0 0 0.2rem rgba(52, 58, 64, 0.5));
    }
`;