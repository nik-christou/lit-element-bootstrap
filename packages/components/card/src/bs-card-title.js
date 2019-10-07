
import { LitElement, html, css } from 'lit-element';
import { BsCardTitleCss } from './bs-card-title.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot.css.js';

export class BsCardTitle extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsCardTitleCss
        ];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }
};

if (!window.customElements.get("bs-card-title"))
    window.customElements.define('bs-card-title', BsCardTitle);
