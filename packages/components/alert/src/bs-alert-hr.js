
import { LitElement, html } from 'lit-element';
import { BsAlertHrCss } from './bs-alert-hr.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot.css.js';
import { BsContentTypographyCss } from '@lit-element-bootstrap/content/bs-content-typography.css.js';

export class BsAlertHr extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsAlertHrCss
        ];
    }

    render() {
        return html`
            <hr />
        `;
    }
};

if(!window.customElements.get("bs-alert-hr"))
    window.customElements.define('bs-alert-hr', BsAlertHr);
