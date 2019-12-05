
import { css } from 'lit-element';

export const BsButtonLightCss = css`
    
    :host([light]) .btn {
        color: var(--btn-text-color, #212529);
        background-color: var(--btn-bg-color, var(--light));
        border-color: var(--btn-border-color, var(--light));
    }

    :host([light]) .btn:hover {
        color: var(--btn-hover-text-color, #212529);
        background-color: var(--btn-hover-bg-color, #e2e6ea);
        border-color: var(--btn-hover-border-color, #dae0e5);
    }

    :host([light]) .btn:focus, 
    :host([light]) .btn.focus {
        box-shadow: var(--btn-focus-shadow, 0 0 0 0.2rem rgba(248, 249, 250, 0.5));
    }

    :host([light]) .btn.disabled, 
    :host([light]) .btn:disabled {
        color: var(--btn-disabled-text-color, #212529);
        background-color: var(--btn-disabled-bg-color, var(--light));
        border-color: var(--btn-disabled-border-color, var(--light));
    }

    :host([light]) .btn:not(:disabled):not(.disabled):active, 
    :host([light]) .btn:not(:disabled):not(.disabled).active,
    :host([light][dropdown-toggle][dropdown-show]) .btn {
        color: var(--btn-toggle-text-color, #212529);
        background-color: var(--btn-toggle-bg-color, #dae0e5);
        border-color: var(--btn-toggle-border-color, #d3d9df);
    }

    :host([light]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([light]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([light][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: var(--btn-toggle-focus-shadow, 0 0 0 0.2rem rgba(248, 249, 250, 0.5));
    }
`;