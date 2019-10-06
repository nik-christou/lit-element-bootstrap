
import { LitElement, html } from 'lit-element';
import { BsAlertDismissCss } from './bs-alert-dismiss.css.js';

import '@lit-element-bootstrap/button/bs-close-button.js';

export class BsAlertDismiss extends LitElement {

    static get styles() {
        return BsAlertDismissCss;
    }

    render() {
        return html`
            <bs-close-button class="dismiss-button"></bs-close-button>
        `;
    }
};

if(!window.customElements.get("bs-alert-dismiss"))
    window.customElements.define('bs-alert-dismiss', BsAlertDismiss);
