
import { LitElement, html } from 'lit-element';
import { BsInputGroupPrependCss } from './bs-input-group-prepend.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot.css.js';

export class BsInputGroupPrepend extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsInputGroupPrependCss
        ];
    }
    
    render() {
        return html`
            <slot></slot>
        `;
    }
    
    firstUpdated() {
        this._adjustMarginOnMultipleAddonsElements();
    }
    
    _adjustMarginOnMultipleAddonsElements() {
        
        const slotNode = this.shadowRoot.querySelector('slot');
        const slottedNodes = slotNode.assignedNodes();
        
        slottedNodes.forEach(slotElement => {
            this._applyCssForInputGroupTextElement(slotElement);
            this._applyCssForButtonElement(slotElement);
            this._applyCssForDropdownSplitElement(slotElement);
        });
    }
    
    _applyCssForInputGroupTextElement(slotElement) {
        
        if(this._isInputGroupTextElement(slotElement)) {
            
            if(this._isInputGroupTextElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-input-group-text-margin-left', '-1px');
            }
            
            if(this._isButtonElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-input-group-text-margin-left', '-1px');
            }
        }
    }
    
    _applyCssForButtonElement(slotElement) {
        
        if(this._isButtonElement(slotElement)) {
            
            if(this._isButtonElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-button-margin-left', '-1px');
            }
            
            if(this._isInputGroupTextElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-button-margin-left', '-1px');
            }
        }
    }
    
    _applyCssForDropdownSplitElement(slotElement) {
        
        if(this._isDropdownElement(slotElement)) {
            slotElement.style.setProperty('--dropdown-toggle-margin-left', '-1px');
            slotElement.style.setProperty('--dropdown-toggle-border-top-right', '0');
            slotElement.style.setProperty('--dropdown-toggle-border-bottom-right', '0');
        }
    }
    
    _isInputGroupTextElement(element) {
        if(element) {
            return element.nodeType === Node.ELEMENT_NODE 
                    && element.localName === 'bs-input-group-text';
        }
    }
    
    _isDropdownElement(element) {
        if(element) {
            return element.nodeType === Node.ELEMENT_NODE 
                    && element.localName === 'bs-dropdown';
        }
    }
    
    _isButtonElement(element) {
        if(element) {
            return element.nodeType === Node.ELEMENT_NODE && 
                    (element.localName === 'bs-button' ||
                     element.localName === 'bs-link-button' ||
                     element.localName === 'bs-input-button');
        }
    }
};

if(!window.customElements.get('bs-input-group-prepend')) window.customElements.define('bs-input-group-prepend', BsInputGroupPrepend);