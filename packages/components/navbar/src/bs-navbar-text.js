
import { LitElement, html } from 'lit-element';
import { BsNavbarTextCss } from './bs-navbar-text.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class BsNavbarText extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsNavbarTextCss
        ];
    }

    render() {
        return html`
            <span><slot></slot></span>
        `;
    }
};

if(!window.customElements.get('bs-navbar-text'))
    window.customElements.define('bs-navbar-text', BsNavbarText);
