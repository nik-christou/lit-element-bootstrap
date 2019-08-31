
import { css } from 'lit-element';

export const BsButtonDangerCss = css`
    
    :host([danger]) .btn {
        color: var(--btn-text-color, #fff);
        background-color: var(--btn-bg-color, var(--danger));
        border-color: var(--btn-border-color, var(--danger));
    }

    :host([danger]) .btn:hover {
        color: var(--btn-hover-text-color, #fff);
        background-color: var(--btn-hover-bg-color, #c82333);
        border-color: var(--btn-hover-border-color, #bd2130);
    }

    :host([danger]) .btn:focus, .btn-danger.focus {
        box-shadow: var(--btn-focus-shadow, 0 0 0 0.2rem rgba(220, 53, 69, 0.5));
    }

    :host([danger]) .btn.disabled, 
    :host([danger]) .btn:disabled {
        color: var(--btn-disabled-text-color, #fff);
        background-color: var(--btn-disabled-bg-color, var(--danger));
        border-color: var(--btn-disabled-border-color, var(--danger));
    }

    :host([danger]) .btn:not(:disabled):not(.disabled):active, 
    :host([danger]) .btn:not(:disabled):not(.disabled).active,
    :host([danger][dropdown-toggle][dropdown-show]) .btn {
        color: var(--btn-toggle-text-color, #fff);
        background-color: var(--btn-toggle-bg-color, #bd2130);
        border-color: var(--btn-toggle-border-color, #b21f2d);
    }

    :host([danger]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([danger]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([danger][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: var(--btn-toggle-focus-shadow, 0 0 0 0.2rem rgba(220, 53, 69, 0.5));
    }
`;
    