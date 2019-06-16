
import { css } from 'lit-element';

export const BsButtonWarningCss = css`
    
    :host([warning]) .btn {
        color: #212529;
        background-color: #ffc107;
        border-color: #ffc107;
    }

    :host([warning]) .btn:hover {
        color: #212529;
        background-color: #e0a800;
        border-color: #d39e00;
    }

    :host([warning]) .btn:focus, 
    :host([warning]) .btn.focus {
        box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
    }

    :host([warning]) .btn.disabled, 
    :host([warning]) .btn:disabled {
        color: #212529;
        background-color: #ffc107;
        border-color: #ffc107;
    }

    :host([warning]) .btn:not(:disabled):not(.disabled):active, 
    :host([warning]) .btn:not(:disabled):not(.disabled).active,
    :host([warning][dropdown-toggle][dropdown-show]) .btn {
        color: #212529;
        background-color: #d39e00;
        border-color: #c69500;
    }

    :host([warning]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([warning]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([warning][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
    }
`;