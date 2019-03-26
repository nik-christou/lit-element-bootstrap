
import { css } from 'lit-element';

export const BsButtonDarkOutlineCss = css`
    
    :host([outline-dark]) .btn {
        color: #343a40;
        background-color: transparent;
        background-image: none;
        border-color: #343a40;
    }

    :host([outline-dark]) .btn:hover {
        color: #fff;
        background-color: #343a40;
        border-color: #343a40;
    }

    :host([outline-dark]) .btn:focus, 
    :host([outline-dark]) .btn.focus {
        box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
    }

    :host([outline-dark]) .btn.disabled, 
    :host([outline-dark]) .btn:disabled {
        color: #343a40;
        background-color: transparent;
    }

    :host([outline-dark]) .btn:not(:disabled):not(.disabled):active, 
    :host([outline-dark]) .btn:not(:disabled):not(.disabled).active,
    :host([outline-dark][dropdown-toggle][dropdown-show]) .btn {
        color: #fff;
        background-color: #343a40;
        border-color: #343a40;
    }

    :host([outline-dark]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([outline-dark]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([outline-dark][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
    }
`;