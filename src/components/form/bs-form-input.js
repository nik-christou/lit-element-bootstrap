
import { LitElement, html, css } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';
import { BsFormInputMixin } from './bs-form-input-mixin';
import { BsFormControlCss } from './css/bs-form-control-css';
import { BsFormControlSizeCss } from './css/bs-form-control-size-css';
import { BsContentRebootCss } from '../../content';

export class BsFormInput extends BsFormInputMixin(LitElement) {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsFormControlCss,
            BsFormControlSizeCss
        ];
    }
    
    render() {
        return html`
            <input 
                class="form-control"
                type=${this.type}
                ?readonly=${this.readonly}
                name=${this.name}
                .value=${this.value}
                ?required=${this.required}
                placeholder=${ifDefined(this.placeholder)}
                ?disabled=${this.disabled} />
        `;
    }
    
    getInputValue() {
        const inputElement = this.shadowRoot.querySelector('input');
        return inputElement.value;
    }
};

window.customElements.define('bs-form-input', BsFormInput);