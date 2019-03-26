
const BsFormInputMixin = (superClass) => class extends superClass {
    
    static get properties() {
        return {
            name: String,
            value: String,
            placeholder: String,
            type: String,
            readonly: {type: Boolean, reflect: true},
            inline: {type: Boolean, reflect: true},
            disabled: {type: Boolean, reflect: true},
            required: {type: Boolean, reflect: true},
            valid: {type: Boolean, reflect: true},
            invalid: {type: Boolean, reflect: true},
            skipValidation: {type: Boolean, reflect: true},
            browserValidation: {type: Boolean, reflect: true},
            browserMissingValueMsg: {type: String, attribute: 'browser-missing-value-msg'},
            browserMismatchValueMsg: {type: String, attribute: 'browser-mismatch-value-msg'},
            browserPatternValueMag: {type: String, attribute: 'browser-pattern-value-msg'},
            browserTooLongValueMsg: {type: String, attribute: 'browser-too-long-value-msg'},
            browserTooShortValueMsg: {type: String, attribute: 'browser-too-short-value-msg'},
            browserRangeUnderflowMsg: {type: String, attribute: 'browser-range-underflow-msg'},
            browserRangeOverflowMsg: {type: String, attribute: 'browser-range-overflow-msg'},
            browserStepMismatchMsg: {type: String, attribute: 'browser-step-mismatch-msg'},
            browserBadInputValueMsg: {type: String, attribute: 'browser-bad-input-value-msg'}
        };
    }
    
    constructor() {
        super();
        this.name = '';
        this.value = '';
        this.type = 'text';
        this.readonly = false;
        this.inline = false;
        this.disabled = false;
        this.required = false;
        this.valid = false;
        this.invalid = false;
        this.skipValidation = false;
        this.browserValidation = false;
        this.browserMissingValueMsg = '';
        this.browserMismatchValueMsg = '';
        this.browserPatternValueMag = '';
        this.browserTooLongValueMsg = '';
        this.browserTooShortValueMsg = '';
        this.browserRangeUnderflowMsg = '';
        this.browserRangeOverflowMsg = '';
        this.browserStepMismatchMsg = '';
        this.browserBadInputValueMsg = '';
    }
    
    firstUpdated() {
        const inputElement = this.shadowRoot.querySelector('input');
        inputElement.addEventListener('keyup', () => this._handleKeyUp());
    }
    
    _handleKeyUp() {
        
        // if element has been called to be validated before
        // both valid and invalid start out as false
        if(this.valid || this.invalid) {
            this.validate();
        }
    }
    
    isDisabled() {
        return this.disabled;
    }
    
    setFocus() {
        const inputElement = this.shadowRoot.querySelector('input');
        inputElement.focus();
    }
    
    getInputName() {
        return this.name;
    }
    
    isValidatable() {
        return !this.skipValidation;
    }
    
    validate() {
        
        if(this.skipValidation) {
            return;
        }
        
        const inputElement = this.shadowRoot.querySelector('input');
        
        const validityState = inputElement.validity;
        
        if(this.browserValidation) {
            this._executeBrowserValidation(inputElement, validityState);
            return;
        }
        
        this._executeCustomValidation(validityState);
        
        return validityState.valid;
    }
    
    _executeCustomValidation(validityState) {
        
        if(validityState.valid) {
            this.valid = true;
            this.invalid = false;
        } else {
            this.valid = false;
            this.invalid = true;
        }
        
        const formInputValidationEvent = new CustomEvent('bs-form-input-validation', {
            bubbles: true, 
            composed: true,
            detail: {
                validityState: validityState
            }
        });
            
        this.dispatchEvent(formInputValidationEvent);
    }
    
    _executeBrowserValidation(inputElement, validityState) {
        
        // has user specified custom message
        const customValidationMessage = this._getCustomValidationMessage(validityState);
        
        if(customValidationMessage) {
            inputElement.setCustomValidity(customValidationMessage);
        }

        inputElement.reportValidity();
    }
    
    _getCustomValidationMessage(validityState) {
        
        if(validityState.valueMissing) {
            return this.browserMissingValueMsg;
        }
        
        if(validityState.typeMismatch) {
            return this.browserMismatchValueMsg;
        }
        
        if(validityState.patternMismatch) {
            return this.browserPatternValueMsg;
        }
        
        if(validityState.tooLong) {
            return this.browserTooLongValueMsg;
        }
        
        if(validityState.tooShort) {
            return this.browserTooShortValueMsg;
        }
        
        if(validityState.rangeUnderflow) {
            return this.browserRangeUnderflowMsg;
        }
        
        if(validityState.rangeOverflow) {
            return this.browserRangeOverflowMsg;
        }
        
        if(validityState.stepMismatch) {
            return this.browserStepMismatchMsg;
        }
        
        if(validityState.badInput) {
            return this.browserBadInputValueMsg;
        }
    }
};

export { BsFormInputMixin };