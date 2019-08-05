
import { LitElement, html } from 'lit-element';
import { BsBadgeCss } from './bs-badge-css';
import { BsContentRebootCss } from '../../content/bs-content-reboot-css';

export class BsBadge extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
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

if (!window.customElements.get("bs-badge")) window.customElements.define('bs-badge', BsBadge);