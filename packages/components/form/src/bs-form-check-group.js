
import { LitElement, html} from 'lit-element';
import { BsFormCheckGroupCss } from './bs-form-check-group.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot.css.js';

export class BsFormCheckGroup extends LitElement {
    
    static get properties() {
        return {
            inline: {type: Boolean, reflect: true},
            disabled: {type: Boolean, reflect: true}
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsFormCheckGroupCss
        ];
    }
    
    render() {
        return html`
            <slot name="check"></slot>
            <slot name="label"></slot>
            <slot name="feedback"></slot>
            <slot></slot>
        `;
    }
    
    constructor() {
        super();
        this.disabled = false;
        this.inline = false;
    }
    
    firstUpdated() {
        this.addEventListener('bs-form-check-label-click', () => this._handleLabelClick());
        this.addEventListener('bs-form-input-validation', event => this._handleInputValidationEvent(event));
    }
    
    updated(changedProperties) {
        
        if (changedProperties.has('disabled')) {
            this._disabledChanged();
        }
        
        if (changedProperties.has('inline')) {
            this._inlineChanged();
        }
    }
    
    isDisabled() {
        return this.disabled;
    }
    
    _handleInputValidationEvent(event) {
        
        const validityState = event.detail.validityState;
        const inputFeedbackElement = this._retrieveFeedbackElement();
        const labelElement = this._retrieveLabelElement();
        
        if(inputFeedbackElement) {
            inputFeedbackElement.showValidationFeedback(validityState);
        }
        
        if(validityState.valid) {
            labelElement.setAttribute('valid', '');
            labelElement.removeAttribute('invalid');
        } else {
            labelElement.setAttribute('invalid', '');
            labelElement.removeAttribute('valid');
        }
    }
    
    _handleLabelClick() {
        
        const inputElement = this._retrieveInputElement();
        
        if(inputElement) {
            inputElement.toggle();
        }
    }
    
    _inlineChanged() {
        
        if(this.inline) {
            this._setElementsToInline();
        }
    }
    
    _disabledChanged() {
        
        if(this.disabled) {
            this._setElementsToDisabled();
        }
    }
    
    // TODO this is not optiomal. instead of
    // setting attributes we should instead use css properties
    
    _setElementsToDisabled() {
        
        const inputElement = this._retrieveInputElement();
        const labelElement = this._retrieveLabelElement();
        
        if(inputElement) {
            inputElement.setAttribute('disabled', '');
        }
        
        if(labelElement) {
            labelElement.setAttribute('disabled', '');
        }
    }
    
    _setElementsToInline() {
        
        const inputElement = this._retrieveInputElement();
        const labelElement = this._retrieveLabelElement();
        
        if(inputElement) {
            inputElement.setAttribute('inline', '');
        }

        if(labelElement) {
            labelElement.setAttribute('inline', '');
        }
    }
    
    _retrieveInputElement() {
        
        const checkSlotElement = this.shadowRoot.querySelector('slot[name="check"]');
        const checkSlotNodes = checkSlotElement.assignedNodes();
        const inputElement = this._findFormCheckInputElement(checkSlotNodes);
        
        return inputElement;
    }
    
    _retrieveLabelElement() {
        
        const labelSlotElement = this.shadowRoot.querySelector('slot[name="label"]');
        const labelSlotNodes = labelSlotElement.assignedNodes();
        const labelElement = this._findLabelElement(labelSlotNodes);
        
        return labelElement;
    }
    
    _retrieveFeedbackElement() {
        
        const feedbackSlotElement = this.shadowRoot.querySelector('slot[name="feedback"]');
        const feedbackSlotNodes = feedbackSlotElement.assignedNodes();
        
        const feedbackElement = this._findInputFeedbackElement(feedbackSlotNodes);
        
        return feedbackElement;
    }
    
    _findFormCheckInputElement(slotNodes) {

        for (let index = 0; index < slotNodes.length; index++) {
            
            const slotItem = slotNodes[index];
            
            if (this._isFormCheckboxInputElement(slotItem) || 
                this._isFormRadioInputElement(slotItem)) {
                return slotItem;
            }
        }
    }
    
    _findLabelElement(slotNodes) {
        
        for (let index = 0; index < slotNodes.length; index++) {
            
            const slotItem = slotNodes[index];
            
            if (this._isLabelElement(slotItem)) {
                return slotItem;
            }
        }
    }
    
    _findInputFeedbackElement(slotNodes) {
        
        for (let index = 0; index < slotNodes.length; index++) {
            const slotItem = slotNodes[index];
            if(this._isInputFeedbackElement(slotItem)) {
                return slotItem;
            }
        }
    }
    
    _isInputFeedbackElement(element) {
        return element.nodeType === Node.ELEMENT_NODE
                && (element.localName === 'bs-form-input-feedback');
    }
    
    _isFormCheckboxInputElement(element) {
        return element.nodeType === Node.ELEMENT_NODE
                && (element.localName === 'bs-form-checkbox-input');
    }
    
    _isFormRadioInputElement(element) {
        return element.nodeType === Node.ELEMENT_NODE
                && (element.localName === 'bs-form-radio-input');
    }
    
    _isLabelElement(element) {
        return element.nodeType === Node.ELEMENT_NODE
                && (element.localName === 'bs-form-check-label');
    }
};

if(!window.customElements.get('bs-form-check-group')) 
    window.customElements.define('bs-form-check-group', BsFormCheckGroup);