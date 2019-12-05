
import { LitElement, html } from 'lit-element';
import { BsFormRowCss } from './css/bs-form-row.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class BsFormRow extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsFormRowCss
        ];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }
};

if(!window.customElements.get('bs-form-row'))
    window.customElements.define('bs-form-row', BsFormRow);
