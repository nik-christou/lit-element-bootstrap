
import { css } from 'lit-element';

export const BsButtonLightOutlineCss = css`
    
    :host([outline-light]) .btn {
        color: #f8f9fa;
        background-color: transparent;
        background-image: none;
        border-color: #f8f9fa;
    }

    :host([outline-light]) .btn:hover {
        color: #212529;
        background-color: #f8f9fa;
        border-color: #f8f9fa;
    }

    :host([outline-light]) .btn:focus, 
    :host([outline-light]) .btn.focus {
        box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
    }

    :host([outline-light]) .btn.disabled, 
    :host([outline-light]) .btn:disabled {
        color: #f8f9fa;
        background-color: transparent;
    }

    :host([outline-light]) .btn:not(:disabled):not(.disabled):active, 
    :host([outline-light]) .btn:not(:disabled):not(.disabled).active,
    :host([outline-light][dropdown-toggle][dropdown-show]) .btn {
        color: #212529;
        background-color: #f8f9fa;
        border-color: #f8f9fa;
    }

    :host([outline-light]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([outline-light]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([outline-light][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
    }
`;