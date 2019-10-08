
import { LitElement, html } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';
import { BsFormInputMixin } from './bs-form-input-mixin.js';
import { BsFormControlSizeCss } from './bs-form-control-size.css.js';
import { BsFormInputPlaintextCss } from './bs-form-input-plaintext.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot.css.js';

export class BsFormInputPlaintext extends BsFormInputMixin(LitElement) {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsFormControlSizeCss,
            BsFormInputPlaintextCss
        ];
    }
    
    render() {
        return html`
            <input 
                type="text"
                .value=${this.value}
                name=${ifDefined(this.name)}
                maxlength=${ifDefined(this.maxlength)}
                minlength=${ifDefined(this.minlength)}
                pattern=${ifDefined(this.pattern)}
                placeholder=${ifDefined(this.placeholder)}
                ?readonly=${this.readonly}
                ?required=${this.required}
                ?disabled=${this.disabled} />
        `;
    }
};

if(!window.customElements.get('bs-form-input-plaintext')) 
    window.customElements.define('bs-form-input-plaintext', BsFormInputPlaintext);