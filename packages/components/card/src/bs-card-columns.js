
import { LitElement, html } from 'lit-element';
import { BsCardColumnsCss } from './bs-card-columns.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class BsCardColumns extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsCardColumnsCss
        ];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }
};

if (!window.customElements.get("bs-card-columns"))
    window.customElements.define('bs-card-columns', BsCardColumns);
