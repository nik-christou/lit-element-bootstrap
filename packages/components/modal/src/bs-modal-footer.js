
import { LitElement, html } from 'lit-element';
import { BsModalFooterCss } from './bs-modal-footer.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class BsModalFooter extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsModalFooterCss
        ];
    }

    render() {
        return html`
            <div class="modal-footer">
                <slot></slot>
            </div>
        `;
    }
};

if(!window.customElements.get('bs-modal-footer'))
    window.customElements.define('bs-modal-footer', BsModalFooter);

