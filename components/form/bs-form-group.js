
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot-css.js';
import { BsColumnExtraSmallCss, 
    BsColumnSmallCss, 
    BsColumnMediumCss, 
    BsColumnLargeCss, 
    BsColumnExtraLargeCss } from '@lit-element-bootstrap/layout';

export class BsFormGroup extends LitElement {
    
    static get properties() {
        return {
            inline: {type: Boolean, reflect: true},
            disabled: {type: Boolean, reflect: true}
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsColumnExtraSmallCss,
            BsColumnSmallCss,
            BsColumnMediumCss,
            BsColumnLargeCss,
            BsColumnExtraLargeCss,
            css`
                :host {
                    display: block;
                    margin-bottom: 1rem;
                }
        
                :host([row]) {
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-wrap: wrap;
                    flex-wrap: wrap;
                    margin-right: -15px;
                    margin-left: -15px;
                }
        
                @media (min-width: 576px) {
                    
                    :host([inline]) {
                        display: -ms-flexbox;
                        display: flex;
                        -ms-flex: 0 0 auto;
                        flex: 0 0 auto;
                        -ms-flex-flow: row wrap;
                        flex-flow: row wrap;
                        -ms-flex-align: center;
                        align-items: center;
                        margin-bottom: 0;
                    }
                }
            `
        ];
    }
    
    render() {
        return html`
            <slot name="label"></slot>
            <slot name="control"></slot>
            <slot name="feedback"></slot>
            <slot name="helptext"></slot>
        `;
    }
    
    constructor() {
        super();
        this.inline = false;
        this.disabled = false;
    }
    
    firstUpdated() {
        this.addEventListener('bs-form-label-click', () => this._handleLabelClickEvent());
        this.addEventListener('bs-form-input-validation', event => this._handleInputValidationEvent(event));
    }
    
    updated(changedProperties) {
        super.updated();
        
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
        
        if(inputFeedbackElement) {
            inputFeedbackElement.showValidationFeedback(validityState);
        }
    }
    
    _handleLabelClickEvent() {
        
        const inputElement = this._retrieveInputElement();
        
        if(inputElement) {
            inputElement.setFocus();
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
        
        const controlSlotElement = this.shadowRoot.querySelector('slot[name="control"]');
        const controlSlotNodes = controlSlotElement.assignedNodes();
        
        const inputElement = this._findInputElement(controlSlotNodes);
        
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
    
    _findInputFeedbackElement(slotNodes) {
        
        for (let index = 0; index < slotNodes.length; index++) {
            const slotItem = slotNodes[index];
            if(this._isInputFeedbackElement(slotItem)) {
                return slotItem;
            }
        }
    }
    
    _findInputElement(slotNodes) {

        for (let index = 0; index < slotNodes.length; index++) {
            const slotItem = slotNodes[index];
            if (this._isInputElement(slotItem) 
                    || this._isPlainTextInputElement(slotItem) 
                    || this._isSelectInputElement(slotItem)
                    || this._isTextAreaElement(slotItem)) {
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
    
    _isInputFeedbackElement(element) {
        return element.nodeType === Node.ELEMENT_NODE
                && (element.localName === 'bs-form-input-feedback');
    }
    
    _isInputElement(element) {
        return element.nodeType === Node.ELEMENT_NODE
                && (element.localName === 'bs-form-input');
    }
    
    _isSelectInputElement(element) {
        return element.nodeType === Node.ELEMENT_NODE
                && (element.localName === 'bs-form-select');
    }
    
    _isTextAreaElement(element) {
        return element.nodeType === Node.ELEMENT_NODE
                && (element.localName === 'bs-form-textarea');
    }
    
    _isPlainTextInputElement(element) {
        return element.nodeType === Node.ELEMENT_NODE
                && (element.localName === 'bs-form-input-plaintext');
    }
    
    _isLabelElement(element) {
        return element.nodeType === Node.ELEMENT_NODE
                && (element.localName === 'bs-form-label');
    }
};

if(!window.customElements.get('bs-form-group'))  
    window.customElements.define('bs-form-group', BsFormGroup);