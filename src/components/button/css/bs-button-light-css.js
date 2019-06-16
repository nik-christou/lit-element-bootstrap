
import { css } from 'lit-element';

export const BsButtonLightCss = css`
    
    :host([light]) .btn {
        color: #212529;
        background-color: #f8f9fa;
        border-color: #f8f9fa;
    }

    :host([light]) .btn:hover {
        color: #212529;
        background-color: #e2e6ea;
        border-color: #dae0e5;
    }

    :host([light]) .btn:focus, 
    :host([light]) .btn.focus {
        box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
    }

    :host([light]) .btn.disabled, 
    :host([light]) .btn:disabled {
        color: #212529;
        background-color: #f8f9fa;
        border-color: #f8f9fa;
    }

    :host([light]) .btn:not(:disabled):not(.disabled):active, 
    :host([light]) .btn:not(:disabled):not(.disabled).active,
    :host([light][dropdown-toggle][dropdown-show]) .btn {
        color: #212529;
        background-color: #dae0e5;
        border-color: #d3d9df;
    }

    :host([light]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([light]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([light][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
    }
`;