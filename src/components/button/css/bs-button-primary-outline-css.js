
import { css } from 'lit-element';

export const BsButtonPrimaryOutlineCss = css`
    
    :host([outline-primary]) .btn {
        color: #007bff;
        background-color: transparent;
        background-image: none;
        border-color: #007bff;
    }

    :host([outline-primary]) .btn:hover {
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
    }

    :host([outline-primary]) .btn:focus, 
    :host([outline-primary]) .btn.focus {
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
    }

    :host([outline-primary]) .btn.disabled, 
    :host([outline-primary]) .btn:disabled {
        color: #007bff;
        background-color: transparent;
    }

    :host([outline-primary]) .btn:not(:disabled):not(.disabled):active, 
    :host([outline-primary]) .btn:not(:disabled):not(.disabled).active,
    :host([outline-primary][dropdown-toggle][dropdown-show]) .btn {
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
    }

    :host([outline-primary]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([outline-primary]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([outline-primary][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
    }
`;