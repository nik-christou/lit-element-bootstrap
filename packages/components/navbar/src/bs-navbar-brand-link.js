
import { LitElement, html } from 'lit-element';
import { BsNavbarBrandLinkCss } from './bs-navbar-brand-link.css.js';
import { BsSpacingCss } from '@lit-element-bootstrap/utilities/bs-spacing.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot.css.js';
import { BsContentTypographyCss } from '@lit-element-bootstrap/content/bs-content-typography.css.js';

export class BsNavbarBrandLink extends LitElement {

    static get properties() {
        return {
            href: String,
            target: String
        };
    }

    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsSpacingCss,
            BsNavbarBrandLinkCss
        ];
    }

    render() {
        return html`
            <a href="${this.href}" .target="${this.target}">
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

if(!window.customElements.get('bs-navbar-brand-link'))
    window.customElements.define('bs-navbar-brand-link', BsNavbarBrandLink);
