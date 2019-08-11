
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';
import { BsButtonGroupHorizontalCss } from './bs-button-group-horizontal-css';
import { BsButtonGroupVerticalCss } from './bs-button-group-vertical-css';
import { BsButtonGroupLargeCss } from './bs-button-group-large-css';
import { BsButtonGroupSmallCss } from './bs-button-group-small-css';
import { BsButtonGroupCss } from './bs-button-group-css';

export class BsButtonGroup extends LitElement {
    
    static get properties() {
        return {
            small: {type: Boolean, reflect: true},
            large: {type: Boolean, reflect: true},
            vertical: {type: Boolean, reflect: true},
            horizontal: {type: Boolean, reflect: true}
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsButtonGroupHorizontalCss,
            BsButtonGroupVerticalCss,
            BsButtonGroupLargeCss,
            BsButtonGroupSmallCss,
            BsButtonGroupCss
        ];
    }
    
    render() {
        return html`
            <slot></slot>
        `;
    }
    
    constructor() {
        super();
        this.small = false;
        this.large = false;
        this.vertical = false;
        this.horizontal = false;
    }
    
    firstUpdated() {
        this._adjustMarginOnMultipleSlottedElements();
    }
    
    // :slotted can only accept simple selectors and not combinators
    // since the adjucent sibling selector cannot be used, we apply css via javascript
    
    _adjustMarginOnMultipleSlottedElements() {
        
        const slotNode = this.shadowRoot.querySelector('slot');
        const slottedNodes = slotNode.assignedNodes();
        
        slottedNodes.forEach(slotElement => {
            this._applyCssForButtonElement(slotElement);
            this._applyCssForButtonGroupElement(slotElement);
        });
    }
    
    _applyCssForButtonElement(slotElement) {
        
        if(this._isButtonElement(slotElement)) {
            
            if(this._isButtonElement(slotElement.previousElementSibling)) {
                if(this.vertical) {
                    slotElement.style.setProperty('--bs-button-margin-top', '-1px');
                    slotElement.style.setProperty('--bs-button-margin-left', '0');
                } else {
                    slotElement.style.setProperty('--bs-button-margin-left', '-1px');
                }
            }
            
            if(this._isButtonGroupElement(slotElement.previousElementSibling)) {
                if(this.vertical) {
                    slotElement.style.setProperty('--bs-button-margin-top', '-1px');
                    slotElement.style.setProperty('--bs-button-margin-left', '0');
                } else {
                    slotElement.style.setProperty('--bs-button-margin-left', '-1px');
                }
            }
        }
    }
    
    _applyCssForButtonGroupElement(slotElement) {
        
        if(this._isButtonGroupElement(slotElement)) {
            
            if(this._isButtonElement(slotElement.previousElementSibling)) {
                if(this.vertical) {
                    slotElement.style.setProperty('--bs-button-margin-top', '-1px');
                    slotElement.style.setProperty('--bs-button-margin-left', '0');
                } else {
                    slotElement.style.setProperty('--bs-button-margin-left', '-1px');
                }
            }
            
            if(this._isButtonGroupElement(slotElement.previousElementSibling)) {
                if(this.vertical) {
                    slotElement.style.setProperty('--bs-button-margin-top', '-1px');
                    slotElement.style.setProperty('--bs-button-margin-left', '0');
                } else {
                    slotElement.style.setProperty('--bs-button-margin-left', '-1px');
                }
            }
        }
    }
    
    _isButtonElement(element) {
        if(element) {
            return element.nodeType === Node.ELEMENT_NODE 
                    && (element.localName === 'bs-button' ||
                    element.localName === 'bs-input-button' ||
                    element.localName === 'bs-link-button');
        }
    }
    
    _isButtonGroupElement(element) {
        if(element) {
            return element.nodeType === Node.ELEMENT_NODE 
                    && element.localName === 'bs-button-group';
        }
    }
};

if (!window.customElements.get("bs-button-group"))  window.customElements.define('bs-button-group', BsButtonGroup);