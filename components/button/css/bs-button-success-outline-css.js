
import { css } from 'lit-element';

export const BsButtonSuccessOutlineCss = css`
    
    :host([outline-success]) .btn {
        color: #28a745;
        background-color: transparent;
        background-image: none;
        border-color: #28a745;
    }

    :host([outline-success]) .btn:hover {
        color: #fff;
        background-color: #28a745;
        border-color: #28a745;
    }

    :host([outline-success]) .btn:focus, 
    :host([outline-success]) .btn.focus {
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
    }

    :host([outline-success]) .btn.disabled, 
    :host([outline-success]) .btn:disabled {
        color: #28a745;
        background-color: transparent;
    }

    :host([outline-success]) .btn:not(:disabled):not(.disabled):active, 
    :host([outline-success]) .btn:not(:disabled):not(.disabled).active,
    :host([outline-success][dropdown-toggle][dropdown-show]) .btn {
        color: #fff;
        background-color: #28a745;
        border-color: #28a745;
    }

    :host([outline-success]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([outline-success]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([outline-success][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
    }
`;