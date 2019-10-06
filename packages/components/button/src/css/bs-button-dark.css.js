
import { css } from 'lit-element';

export const BsButtonDarkCss = css`
    
    :host([dark]) .btn {
        color: var(--btn-text-color, #fff);
        background-color: var(--btn-bg-color, var(--dark));
        border-color: var(--btn-border-color, var(--dark));
    }

    :host([dark]) .btn:hover {
        color: var(--btn-hover-text-color, #fff);
        background-color: var(--btn-hover-bg-color, #23272b);
        border-color: var(--btn-hover-border-color, #1d2124);
    }

    :host([dark]) .btn:focus, 
    :host([dark]) .btn.focus {
        box-shadow: var(--btn-focus-shadow, 0 0 0 0.2rem rgba(52, 58, 64, 0.5));
    }

    :host([dark]) .btn.disabled, 
    :host([dark]) .btn:disabled {
        color: var(--btn-disabled-text-color, #fff);
        background-color: var(--btn-disabled-bg-color, var(--dark));
        border-color: var(--btn-disabled-border-color, var(--dark));
    }

    :host([dark]) .btn:not(:disabled):not(.disabled):active, 
    :host([dark]) .btn:not(:disabled):not(.disabled).active,
    :host([dark][dropdown-toggle][dropdown-show]) .btn {
        color: var(--btn-toggle-text-color, #fff);
        background-color: var(--btn-toggle-bg-color, #1d2124);
        border-color: var(--btn-toggle-border-color, #171a1d);
    }

    :host([dark]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([dark]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([dark][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: var(--btn-toggle-focus-shadow, 0 0 0 0.2rem rgba(52, 58, 64, 0.5));
    }
`;