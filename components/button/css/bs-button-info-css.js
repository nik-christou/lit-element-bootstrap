
import { css } from 'lit-element';

export const BsButtonInfoCss = css`
    
    :host([info]) .btn {
        color: #fff;
        background-color: #17a2b8;
        border-color: #17a2b8;
    }

    :host([info]) .btn:hover {
        color: #fff;
        background-color: #138496;
        border-color: #117a8b;
    }

    :host([info]) .btn:focus, 
    :host([info]) .btn.focus {
        box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
    }

    :host([info]) .btn.disabled, 
    :host([info]) .btn:disabled {
        color: #fff;
        background-color: #17a2b8;
        border-color: #17a2b8;
    }

    :host([info]) .btn:not(:disabled):not(.disabled):active, 
    :host([info]) .btn:not(:disabled):not(.disabled).active,
    :host([info][dropdown-toggle][dropdown-show]) .btn {
        color: #fff;
        background-color: #117a8b;
        border-color: #10707f;
    }

    :host([info]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([info]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([info][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
    }
`;