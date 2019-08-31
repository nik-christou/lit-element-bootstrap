
import { css } from 'lit-element';

export const BsButtonSuccessCss = css`

    :host([success]) .btn {
        color: var(--btn-text-color, #fff);
        background-color: var(--btn-bg-color, var(--success));
        border-color: var(--btn-border-color, var(--success));
    }

    :host([success]) .btn:hover {
        color: var(--btn-hover-text-color, #fff);
        background-color: var(--btn-hover-bg-color, #218838);
        border-color: var(--btn-hover-border-color, #1e7e34);
    }

    :host([success]) .btn:focus, 
    :host([success]) .btn.focus {
        box-shadow: var(--btn-focus-shadow, 0 0 0 0.2rem rgba(40, 167, 69, 0.5));
    }

    :host([success]) .btn.disabled, 
    :host([success]) .btn:disabled {
        color: var(--btn-disabled-text-color, #fff);
        background-color: var(--btn-disabled-bg-color, var(--success));
        border-color: var(--btn-disabled-border-color, var(--success));
    }

    :host([success]) .btn:not(:disabled):not(.disabled):active, 
    :host([success]) .btn:not(:disabled):not(.disabled).active,
    :host([success][dropdown-toggle][dropdown-show]) .btn {
        color: var(--btn-toggle-text-color, #fff);
        background-color: var(--btn-toggle-bg-color, #1e7e34);
        border-color: var(--btn-toggle-border-color, #1c7430);
    }

    :host([success]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([success]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([success][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: var(--btn-toggle-focus-shadow, 0 0 0 0.2rem rgba(40, 167, 69, 0.5));
    }
`;