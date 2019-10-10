
import { LitElement, html } from 'lit-element';
import { BsNavbarNavCss } from './bs-navbar-nav.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot.css.js';

export class BsNavbarNav extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsNavbarNavCss
        ];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }
};

if(!window.customElements.get('bs-navbar-nav'))
    window.customElements.define('bs-navbar-nav', BsNavbarNav);
