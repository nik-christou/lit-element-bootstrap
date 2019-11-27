
import { LitElement, html } from 'lit-element';
import { BsFormCheckLabelCss } from './bs-form-check-label.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';
import { BsContentTypographyCss } from '@lit-element-bootstrap/content';

export class BsFormCheckLabel extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsFormCheckLabelCss
        ];
    }

    render() {
        return html`
            <label><slot></slot></label>
        `;
    }

    firstUpdated() {
        const labelElement = this.shadowRoot.querySelector('label');
        labelElement.addEventListener('click', event => this._handleEvent(event));
    }

    _handleEvent(event) {

        event.preventDefault();

        const disabledAttribute = this.hasAttribute('disabled');

        if(disabledAttribute) {
            return;
        }

        const labelClickedEvent = new CustomEvent('bs-form-check-label-click', {
            bubbles: true,
            composed: true
        });

        this.dispatchEvent(labelClickedEvent);
    }
};

if(!window.customElements.get('bs-form-check-label'))
    window.customElements.define('bs-form-check-label', BsFormCheckLabel);
