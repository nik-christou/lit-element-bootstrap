
import { css } from 'lit-element';

export const BsButtonWarningCss = css`
    
    :host([warning]) .btn {
        color: var(--btn-text-color, #212529);
        background-color: var(--btn-bg-color, var(--warning));
        border-color: var(--btn-border-color, var(--warning));
    }

    :host([warning]) .btn:hover {
        color: var(--btn-hover-text-color, #212529);
        background-color: var(--btn-hover-bg-color, #e0a800);
        border-color: var(--btn-hover-border-color, #d39e00);
    }

    :host([warning]) .btn:focus, 
    :host([warning]) .btn.focus {
        box-shadow: var(--btn-focus-shadow, 0 0 0 0.2rem rgba(255, 193, 7, 0.5));
    }

    :host([warning]) .btn.disabled, 
    :host([warning]) .btn:disabled {
        color: var(--btn-disabled-text-color, #212529);
        background-color: var(--btn-disabled-bg-color, var(--warning));
        border-color: var(--btn-disabled-border-color, var(--warning));
    }

    :host([warning]) .btn:not(:disabled):not(.disabled):active, 
    :host([warning]) .btn:not(:disabled):not(.disabled).active,
    :host([warning][dropdown-toggle][dropdown-show]) .btn {
        color: var(--btn-toggle-text-color, #212529);
        background-color: var(--btn-toggle-bg-color, #d39e00);
        border-color: var(--btn-toggle-border-color, #c69500);
    }

    :host([warning]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([warning]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([warning][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: var(--btn-toggle-focus-shadow, 0 0 0 0.2rem rgba(255, 193, 7, 0.5));
    }
`;