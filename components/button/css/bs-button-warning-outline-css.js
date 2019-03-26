
import { css } from 'lit-element';

export const BsButtonWarningOutlineCss = css`
    
    :host([outline-warning]) .btn {
        color: #ffc107;
        background-color: transparent;
        background-image: none;
        border-color: #ffc107;
    }

    :host([outline-warning]) .btn:hover {
        color: #212529;
        background-color: #ffc107;
        border-color: #ffc107;
    }

    :host([outline-warning]) .btn:focus, 
    :host([outline-warning]) .btn.focus {
        box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
    }

    :host([outline-warning]) .btn.disabled, 
    :host([outline-warning]) .btn:disabled {
        color: #ffc107;
        background-color: transparent;
    }

    :host([outline-warning]) .btn:not(:disabled):not(.disabled):active, 
    :host([outline-warning]) .btn:not(:disabled):not(.disabled).active,
    :host([outline-warning][dropdown-toggle][dropdown-show]) .btn {
        color: #212529;
        background-color: #ffc107;
        border-color: #ffc107;
    }

    :host([outline-warning]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([outline-warning]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([outline-warning][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
    }
`;