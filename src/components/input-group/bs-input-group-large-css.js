
import { css } from 'lit-element';

export const BsInputGroupLargeCss = css`
    
    :host([small]) ::slotted(bs-form-input),
    :host([small]) ::slotted(bs-form-select),
    :host([small]) ::slotted(bs-form-textarea),
    :host([small]) ::slotted(bs-input-group-append),
    :host([small]) ::slotted(bs-input-group-prepend) {
        
        --bs-button-height: calc(2.875rem + 2px);
        --bs-button-padding-top: 0.5rem;
        --bs-button-padding-bottom: 0.5rem;
        --bs-button-padding-left: 1rem;
        --bs-button-padding-right: 1rem;
        --bs-button-font-size: 1.25rem;
        --bs-button-line-height: 1.5;
        --bs-button-border-top-left-radius: 0.3rem;
        --bs-button-border-top-right-radius: 0.3rem;
        --bs-button-border-bottom-left-radius: 0.3rem;
        --bs-button-border-bottom-right-radius: 0.3rem;

        --bs-form-control-height: calc(2.875rem + 2px);
        --bs-form-control-padding: 0.5rem 1rem;
        --bs-form-control-font-size: 1.25rem;
        --bs-form-control-line-height: 1.5;
        --bs-form-control-border-top-left-radius: 0.3rem;
        --bs-form-control-border-top-right-radius: 0.3rem;
        --bs-form-control-border-bottom-left-radius: 0.3rem;
        --bs-form-control-border-bottom-right-radius: 0.3rem;

        --bs-input-group-text-height: calc(2.875rem + 2px);
        --bs-input-group-text-padding: 0.5rem 1rem;
        --bs-input-group-text-font-size: 1.25rem;
        --bs-input-group-text-line-height: 1.5;
        --bs-input-group-text-border-top-left-radius: 0.3rem;
        --bs-input-group-text-border-top-right-radius: 0.3rem;
        --bs-input-group-text-border-bottom-left-radius: 0.3rem;
        --bs-input-group-text-border-bottom-right-radius: 0.3rem;
    }
`;