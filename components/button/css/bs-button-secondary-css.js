
import { css } from 'lit-element';

export const BsButtonSecondaryCss = css`
    
    :host([secondary]) .btn {
        color: var(--btn-text-color, #fff);
        background-color: var(--btn-bg-color, var(--secondary));
        border-color: var(--btn-border-color, var(--secondary));
    }

    :host([secondary]) .btn:hover {
        color: var(--btn-hover-text-color, #fff);
        background-color: var(--btn-hover-bg-color, #5a6268);
        border-color: var(--btn-hover-border-color, #545b62);
    }

    :host([secondary]) .btn:focus, 
    :host([secondary]) .btn.focus {
        box-shadow: var(--btn-focus-shadow, 0 0 0 0.2rem rgba(108, 117, 125, 0.5));
    }

    :host([secondary]) .btn.disabled, 
    :host([secondary]) .btn:disabled {
        color: var(--btn-disabled-text-color, #fff);
        background-color: var(--btn-disabled-bg-color, var(--secondary));
        border-color: var(--btn-disabled-border-color, var(--secondary));
    }
    
    :host([secondary]) .btn:not(:disabled):not(.disabled):active, 
    :host([secondary]) .btn:not(:disabled):not(.disabled).active,
    :host([secondary][dropdown-toggle][dropdown-show]) .btn {
        color: var(--btn-toggle-text-color, #fff);
        background-color: var(--btn-toggle-bg-color, #545b62);
        border-color: var(--btn-toggle-border-color, #4e555b);
    }
    
    :host([secondary]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([secondary]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([secondary][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: var(--btn-toggle-focus-shadow, 0 0 0 0.2rem rgba(108, 117, 125, 0.5));
    }
`;