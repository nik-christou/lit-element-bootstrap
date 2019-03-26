
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';

export class BsFormFieldset extends LitElement {

    static get properties() {
        return {
            disabled: {type: Boolean, value: false}
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss
        ];
    }

    render() {
        return html`
            <fieldset>
                <slot></slot>
            </fieldset>
        `;
    }
    
    constructor() {
        super();
        this.disabled = false;
    }
    
    firstUpdated() {
        this._disableElements();
    }
    
    _disableElements() {
        
        if(!this.disabled) {
            return;
        }
        
        const slotElement = this.shadowRoot.querySelector('slot');
        const slotNodes = slotElement.assignedNodes();
        
        this._disableFormGroups(slotNodes);
        this._disableFormCheckGroups(slotNodes);
        this._disableButtons(slotNodes);
    }
    
    _disableButtons(slotNodes) {
        
        const buttonElements = this._retrieveButtonElements(slotNodes);
        
        for(let index = 0; index < buttonElements.length; index++) {
            
            const buttonItem = buttonElements[index];
            buttonItem.setAttribute('disabled', '');
        }
    }
    
    _disableFormCheckGroups(slotNodes) {
        
        const formCheckGroupElements = this._retrieveFormCheckGroupElements(slotNodes);
        
        for(let index = 0; index < formCheckGroupElements.length; index++) {
            
            const formGroupItem = formCheckGroupElements[index];
            formGroupItem.setAttribute('disabled', '');
        }
    }
    
    _disableFormGroups(slotNodes) {
        
        const formGroupElements = this._retrieveFormGroupElements(slotNodes);
        
        for(let index = 0; index < formGroupElements.length; index++) {
            
            const formGroupItem = formGroupElements[index];
            formGroupItem.setAttribute('disabled', '');
        }
    }
    
    _retrieveFormGroupElements(slotNodes) {
        
        const formGroupNodes = [];
        
        for (let index = 0; index < slotNodes.length; index++) {
            const slotElement = slotNodes[index];
            if (this._isFormGroupElement(slotElement)) {
                formGroupNodes.push(slotElement);
            }
        }
        
        return formGroupNodes;
    }
    
    _retrieveFormCheckGroupElements(slotNodes) {
        
        const formCheckGroupNodes = [];
        
        for (let index = 0; index < slotNodes.length; index++) {
            const slotElement = slotNodes[index];
            if (this._isFormCheckGroupElement(slotElement)) {
                formCheckGroupNodes.push(slotElement);
            }
        }
        
        return formCheckGroupNodes;
    }
    
    _retrieveButtonElements(slotNodes) {
        
        const buttonNodes = [];
        
        for (let index = 0; index < slotNodes.length; index++) {
            const slotElement = slotNodes[index];
            if (this._isButtonElement(slotElement)) {
                buttonNodes.push(slotElement);
            }
        }
        
        return buttonNodes;
    }
    
    _isButtonElement(element) {
        return element.nodeType === Node.ELEMENT_NODE
                && ((element.localName === 'bs-button')
                || (element.localName === 'bs-input-button')
                || (element.localName === 'bs-link-button'));
    }
    
    _isFormGroupElement(element) {
        return element.nodeType === Node.ELEMENT_NODE
                && (element.localName === 'bs-form-group');
    }
    
    _isFormCheckGroupElement(element) {
        return element.nodeType === Node.ELEMENT_NODE
                && (element.localName === 'bs-form-check-group');
    }
};

window.customElements.define('bs-form-fieldset', BsFormFieldset);