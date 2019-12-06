
import { LitElement, html } from 'lit-element';
import { BsFormLabelCss } from './css/bs-form-label.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';
import { BsContentTypographyCss } from '@lit-element-bootstrap/content';
import { BsColumnExtraSmallCss } from '@lit-element-bootstrap/layout';
import { BsColumnSmallCss } from '@lit-element-bootstrap/layout';
import { BsColumnMediumCss } from '@lit-element-bootstrap/layout';
import { BsColumnLargeCss } from '@lit-element-bootstrap/layout';
import { BsColumnExtraLargeCss } from '@lit-element-bootstrap/layout';

export class BsFormLabel extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsColumnExtraSmallCss,
            BsColumnSmallCss,
            BsColumnMediumCss,
            BsColumnLargeCss,
            BsColumnExtraLargeCss,
            BsFormLabelCss
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

        const labelClickedEvent = new CustomEvent('bs-form-label-click', {
            bubbles: true,
            composed: true
        });

        this.dispatchEvent(labelClickedEvent);
    }
};

if(!window.customElements.get('bs-form-label'))
    window.customElements.define('bs-form-label', BsFormLabel);
