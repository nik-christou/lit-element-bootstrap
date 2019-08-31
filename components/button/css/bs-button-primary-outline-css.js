
import { css } from 'lit-element';

export const BsButtonPrimaryOutlineCss = css`
    
    :host([outline-primary]) .btn {
        color: var(--btn-text-color, var(--primary));
        background-color: var(--btn-bg-color, transparent);
        background-image: var(--btn-bg-image, none);
        border-color: var(--btn-border-color, var(--primary));
    }

    :host([outline-primary]) .btn:hover {
        color: var(--btn-hover-text-color, #fff);
        background-color: var(--btn-hover-bg-color, var(--primary));
        border-color: var(--btn-hover-border-color, var(--primary));
    }

    :host([outline-primary]) .btn:focus, 
    :host([outline-primary]) .btn.focus {
        box-shadow: var(--btn-focus-shadow, 0 0 0 0.2rem rgba(0, 123, 255, 0.5));
    }

    :host([outline-primary]) .btn.disabled, 
    :host([outline-primary]) .btn:disabled {
        color: var(--btn-disabled-text-color, var(--primary));
        background-color: var(--btn-disabled-bg-color, transparent);
    }

    :host([outline-primary]) .btn:not(:disabled):not(.disabled):active, 
    :host([outline-primary]) .btn:not(:disabled):not(.disabled).active,
    :host([outline-primary][dropdown-toggle][dropdown-show]) .btn {
        color: var(--btn-toggle-text-color, #fff);
        background-color: var(--btn-toggle-bg-color, var(--primary));
        border-color: var(--btn-toggle-border-color, var(--primary));
    }

    :host([outline-primary]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([outline-primary]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([outline-primary][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: var(--btn-toggle-focus-shadow, 0 0 0 0.2rem rgba(0, 123, 255, 0.5));
    }
`;