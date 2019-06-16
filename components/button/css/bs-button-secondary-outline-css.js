
import { css } from 'lit-element';

export const BsButtonSecondaryOutlineCss = css`
    
    :host([outline-secondary]) .btn {
        color: #6c757d;
        background-color: transparent;
        background-image: none;
        border-color: #6c757d;
    }

    :host([outline-secondary]) .btn:hover {
        color: #fff;
        background-color: #6c757d;
        border-color: #6c757d;
    }

    :host([outline-secondary]) .btn:focus, 
    :host([outline-secondary]) .btn.focus {
        box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
    }

    :host([outline-secondary]) .btn.disabled, 
    :host([outline-secondary]) .btn:disabled {
        color: #6c757d;
        background-color: transparent;
    }

    :host([outline-secondary]) .btn:not(:disabled):not(.disabled):active, 
    :host([outline-secondary]) .btn:not(:disabled):not(.disabled).active,
    :host([outline-secondary][dropdown-toggle][dropdown-show]) .btn {
        color: #fff;
        background-color: #6c757d;
        border-color: #6c757d;
    }

    :host([outline-secondary]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([outline-secondary]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([outline-secondary][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
    }
`;