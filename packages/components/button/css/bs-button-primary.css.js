
import { css } from 'lit-element';

export const BsButtonPrimaryCss = css`
    
    :host([primary]) .btn {
        color: var(--btn-text-color, #fff);
        background-color: var(--btn-bg-color, var(--primary));
        border-color: var(--btn-border-color, var(--primary));
    }

    :host([primary]) .btn:hover {
        color: var(--btn-hover-text-color, #fff);
        background-color: var(--btn-hover-bg-color, #0069d9);
        border-color: var(--btn-hover-border-color, #0062cc);
    }

    :host([primary]) .btn:focus,
    :host([primary]) .btn.focus {
        box-shadow: var(--btn-focus-shadow, 0 0 0 0.2rem rgba(0, 123, 255, 0.5));
    }

    :host([primary]) .btn.disabled,
    :host([primary]) .btn:disabled {
        color: var(--btn-disabled-text-color, #fff);
        background-color: var(--btn-disabled-bg-color, var(--primary));
        border-color: var(--btn-disabled-border-color, var(--primary));
    }

    :host([primary]) .btn:not(:disabled):not(.disabled):active, 
    :host([primary]) .btn:not(:disabled):not(.disabled).active,
    :host([primary][dropdown-toggle][dropdown-show]) .btn {
        color: var(--btn-toggle-text-color, #fff);
        background-color: var(--btn-toggle-bg-color, #0062cc);
        border-color: var(--btn-toggle-border-color, #005cbf);
    }

    :host([primary]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([primary]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([primary][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: var(--btn-toggle-focus-shadow, 0 0 0 0.2rem rgba(0, 123, 255, 0.5));
    }
`;