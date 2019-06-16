
import { LitElement, html, css } from 'lit-element';
import { BsPositionCss } from '../../utilities';
import { BsContentRebootCss } from '../../content';

export class BsFormRadioInput extends LitElement {
    
    static get properties() {
        return {
            name: String,
            value: String,
            static: {type: Boolean, reflect: true},
            disabled: {type: Boolean, reflect: true},
            checked: {type: Boolean, reflect: true}
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsPositionCss,
            css`
                input {
                    position: var(--bs-form-radio-input-position, absolute);
                    margin-top: var(--bs-form-radio-input-margin-top, 0.3rem);
                    margin-left: var(--bs-form-radio-input-margin-left, -1.25rem);
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
                type="radio"
                .value=${this.value}
                name=${this.name}
                ?checked=${this.checked}
                ?disabled=${this.disabled} />
        `;
    }
    
    constructor() {
        super();
        this.name = '';
        this.value = '';
        this.static = false;
        this.disabled = false;
        this.checked = false;
    }
    
    firstUpdated() {
        const inputElement = this.shadowRoot.querySelector('input');
        inputElement.addEventListener('click', event => this._handleClick(event));
        this._applyStaticCss();
    }
    
    _handleClick() {
        
        const radioInputClickEvent = new CustomEvent('bs-form-radio-click', {
            bubbles: true, 
            composed: true,
            detail: {
                name: this.name,
                value: this.value
            }
        });

        this.dispatchEvent(radioInputClickEvent);
    }
    
    radioGroupItemSelected(name, value) {
        
        if(name === this.name && value === this.value) {
            this.check();
        } else {
            this.uncheck();
        }
    }
    
    _applyStaticCss() {
        
        if(this.static) {
            const checkboxElement = this.shadowRoot.querySelector('input');
            checkboxElement.classList.add('position-static');
        }
    }
    
    check() {
        const radioInputElement = this.shadowRoot.querySelector('input');
        radioInputElement.checked = true;
        this.checked = true;
    }
    
    uncheck() {
        const radioInputElement = this.shadowRoot.querySelector('input');
        radioInputElement.checked = false;
        this.checked = false;
    }
    
    toggle() {
        const radioInputElement = this.shadowRoot.querySelector('input');
        radioInputElement.checked = !radioInputElement.checked;
        this._handleClick();
    }
};

window.customElements.define('bs-form-radio-input', BsFormRadioInput);