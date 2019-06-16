
import { css } from 'lit-element';

export const BsButtonInfoOutlineCss = css`
    
    :host([outline-info]) .btn {
        color: #17a2b8;
        background-color: transparent;
        background-image: none;
        border-color: #17a2b8;
    }

    :host([outline-info]) .btn:hover {
        color: #fff;
        background-color: #17a2b8;
        border-color: #17a2b8;
    }

    :host([outline-info]) .btn:focus, 
    :host([outline-info]) .btn.focus {
        box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
    }

    :host([outline-info]) .btn.disabled, 
    :host([outline-info]) .btn:disabled {
        color: #17a2b8;
        background-color: transparent;
    }

    :host([outline-info]) .btn:not(:disabled):not(.disabled):active, 
    :host([outline-info]) .btn:not(:disabled):not(.disabled).active,
    :host([outline-info][dropdown-toggle][dropdown-show]) .btn {
        color: #fff;
        background-color: #17a2b8;
        border-color: #17a2b8;
    }

    :host([outline-info]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([outline-info]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([outline-info][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
    }
`;