
import { css } from 'lit-element';

export const BsButtonSuccessCss = css`
    
    :host([success]) .btn {
        color: #fff;
        background-color: #28a745;
        border-color: #28a745;
    }

    :host([success]) .btn:hover {
        color: #fff;
        background-color: #218838;
        border-color: #1e7e34;
    }

    :host([success]) .btn:focus, 
    :host([success]) .btn.focus {
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
    }

    :host([success]) .btn.disabled, 
    :host([success]) .btn:disabled {
        color: #fff;
        background-color: #28a745;
        border-color: #28a745;
    }

    :host([success]) .btn:not(:disabled):not(.disabled):active, 
    :host([success]) .btn:not(:disabled):not(.disabled).active,
    :host([success][dropdown-toggle][dropdown-show]) .btn {
        color: #fff;
        background-color: #1e7e34;
        border-color: #1c7430;
    }

    :host([success]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([success]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([success][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
    }
`;