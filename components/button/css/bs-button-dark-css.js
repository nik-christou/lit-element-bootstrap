
import { css } from 'lit-element';

export const BsButtonDarkCss = css`
    
    :host([dark]) .btn {
        color: #fff;
        background-color: #343a40;
        border-color: #343a40;
    }

    :host([dark]) .btn:hover {
        color: #fff;
        background-color: #23272b;
        border-color: #1d2124;
    }

    :host([dark]) .btn:focus, 
    :host([dark]) .btn.focus {
        box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
    }

    :host([dark]) .btn.disabled, 
    :host([dark]) .btn:disabled {
        color: #fff;
        background-color: #343a40;
        border-color: #343a40;
    }

    :host([dark]) .btn:not(:disabled):not(.disabled):active, 
    :host([dark]) .btn:not(:disabled):not(.disabled).active,
    :host([dark][dropdown-toggle][dropdown-show]) .btn {
        color: #fff;
        background-color: #1d2124;
        border-color: #171a1d;
    }

    :host([dark]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([dark]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([dark][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
    }
`;