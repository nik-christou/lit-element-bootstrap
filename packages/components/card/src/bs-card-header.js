
import { LitElement, html } from 'lit-element';
import { BsCardHeaderCss } from './bs-card-header.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot.css.js';

export class BsCardHeader extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsCardHeaderCss
        ];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }
};

if (!window.customElements.get("bs-card-header"))
    window.customElements.define('bs-card-header', BsCardHeader);

