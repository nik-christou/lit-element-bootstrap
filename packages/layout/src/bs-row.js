
import { LitElement, html } from 'lit-element';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot.css.js';
import { BsRowCss } from './bs-row.css.js';

export class BsRow extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsRowCss
        ];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }
};

if(!window.customElements.get('bs-row'))
    window.customElements.define('bs-row', BsRow);
