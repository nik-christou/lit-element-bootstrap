
import { css } from 'lit-element';

export const BsButtonWarningOutlineCss = css`
    
    :host([outline-warning]) .btn {
        color: var(--btn-text-color, var(--warning));
        background-color: var(--btn-bg-color, transparent);
        background-image: var(--btn-bg-image, none);
        border-color: var(--btn-border-color, var(--warning));
    }

    :host([outline-warning]) .btn:hover {
        color: var(--btn-hover-text-color, #212529);
        background-color: var(--btn-hover-bg-color, var(--warning));
        border-color: var(--btn-hover-border-color, var(--warning));
    }

    :host([outline-warning]) .btn:focus, 
    :host([outline-warning]) .btn.focus {
        box-shadow: var(--btn-focus-shadow, 0 0 0 0.2rem rgba(255, 193, 7, 0.5));
    }

    :host([outline-warning]) .btn.disabled, 
    :host([outline-warning]) .btn:disabled {
        color: var(--btn-disabled-text-color, var(--warning));
        background-color: var(--btn-disabled-bg-color, transparent);
    }

    :host([outline-warning]) .btn:not(:disabled):not(.disabled):active, 
    :host([outline-warning]) .btn:not(:disabled):not(.disabled).active,
    :host([outline-warning][dropdown-toggle][dropdown-show]) .btn {
        color: var(--btn-toggle-text-color, #212529);
        background-color: var(--btn-toggle-bg-color, var(--warning));
        border-color: var(--btn-toggle-border-color, var(--warning));
    }

    :host([outline-warning]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([outline-warning]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([outline-warning][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: var(--btn-toggle-focus-shadow, 0 0 0 0.2rem rgba(255, 193, 7, 0.5));
    }
`;