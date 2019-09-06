
import { LitElement, html, css } from 'lit-element';
import { BsPositionCss } from '@lit-element-bootstrap/utilities/bs-position-css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot-css.js';

import { BsFormInputMixin } from './bs-form-input-mixin.js';

export class BsFormCheckboxInput extends BsFormInputMixin(LitElement) {
    
    static get properties() {
        return {
            static: {type: Boolean, reflect: true},
            checked: {type: Boolean, reflect: true}
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsPositionCss,
            css`
                input {
                    position: var(--bs-form-checkbox-input-position, absolute);
                    margin-top: var(--bs-form-checkbox-input-margin-top, 0.3rem);
                    margin-left: var(--bs-form-checkbox-input-margin-left, -1.25rem);
                }
                
                :host([inline]) {
                    display: inline-flex;
                }
                
                :host([inline]) input {
                    position: static;
                    margin-top: 0;
                    margin-right: 0.3125rem;
                    margin-left: 0;
                }
                
                @media (min-width: 576px) {
        
                    :host([inline]) input {
                        position: relative;
                        margin-top: 0;
                        margin-right: 0.25rem;
                        margin-left: 0;
                    }
                }
            `
        ];
    }
    
    render() {
        return html`
            <input 
                type="checkbox"
                name=${this.name}
                ?checked=${this.checked}
                ?required=${this.required}
                ?disabled=${this.disabled} />
        `;
    }
    
    constructor() {
        super();
        this.static = false;
        this.checked = false;
    }
    
    firstUpdated() {
        this._applyStaticCss();
    }
    
    _applyStaticCss() {
        
        if(this.static) {
            const checkboxElement = this.shadowRoot.querySelector('input');
            checkboxElement.classList.add('position-static');
        }
    }
    
    check() {
        const checkboxElement = this.shadowRoot.querySelector('input');
        checkboxElement.checked = true;
    }
    
    uncheck() {
        const checkboxElement = this.shadowRoot.querySelector('input');
        checkboxElement.checked = false;
    }
    
    toggle() {
        const checkboxElement = this.shadowRoot.querySelector('input');
        checkboxElement.checked = !checkboxElement.checked;
    }
    
    getInputValue() {
        const checkboxElement = this.shadowRoot.querySelector('input');
        return checkboxElement.checked;
    }
};

if(!window.customElements.get('bs-form-checkbox-input'))  
    window.customElements.define('bs-form-checkbox-input', BsFormCheckboxInput);