
import { LitElement, html } from 'lit-element';
import { BsBadgeCss } from './bs-badge.css.js';
import { BsBadgeLinkCss } from './bs-badge-link.css.js';
import { BsBadgeRebootCss } from './bs-badge-reboot.css.js';

export class BsBadgeLink extends LitElement {

    static get properties() {
        return {
            href: {
                type: String,
                reflect: true
            },
            target: {
                type: String,
                reflect: true
            }
        };
    }

    static get styles() {
        return [
            BsBadgeRebootCss,
            BsBadgeCss,
            BsBadgeLinkCss
        ];
    }

    render() {
        return html`
            <a href="${this.href}" .target="${this.target}" class="badge">
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

if (!window.customElements.get("bs-badge-link"))
    window.customElements.define('bs-badge-link', BsBadgeLink);
