
const BsFormInputMixin = (superClass) => class extends superClass {

    static get properties() {
        return {
            name: String,
            value: Object,
            placeholder: String,
            type: String,
            pattern: String,
            maxlength: Number,
            minlength: Number,
            min: Number,
            max: Number,
            step: Number,
            readonly: {type: Boolean, reflect: true},
            inline: {type: Boolean, reflect: true},
            disabled: {type: Boolean, reflect: true},
            required: {type: Boolean, reflect: true},
            valid: {type: Boolean, reflect: true},
            invalid: {type: Boolean, reflect: true},
            skipValidation: {type: Boolean, attribute: 'skip-validation'},
            browserValidation: {type: Boolean, attribute: 'browser-validation'},
            browserMissingValueMsg: {type: String, attribute: 'browser-missing-value-msg'},
            browserMismatchValueMsg: {type: String, attribute: 'browser-mismatch-value-msg'},
            browserPatternValueMsg: {type: String, attribute: 'browser-pattern-value-msg'},
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
        this.type = 'text';
        this.readonly = false;
        this.value = '';
        this.inline = false;
        this.disabled = false;
        this.required = false;
        this.valid = false;
        this.invalid = false;
        this.skipValidation = false;
        this.browserValidation = false;
        this.browserMissingValueMsg = '';
        this.browserMismatchValueMsg = '';
        this.browserPatternValueMsg = '';
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

    getInputValue() {
        const inputElement = this.shadowRoot.querySelector('input');
        return inputElement.value;
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

        // true if the element has a required attribute, but no value
        // false if the element has a required attribute, with value
        if(validityState.valueMissing) {
            return this.browserMissingValueMsg;
        }

        // true if the value is not in the required syntax (when type is email or url)
        // false if the syntax is correct
        if(validityState.typeMismatch) {
            return this.browserMismatchValueMsg;
        }

        // true if the value does not match the specified pattern
        // false if it does match the specified pattern
        if(validityState.patternMismatch) {
            return this.browserPatternValueMsg;
        }

        // true if the value exceeds the specified maxlength
        // false if its length is less than or equal to the maximum length
        if(validityState.tooLong) {
            return this.browserTooLongValueMsg;
        }

        // true if the value fails to meet the specified minlength
        // false if its length is greater than or equal to the minimum length
        if(validityState.tooShort) {
            return this.browserTooShortValueMsg;
        }

        // true if the value is less than the minimum specified by the min attribute
        // false if it is greater than or equal to the minimum
        if(validityState.rangeUnderflow) {
            return this.browserRangeUnderflowMsg;
        }

        // true if the value is greater than the maximum specified by the max attribute
        // false if it is less than or equal to the maximum
        if(validityState.rangeOverflow) {
            return this.browserRangeOverflowMsg;
        }

        // true if the value does not fit the rules determined by the step attribute
        // (that is, it's not evenly divisible by the step value)
        // false if it does fit the step rule
        if(validityState.stepMismatch) {
            return this.browserStepMismatchMsg;
        }

        // true if the user has provided input that the browser is unable to convert
        if(validityState.badInput) {
            return this.browserBadInputValueMsg;
        }
    }
};

export { BsFormInputMixin };
