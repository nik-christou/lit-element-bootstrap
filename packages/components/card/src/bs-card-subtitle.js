
import { LitElement, html } from 'lit-element';
import { BsCardSubtitleCss } from './bs-card-subtitle.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot.css.js';

export class BsCardSubtitle extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsCardSubtitleCss
        ];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }
};

if (!window.customElements.get("bs-card-subtitle"))
    window.customElements.define('bs-card-subtitle', BsCardSubtitle);


