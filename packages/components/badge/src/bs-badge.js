
import { LitElement, html } from 'lit-element';
import { BsBadgeCss } from './bs-badge.css.js';
import { BsBadgeRebootCss } from './bs-badge-reboot.css.js';

export class BsBadge extends LitElement {

    static get styles() {
        return [
            BsBadgeRebootCss,
            BsBadgeCss
        ];
    }
    
    render() {
        return html`
            <span class="badge">
                <slot></slot>
            </span>
        `;
    }
};

if (!window.customElements.get("bs-badge"))
    window.customElements.define('bs-badge', BsBadge);
