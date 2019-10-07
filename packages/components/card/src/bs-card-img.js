
import { LitElement, html, css } from 'lit-element';
import { BsCardImgCss } from './bs-card-img.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot.css.js';

export class BsCardImg extends LitElement {

    static get properties() {
        return {
            position: String
        };
    }

    static get styles() {
        return [
            BsContentRebootCss,
            BsCardImgCss
        ];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }
};

if (!window.customElements.get("bs-card-img"))
    window.customElements.define('bs-card-img', BsCardImg);
