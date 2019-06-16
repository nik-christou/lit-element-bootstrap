
import { css } from 'lit-element';

export const BsInputGroupCss = css`
    
    :host {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        width: var(--bs-input-group-width, 100%);
    }

    :host ::slotted(bs-form-input),
    :host ::slotted(bs-form-select),
    :host ::slotted(bs-form-textarea),
    :host ::slotted(bs-custom-select),
    :host ::slotted(bs-custom-file) {
        flex: 1 1 auto;
        width: 1%;
        margin-bottom: 0;
        
        --bs-form-control-position: relative;
        --bs-form-control-z-index: 3;
        --bs-custom-select-position: relative;
        --bs-custom-select-z-index: 3;
        --bs-custom-file-position: relative;
        --bs-custom-file-z-index: 3;
    }
    
    /* 
        remember to add this inside the bs-custom-file component 
       
        .input-group > .custom-file .custom-file-input:focus ~ .custom-file-label 
    */
    
    /* 
        remember to add this inside the bs-custom-file component
        
        .input-group > .custom-file .custom-file-input:focus {
            z-index: 4;
        } 
    */
    
    :host ::slotted(bs-form-input:not(:last-child)),
    :host ::slotted(bs-form-select:not(:last-child)),
    :host ::slotted(bs-form-textarea:not(:last-child)),
    :host ::slotted(bs-custom-select:not(:last-child)) {
        --bs-form-control-border-top-right-radius: 0;
        --bs-form-control-border-bottom-right-radius: 0;
    }
    
    :host ::slotted(bs-form-input:not(:first-child)),
    :host ::slotted(bs-form-select:not(:first-child)),
    :host ::slotted(bs-form-textarea:not(:first-child)),
    :host ::slotted(bs-custom-select:not(:first-child)) {
        --bs-form-control-border-top-left-radius: 0;
        --bs-form-control-border-bottom-left-radius: 0;
    }
    
    :host ::slotted(bs-custom-file) {
        display: flex;
        align-items: center;
    }
    
    /*
        remember to add this inside the bs-custom-file component

        .input-group > .custom-file:not(:last-child) .custom-file-label,
        .input-group > .custom-file:not(:last-child) .custom-file-label::after {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }
        
        .input-group > .custom-file:not(:first-child) .custom-file-label {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          }
    */
`;