
import { css } from 'lit-element';

export const BsButtonDangerCss = css`
    
    :host([danger]) .btn {
        color: #fff;
        background-color: #dc3545;
        border-color: #dc3545;
    }

    :host([danger]) .btn:hover {
        color: #fff;
        background-color: #c82333;
        border-color: #bd2130;
    }

    :host([danger]) .btn:focus, .btn-danger.focus {
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
    }

    :host([danger]) .btn.disabled, 
    :host([danger]) .btn:disabled {
        color: #fff;
        background-color: #dc3545;
        border-color: #dc3545;
    }

    :host([danger]) .btn:not(:disabled):not(.disabled):active, 
    :host([danger]) .btn:not(:disabled):not(.disabled).active,
    :host([danger][dropdown-toggle][dropdown-show]) .btn {
        color: #fff;
        background-color: #bd2130;
        border-color: #b21f2d;
    }

    :host([danger]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([danger]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([danger][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
    }
`;
    