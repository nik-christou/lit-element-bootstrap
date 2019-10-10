
import { LitElement, html } from 'lit-element';
import { BsNavbarLinkCss } from './bs-navbar-link.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot.css.js';

export class BsNavbarLink extends LitElement {

    static get properties() {
        return {
            href: String,
            target: String
        };
    }

    static get styles() {
        return [
            BsContentRebootCss,
            BsNavbarLinkCss
        ];
    }

    render() {
        return html`
            <a href="${this.target}" .target="${this.target}">
                <slot></slot>
            </a>
        `;
    }

    constructor() {
        super();
        this.href = '';
        this.target = '_self';
    }
};

if(!window.customElements.get('bs-navbar-link'))
    window.customElements.define('bs-navbar-link', BsNavbarLink);
