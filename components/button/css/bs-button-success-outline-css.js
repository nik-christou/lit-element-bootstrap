
import { css } from 'lit-element';

export const BsButtonSuccessOutlineCss = css`
    
    :host([outline-success]) .btn {
        color: var(--btn-text-color, var(--success));
        background-color: var(--btn-bg-color, transparent);
        background-image: var(--btn-bg-image, none);
        border-color: var(--btn-border-color, var(--success));
    }

    :host([outline-success]) .btn:hover {
        color: var(--btn-hover-text-color, #fff);
        background-color: var(--btn-hover-bg-color, var(--success));
        border-color: var(--btn-hover-border-color, var(--success));
    }

    :host([outline-success]) .btn:focus, 
    :host([outline-success]) .btn.focus {
        box-shadow: var(--btn-focus-shadow, 0 0 0 0.2rem rgba(40, 167, 69, 0.5));
    }

    :host([outline-success]) .btn.disabled, 
    :host([outline-success]) .btn:disabled {
        color: var(--btn-disabled-text-color, var(--success));
        background-color: var(--btn-disabled-bg-color, transparent);
    }

    :host([outline-success]) .btn:not(:disabled):not(.disabled):active, 
    :host([outline-success]) .btn:not(:disabled):not(.disabled).active,
    :host([outline-success][dropdown-toggle][dropdown-show]) .btn {
        color: var(--btn-toggle-text-color, #fff);
        background-color: var(--btn-toggle-bg-color, var(--success));
        border-color: var(--btn-toggle-border-color, var(--success));
    }

    :host([outline-success]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([outline-success]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([outline-success][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: var(--btn-toggle-focus-shadow, 0 0 0 0.2rem rgba(40, 167, 69, 0.5));
    }
`;