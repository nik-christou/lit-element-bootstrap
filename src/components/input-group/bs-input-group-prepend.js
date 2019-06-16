
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';

export class BsInputGroupPrepend extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    display: flex;
                    margin-right: -1px;
                }
                
                :host ::slotted(bs-button),
                :host ::slotted(bs-link-button),
                :host ::slotted(bs-input-button),
                :host ::slotted(bs-dropdown),
                :host ::slotted(bs-input-group-text) {
                    --bs-button-border-top-right-radius: 0;
                    --bs-button-border-bottom-right-radius: 0;
                    --bs-input-group-text-border-top-right-radius: 0;
                    --bs-input-group-text-border-bottom-right-radius: 0;
                    --bs-button-position: relative;
                    --bs-button-focus-z-index: 2;
                }
                
                :host(:not(:first-child)) ::slotted(bs-button:not(:first-child)),
                :host(:not(:first-child)) ::slotted(bs-link-button:not(:first-child)),
                :host(:not(:first-child)) ::slotted(bs-input-button:not(:first-child)),
                :host(:not(:first-child)) ::slotted(bs-dropdown:not(:first-child)),
                :host(:not(:first-child)) ::slotted(bs-input-group-text:not(:first-child)) {
                    --bs-button-border-top-left-radius: 0;
                    --bs-button-border-bottom-left-radius: 0;
                    --bs-input-group-text-border-top-left-radius: 0;
                    --bs-input-group-text-border-bottom-left-radius: 0;
                }
                
                :host(:first-child) ::slotted(bs-button:not(:first-child)),
                :host(:first-child) ::slotted(bs-link-button:not(:first-child)),
                :host(:first-child) ::slotted(bs-input-button:not(:first-child)),
                :host(:first-child) ::slotted(bs-dropdown:not(:first-child)),
                :host(:first-child) ::slotted(bs-input-group-text:not(:first-child)) {
                    --bs-button-border-top-left-radius: 0;
                    --bs-button-border-bottom-left-radius: 0;
                    --bs-input-group-text-border-top-left-radius: 0;
                    --bs-input-group-text-border-bottom-left-radius: 0;
                }
            `
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

window.customElements.define('bs-input-group-prepend', BsInputGroupPrepend);