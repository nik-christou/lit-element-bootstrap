
import { LitElement, html } from 'lit-element';
import { BsFormRadioInputCss } from './bs-form-radio-input.css.js';
import { BsPositionCss } from '@lit-element-bootstrap/content';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

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
            BsFormRadioInputCss
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

if(!window.customElements.get('bs-form-radio-input'))
    window.customElements.define('bs-form-radio-input', BsFormRadioInput);
