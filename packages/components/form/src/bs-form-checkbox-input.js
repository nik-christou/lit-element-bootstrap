
import { LitElement, html } from 'lit-element';
import { BsFormCheckboxInputCss } from './bs-form-checkbox-input.css.js';
import { BsPositionCss } from '@lit-element-bootstrap/content';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';
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
            BsFormCheckboxInputCss
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
