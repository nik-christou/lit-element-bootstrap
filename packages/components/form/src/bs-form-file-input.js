
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class BsFormFileInput extends LitElement {

    static get properties() {
        return {
            placeholder: {type: String, reflect: true}
        };
    }

    static get styles() {
        return [
            BsContentRebootCss,
            css`
                .form-control-file {
                    display: block;
                    width: 100%;
                }
            `
        ];
    }

    render() {
        return html`
            <input 
                type="file"
                class="form-control-file"
                .placeholder=${this.placeholder} />
        `;
    }

    constructor() {
        super();
        this.placeholder = '';
    }

    setFocus() {
        const inputElement = this.shadowRoot.querySelector('input');
        inputElement.focus();
    }
};

if(!window.customElements.get('bs-form-file-input'))
    window.customElements.define('bs-form-file-input', BsFormFileInput);
