
import { LitElement, html } from 'lit-element';
import { BsModalBodyCss } from './bs-modal-body.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class BsModalBody extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsModalBodyCss
        ];
    }

    render() {
        return html`
            <div class="modal-body">
                <slot></slot>
            </div>
        `;
    }
};

if(!window.customElements.get('bs-modal-body'))
    window.customElements.define('bs-modal-body', BsModalBody);

