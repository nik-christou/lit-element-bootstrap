
import { css } from 'lit-element';

export const BsButtonLightOutlineCss = css`
    
    :host([outline-light]) .btn {
        color: var(--btn-text-color, var(--light));
        background-color: var(--btn-bg-color, transparent);
        background-image: var(--btn-bg-image, none);
        border-color: var(--btn-border-color, var(--light));
    }

    :host([outline-light]) .btn:hover {
        color: var(--btn-hover-text-color, #212529);
        background-color: var(--btn-hover-bg-color, var(--light));
        border-color: var(--btn-hover-border-color, var(--light));
    }

    :host([outline-light]) .btn:focus, 
    :host([outline-light]) .btn.focus {
        box-shadow: var(--btn-focus-shadow, 0 0 0 0.2rem rgba(248, 249, 250, 0.5));
    }

    :host([outline-light]) .btn.disabled, 
    :host([outline-light]) .btn:disabled {
        color: var(--btn-disabled-text-color, var(--light));
        background-color: var(--btn-disabled-bg-color, transparent);
    }

    :host([outline-light]) .btn:not(:disabled):not(.disabled):active, 
    :host([outline-light]) .btn:not(:disabled):not(.disabled).active,
    :host([outline-light][dropdown-toggle][dropdown-show]) .btn {
        color: var(--btn-toggle-text-color, #212529);
        background-color: var(--btn-toggle-bg-color, var(--light));
        border-color: var(--btn-toggle-border-color, var(--light));
    }

    :host([outline-light]) .btn:not(:disabled):not(.disabled):active:focus, 
    :host([outline-light]) .btn:not(:disabled):not(.disabled).active:focus,
    :host([outline-light][dropdown-toggle][dropdown-show]) .btn:focus {
        box-shadow: var(--btn-toggle-focus-shadow, 0 0 0 0.2rem rgba(248, 249, 250, 0.5));
    }
`;