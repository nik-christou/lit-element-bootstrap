
import { LitElement, html } from 'lit-element';
import { BsBadgeCss } from './bs-badge.css.js';
import { BsBadgeLinkCss } from './bs-badge-link.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot.css.js';

export class BsBadgeLink extends LitElement {

    static get properties() {
        return {
            href: String
        };
    }

    static get styles() {
        return [
            BsContentRebootCss,
            BsBadgeCss,
            BsBadgeLinkCss
        ];
    }

    render() {
        return html`
            <a href="${this.href}" class="badge">
                <slot></slot>
            </a>
        `;
    }

    constructor() {
        super();
        this.href = '#';
    }
};

if (!window.customElements.get("bs-badge-link"))
    window.customElements.define('bs-badge-link', BsBadgeLink);
