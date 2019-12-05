
import { LitElement, html, css } from 'lit-element';
import { BsCardTitleCss } from './css/bs-card-title.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

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
