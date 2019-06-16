
import { css } from 'lit-element';

export const BsFormControlCss = css`
    
    :host {
        display: block;
        width: var(--bs-form-control-width, 100%);
    }
    
    .form-control {
        display: var(--bs-form-control-display, block);
        position: var(--bs-form-control-position);
        width: var(--bs-form-control-width, 100%);
        vertical-align: var(--bs-form-control-vertical-align);
        height: var(--bs-form-control-height, calc(2.25rem + 2px));
        padding: var(--bs-form-control-padding, 0.375rem 0.75rem);
        font-size: var(--bs-form-control-font-size, 1rem);
        line-height: var(--bs-form-control-line-height, 1.5);
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        margin-left: var(--bs-form-control-margin-left);
        border-top-left-radius: var(--bs-form-control-border-top-left-radius, 0.25rem);
        border-top-right-radius: var(--bs-form-control-border-top-right-radius, 0.25rem);
        border-bottom-right-radius: var(--bs-form-control-border-bottom-right-radius, 0.25rem);
        border-bottom-left-radius: var(--bs-form-control-border-bottom-left-radius, 0.25rem);
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    @media screen and (prefers-reduced-motion: reduce) {
      
        .form-control {
            transition: none;
        }
    }

    .form-control::-ms-expand {
        background-color: transparent;
        border: 0;
    }
    
    .form-control:focus {
        color: #495057;
        background-color: #fff;
        border-color: #80bdff;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
        z-index: var(--bs-form-control-z-index);
    }
    
    .form-control::-webkit-input-placeholder {
        color: #6c757d;
        opacity: 1;
    }

    .form-control::-moz-placeholder {
        color: #6c757d;
        opacity: 1;
    }

    .form-control:-ms-input-placeholder {
        color: #6c757d;
        opacity: 1;
    }

    .form-control::-ms-input-placeholder {
        color: #6c757d;
        opacity: 1;
    }

    .form-control::placeholder {
        color: #6c757d;
        opacity: 1;
    }

    .form-control:disabled, 
    .form-control[readonly] {
        background-color: #e9ecef;
        opacity: 1;
    }

    :host([valid]) .form-control {
        border-color: #28a745;
    }
    
    :host([valid]) .form-control:focus {
        border-color: #28a745;
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
    }

    :host([invalid]) .form-control {
        border-color: #dc3545;
    }

    :host([invalid]) .form-control:focus {
        border-color: #dc3545;
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    }
    
    /* Below styles are necessary because of: */
    /* https://developer.mozilla.org/en-US/docs/Web/CSS/:-moz-ui-invalid */
    
    .form-control:-moz-submit-invalid {
        box-shadow: none;
    }

    .form-control:-moz-ui-invalid {
        box-shadow:none;
    }
`;
