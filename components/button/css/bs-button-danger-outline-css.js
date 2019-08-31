
import { css } from 'lit-element';

export const BsButtonDangerOutlineCss = css`
    
    :host([outline-danger]) .btn {
        color: var(--btn-text-color, var(--danger));
        background-color: var(--btn-bg-color, transparent);
        background-image: var(--btn-bg-image, none);
        border-color: var(--btn-border-color, var(--danger));
    }

    :host([outline-danger]) .btn:hover {
        color: var(--btn-hover-text-color, #fff);
        background-color: var(--btn-hover-bg-color, var(--danger));
        border-color: var(--btn-hover-border-color, var(--danger));
    }

    :host([outline-danger]) .btn:focus, 
    :host([outline-danger]) .btn.focus {
        box-shadow: var(--btn-focus-shadow, 0 0 0 0.2rem rgba(220, 53, 69, 0.5));
    }

    :host([outline-danger]) .btn.disabled, 
    :host([outline-danger]) .btn:disabled {
        color: var(--btn-disabled-text-color, var(--danger));
        background-color: var(--btn-disabled-bg-color, transparent);
    }

    :host([outline-danger]) .btn:not(:disabled):not(.disabled):active, 
    :host([outline-danger]) .btn:not(:disabled):not(.disabled).active,
    :host([outline-danger][dropdown-toggle][dropdown-show]) .btn {
        color: var(--btn-toggle-text-color, #fff);
        background-color: var(--btn-toggle-bg-color, var(--danger));
        border-color: var(--btn-toggle-border-color, var(--danger));
    }

    :host([outline-danger]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([outline-danger]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([outline-danger][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: var(--btn-toggle-focus-shadow, 0 0 0 0.2rem rgba(220, 53, 69, 0.5));
    }
`;