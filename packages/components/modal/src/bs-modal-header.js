
import { LitElement, html } from 'lit-element';
import { BsModalHeaderCss } from './bs-modal-header.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

import '@lit-element-bootstrap/button/bs-close-button.js';

export class BsModalHeader extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsModalHeaderCss
        ];
    }

    render() {
        return html`
            <div class="modal-header">
                <div class="modal-title">
                    <slot></slot>
                </div>
                <bs-close-button></bs-close-button>
            </div>
        `;
    }

    firstUpdated() {
        this.addEventListener('close-button-click', () => this._handleCloseEvent());
    }

    _handleCloseEvent() {

        const modalDismissEvent = new CustomEvent('bs-modal-dismiss', {
            bubbles: true,
            composed: true
        });

        this.dispatchEvent(modalDismissEvent);
    }
};

if(!window.customElements.get('bs-modal-header'))
    window.customElements.define('bs-modal-header', BsModalHeader);
