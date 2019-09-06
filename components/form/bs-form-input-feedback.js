
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';

export class BsFormInputFeedback extends LitElement {
    
    static get properties() {
        return {
            validValueMsg: {type: String, attribute: 'valid-value-msg'},
            missingValueMsg: {type: String, attribute: 'missing-value-msg'},
            mismatchValueMsg: {type: String, attribute: 'mismatch-value-msg'},
            patternValueMsg: {type: String, attribute: 'pattern-value-msg'},
            tooLongValueMsg: {type: String, attribute: 'too-long-value-msg'},
            tooShortValueMsg: {type: String, attribute: 'too-short-value-msg'},
            rangeUnderflowMsg: {type: String, attribute: 'range-underflow-msg'},
            rangeOverflowMsg: {type: String, attribute: 'range-overflow-msg'},
            stepMismatchMsg: {type: String, attribute: 'step-mismatch-msg'},
            badInputValueMsg: {type: String, attribute: 'bad-input-value-msg'},
            feedbackMsg: {type: String, reflect: true},
            valid: {type: Boolean, reflect: true},
            invalid: {type: Boolean, reflect: true}
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    display: none;
                }
                
                :host([valid]) {
                    display: block;
                    width: 100%;
                    margin-top: .25rem;
                    font-size: 80%;
                    color: #28a745;
                }
                
                :host([invalid]) {
                    display: block;
                    width: 100%;
                    margin-top: .25rem;
                    font-size: 80%;
                    color: #dc3545;
                }
            `
        ];
    }
    
    render() {
        return html`
            ${this.feedbackMsg}
        `;
    }
    
    constructor() {
        super();
        this.feedbackMsg = '';
        this.validValueMsg = '';
        this.missingValueMsg = '';
        this.mismatchValueMsg = '';
        this.patternValueMsg = '';
        this.tooLongValueMsg = '';
        this.tooShortValueMsg = '';
        this.rangeUnderflowMsg = '';
        this.rangeOverflowMsg = '';
        this.stepMismatchMsg = '';
        this.badInputValueMsg = '';
        this.valid = false;
        this.invalid = false;
    }
    
    showValidationFeedback(validityState) {
        
        if(validityState.valid) {
            
            this.valid = true;
            this.invalid = false;
            
            if(this.validValueMsg) {
                this.feedbackMsg = this.validValueMsg;
            } else {
                this.feedbackMsg = '';
            }
            
        } else {
            
            this.valid = false;
            this.invalid = true;
            
            const validationMsg = this._getCustomValidationMessage(validityState);
            
            if(validationMsg) {
                this.feedbackMsg = validationMsg;
            }
        }
    }
    
    _getCustomValidationMessage(validityState) {
        
        if(validityState.valueMissing) {
            return this.missingValueMsg;
        }
        
        if(validityState.typeMismatch) {
            return this.mismatchValueMsg;
        }
        
        if(validityState.patternMismatch) {
            return this.patternValueMsg;
        }
        
        if(validityState.tooLong) {
            return this.tooLongValueMsg;
        }
        
        if(validityState.tooShort) {
            return this.tooShortValueMsg;
        }
        
        if(validityState.rangeUnderflow) {
            return this.rangeUnderflowMsg;
        }
        
        if(validityState.rangeOverflow) {
            return this.rangeOverflowMsg;
        }
        
        if(validityState.stepMismatch) {
            return this.stepMismatchMsg;
        }
        
        if(validityState.badInput) {
            return this.badInputValueMsg;
        }
    }
};

if(!window.customElements.get('bs-form-input-feedback')) 
    window.customElements.define('bs-form-input-feedback', BsFormInputFeedback);