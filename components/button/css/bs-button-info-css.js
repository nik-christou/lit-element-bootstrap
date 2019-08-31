
import { css } from 'lit-element';

export const BsButtonInfoCss = css`
    
    :host([info]) .btn {
        color: var(--btn-text-color, #fff);
        background-color: var(--btn-bg-color, var(--info));
        border-color: var(--btn-border-color, var(--info));
    }

    :host([info]) .btn:hover {
        color: var(--btn-hover-text-color, #fff);
        background-color: var(--btn-hover-bg-color, #138496);
        border-color: var(--btn-hover-border-color, #117a8b);
    }

    :host([info]) .btn:focus, 
    :host([info]) .btn.focus {
        box-shadow: var(--btn-focus-shadow, 0 0 0 0.2rem rgba(23, 162, 184, 0.5));
    }

    :host([info]) .btn.disabled, 
    :host([info]) .btn:disabled {
        color: var(--btn-disabled-text-color, #fff);
        background-color: var(--btn-disabled-bg-color, var(--info));
        border-color: var(--btn-disabled-border-color, var(--info));
    }

    :host([info]) .btn:not(:disabled):not(.disabled):active, 
    :host([info]) .btn:not(:disabled):not(.disabled).active,
    :host([info][dropdown-toggle][dropdown-show]) .btn {
        color: var(--btn-toggle-text-color, #fff);
        background-color: var(--btn-toggle-bg-color, #117a8b);
        border-color: var(--btn-toggle-border-color, #10707f);
    }

    :host([info]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([info]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([info][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: var(--btn-toggle-focus-shadow, 0 0 0 0.2rem rgba(23, 162, 184, 0.5));
    }
`;