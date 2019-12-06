
import { LitElement, html } from 'lit-element';
import { BsNavCss } from './css/bs-nav.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class BsNav extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsNavCss
        ];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }
};

if(!window.customElements.get('bs-nav'))
    window.customElements.define('bs-nav', BsNav);
