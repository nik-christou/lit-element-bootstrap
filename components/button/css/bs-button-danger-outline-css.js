
import { css } from 'lit-element';

export const BsButtonDangerOutlineCss = css`
    
    :host([outline-danger]) .btn {
        color: #dc3545;
        background-color: transparent;
        background-image: none;
        border-color: #dc3545;
    }

    :host([outline-danger]) .btn:hover {
        color: #fff;
        background-color: #dc3545;
        border-color: #dc3545;
    }

    :host([outline-danger]) .btn:focus, 
    :host([outline-danger]) .btn.focus {
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
    }

    :host([outline-danger]) .btn.disabled, 
    :host([outline-danger]) .btn:disabled {
        color: #dc3545;
        background-color: transparent;
    }

    :host([outline-danger]) .btn:not(:disabled):not(.disabled):active, 
    :host([outline-danger]) .btn:not(:disabled):not(.disabled).active,
    :host([outline-danger][dropdown-toggle][dropdown-show]) .btn {
        color: #fff;
        background-color: #dc3545;
        border-color: #dc3545;
    }

    :host([outline-danger]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([outline-danger]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([outline-danger][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
    }
`;