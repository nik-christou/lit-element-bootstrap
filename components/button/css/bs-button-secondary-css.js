
import { css } from 'lit-element';

export const BsButtonSecondaryCss = css`
    
    :host([secondary]) .btn {
        color: #fff;
        background-color: #6c757d;
        border-color: #6c757d;
    }

    :host([secondary]) .btn:hover {
        color: #fff;
        background-color: #5a6268;
        border-color: #545b62;
    }

    :host([secondary]) .btn:focus, 
    :host([secondary]) .btn.focus {
        box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
    }

    :host([secondary]) .btn.disabled, 
    :host([secondary]) .btn:disabled {
        color: #fff;
        background-color: #6c757d;
        border-color: #6c757d;
    }
    
    :host([secondary]) .btn:not(:disabled):not(.disabled):active, 
    :host([secondary]) .btn:not(:disabled):not(.disabled).active,
    :host([secondary][dropdown-toggle][dropdown-show]) .btn {
        color: #fff;
        background-color: #545b62;
        border-color: #4e555b;
    }
    
    :host([secondary]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([secondary]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([secondary][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
    }
`;