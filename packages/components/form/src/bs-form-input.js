
import { LitElement, html } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';
import { BsFormInputMixin } from './bs-form-input-mixin.js';
import { BsFormControlCss } from './bs-form-control.css.js';
import { BsFormControlSizeCss } from './bs-form-control-size.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

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
                .type=${this.type}
                .value=${this.value}
                name=${ifDefined(this.name)}
                maxlength=${ifDefined(this.maxlength)}
                minlength=${ifDefined(this.minlength)}
                max=${ifDefined(this.max)}
                min=${ifDefined(this.min)}
                step=${ifDefined(this.step)}
                pattern=${ifDefined(this.pattern)}
                placeholder=${ifDefined(this.placeholder)}
                ?readonly=${this.readonly}
                ?required=${this.required}
                ?disabled=${this.disabled} />
        `;
    }
};

if(!window.customElements.get('bs-form-input'))
    window.customElements.define('bs-form-input', BsFormInput);
