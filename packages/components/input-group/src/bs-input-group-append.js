
import { LitElement, html } from 'lit-element';
import { BsInputGroupAppendCss } from './bs-input-group-append.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot.css.js';

export class BsInputGroupAppend extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsInputGroupAppendCss
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

if(!window.customElements.get('bs-input-group-append'))  
    window.customElements.define('bs-input-group-append', BsInputGroupAppend);