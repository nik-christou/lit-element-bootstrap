
import { LitElement, html, css } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';
import { BsContentRebootCss } from '../../content';

export class BsForm extends LitElement {
    
    static get properties() {
        return {
            name: String,
            action: String,
            ajax: Boolean,
            method: {type: String, reflect: true},
            enctype: {type: String, reflect: true},
            inline: {type: Boolean, reflect: true},
            novalidate: {type: Boolean, reflect: true},
            autocomplete: {type: String, reflect: true},
            acceptCharset: {type: String, reflect: true}
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host(:not([inline])) {
                    display: block;
                }
                
                :host([inline]) {
                    display: flex;
                    flex-flow: row wrap;
                    align-items: center;
                }
                
                :host([inline]) form {
                    display: flex;
                    flex-flow: row wrap;
                    align-items: center;
                }
        
                @media (min-width: 576px) {
                    :host([inline]) {
                        --bs-form-control-display: inline-block;
                        --bs-form-control-width: auto;
                        --bs-form-control-vertical-align: middle;
                        --bs-input-group-width: auto;
                    }
                }
            `
        ];
    }
    
    render() {
        return html`
            <form
                name=${ifDefined(this.name)}
                action=${ifDefined(this.action)}
                .method=${this.method}
                .enctype=${this.enctype}
                accept-charset=${this.acceptCharset}
                ?novalidate=${this.novalidate}
                .autocomplete=${this.autocomplete}>
                <slot></slot>
            </form>
        `;
    }
    
    constructor() {
        super();
        this.inline = false;
        this.novalidate = false;
        this.autocomplete = 'off';
        this.ajax = false;
        this.method = "get";
        this.enctype = "application/x-www-form-urlencoded";
        this.acceptCharset = "UTF-8";
    }
    
    firstUpdated() {
        this._setFormGroupsToInline();
        this.addEventListener('bs-button-click', event => this._handleButton(event));
    }
    
    _handleButton(event) {
        
        const action = event.detail.action;
        const formElement = this.shadowRoot.querySelector('form');
        
        if(action === 'submit') {
            this._handleSubmit(formElement);
        }
        
        if(action === 'reset') {
            formElement.reset();
        }
    }
    
    _handleSubmit(formElement) {
        
        const formInputValidation = this._validateFormInputs();
        
        if(!formInputValidation) {
            return;
        }
        
        if (this.ajax) {
            
            const formData = new FormData(formElement);
            this._populateFormDataFromInputControls(formData);
            
            this._executeAjaxFormSubmission(formData);
            
            return;
        }
            
        const formData = new FormData(formElement);
        this._populateFormDataFromInputControls(formData);
            
        // formElement.submit();
    }
    
    _executeAjaxFormSubmission(formData) {
        
        const request = new XMLHttpRequest();
        
        // the fired event should contain the XMLHttpRequest object
        // so that users can post on their own
        const eventPrevented = this._firePreSubmitEvent(request);
        
        if(eventPrevented) {
            return;
        }
        
        request.open('POST', this.action);
        request.send(formData);
    }
    
    _firePreSubmitEvent(request) {
        
        const presubmitEvent = new CustomEvent('bs-form-presubmit', {
            bubbles: true, 
            composed: true,
            cancelable: true,
            detail: {
                request: request
            }
        });

        this.dispatchEvent(presubmitEvent);
        
        const presubmitEventPrevented = presubmitEvent.defaultPrevented;
        
        return presubmitEventPrevented;
    }
    
    _validateFormInputs() {
        
        if(this.novalidate) {
            return true;
        }
        
        // TODO also find and include all native elements 
        
        const customFormInputValidationStates = [];
        
        const formInputElements = this._retrieveFormInputElements(true);
        
        for(let index = 0; index < formInputElements.length; index++) {
            
            const formInputElement = formInputElements[index];
            const formInputValid = formInputElement.validate();
            
            customFormInputValidationStates.push(formInputValid);
        }
        
        // has any of the custom form input elements failed validation
        const atLeastOneInputFailedValidation = customFormInputValidationStates.includes(false);
        
        return !atLeastOneInputFailedValidation;
    }
    
    _populateFormDataFromInputControls(formData) {
        
        const formInputElements = this._retrieveFormInputElements(false);
        
        for(let index = 0; index < formInputElements.length; index++) {
            
            const formInputElement = formInputElements[index];
            this._extractInputData(formData, formInputElement);
        }
    }
    
    _extractInputData(formData, formInput) {
        
        if(this._isInputDisabled(formInput)) {
            return;
        }
        
        const name = formInput.getInputName();
        const value = formInput.getInputValue();

        if(name && value) {
            formData.append(name, value);
        }
    }
    
    _setFormGroupsToInline() {
        
        if(!this.inline) {
            return;
        }
        
        const slotElement = this.shadowRoot.querySelector('slot');
        const slotNodes = slotElement.assignedNodes();
        const formGroupElements = this._retrieveFormGroupElements(slotNodes);
        
        for(let index = 0; index < formGroupElements.length; index++) {
            
            const formGroupElement = formGroupElements[index];
            
            if(formGroupElement) {
                formGroupElement.setAttribute('inline', '');
            }
        }
    }
    
    _retrieveFormGroupElements(slotNodes) {
        
        const formGroupElements = [];
        
        for (let index = 0; index < slotNodes.length; ++index) {
            const slotNode = slotNodes[index];
            if (this._isFormGroupElement(slotNode)) {
                formGroupElements.push(slotNode);
            }
        }
        
        return formGroupElements;
    }
    
    _retrieveFormInputElements(validatableOnlyElements) {
        
        const formInputElements = [];
        
        const slotElement = this.shadowRoot.querySelector('slot');
        const slotNodes = slotElement.assignedNodes();
        
        for(let index = 0; index < slotNodes.length; index++) {
            
            const slotNode = slotNodes[index];
            
            if(this._isFormGroupElement(slotNode) || this._isFormCheckGroupElement(slotNode)) {
            
                if(this._isGroupDisabled(slotNode)) {
                    continue;
                }
                
                const groupChildren = slotNode.children;
                
                for(let index = 0; index < groupChildren.length; index++) {

                    const formGroupChild = groupChildren[index];

                    if(this._isFormInputElement(formGroupChild) || this._isFormCheckboxInput(formGroupChild)) {
                        
                        if(validatableOnlyElements) {
                            
                            if(formGroupChild.isValidatable()) {
                                formInputElements.push(formGroupChild);
                            }
                            
                        } else {
                            formInputElements.push(formGroupChild);
                        }
                    }
                }
            }
        }
        
        return formInputElements;
    }
    
    _isGroupDisabled(formGroupElement) {
        return formGroupElement.isDisabled();
    }
    
    _isInputDisabled(formInputElement) {
        return formInputElement.isDisabled();
    }
    
    _isElementSubmittable(element) {
        return element.nodeType === Node.ELEMENT_NODE &&
                !element.disabled && 
                !element.name;
    }
    
    _isFormFileInput(element) {
        return element.nodeType === Node.ELEMENT_NODE && 
                element.localName === 'bs-form-file-input';
    }
    
    _isFormTextAreaElement(element) {
        return element.nodeType === Node.ELEMENT_NODE && 
                element.localName === 'bs-form-textarea';
    }
    
    _isFormInputElement(element) {
        return element.nodeType === Node.ELEMENT_NODE && 
                element.localName === 'bs-form-input';
    }
    
    _isFormCheckboxInput(element) {
        return element.nodeType === Node.ELEMENT_NODE && 
                element.localName === 'bs-form-checkbox-input';
    }
    
    _isFormRadioInput(element) {
        return element.nodeType === Node.ELEMENT_NODE && 
                element.localName === 'bs-form-radio-input';
    }
    
    _isFormGroupElement(element) {
        return element.nodeType === Node.ELEMENT_NODE && 
                element.localName === 'bs-form-group';
    }
    
    _isFormCheckGroupElement(element) {
        return element.nodeType === Node.ELEMENT_NODE && 
                element.localName === 'bs-form-check-group';
    }
};

if(!window.customElements.get('bs-form')) window.customElements.define('bs-form', BsForm);