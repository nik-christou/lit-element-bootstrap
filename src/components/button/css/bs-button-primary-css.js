
import { css } from 'lit-element';

export const BsButtonPrimaryCss = css`
    
    :host([primary]) .btn {
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
    }

    :host([primary]) .btn:hover {
        color: #fff;
        background-color: #0069d9;
        border-color: #0062cc;
    }

    :host([primary]) .btn:focus, 
    :host([primary]) .btn.focus {
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
    }

    :host([primary]) .btn.disabled,
    :host([primary]) .btn:disabled {
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
    }

    :host([primary]) .btn:not(:disabled):not(.disabled):active, 
    :host([primary]) .btn:not(:disabled):not(.disabled).active,
    :host([primary][dropdown-toggle][dropdown-show]) .btn {
        color: #fff;
        background-color: #0062cc;
        border-color: #005cbf;
    }

    :host([primary]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([primary]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([primary][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
    }
`;