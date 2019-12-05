
import { css } from 'lit-element';

export const BsButtonInfoOutlineCss = css`
    
    :host([outline-info]) .btn {
        color: var(--btn-text-color, var(--info));
        background-color: var(--btn-bg-color, transparent);
        background-image: var(--btn-bg-image, none);
        border-color: var(--btn-border-color, var(--info));
    }

    :host([outline-info]) .btn:hover {
        color: var(--btn-hover-text-color, #fff);
        background-color: var(--btn-hover-bg-color, var(--info));
        border-color: var(--btn-hover-border-color, var(--info));
    }

    :host([outline-info]) .btn:focus, 
    :host([outline-info]) .btn.focus {
        box-shadow: var(--btn-focus-shadow, 0 0 0 0.2rem rgba(23, 162, 184, 0.5));
    }

    :host([outline-info]) .btn.disabled, 
    :host([outline-info]) .btn:disabled {
        color: var(--btn-disabled-text-color, var(--info));
        background-color: var(--btn-disabled-bg-color, transparent);
    }

    :host([outline-info]) .btn:not(:disabled):not(.disabled):active, 
    :host([outline-info]) .btn:not(:disabled):not(.disabled).active,
    :host([outline-info][dropdown-toggle][dropdown-show]) .btn {
        color: var(--btn-toggle-text-color, #fff);
        background-color: var(--btn-toggle-bg-color, var(--info));
        border-color: var(--btn-toggle-border-color, var(--info));
    }

    :host([outline-info]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([outline-info]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([outline-info][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: var(--btn-toggle-focus-shadow, 0 0 0 0.2rem rgba(23, 162, 184, 0.5));
    }
`;