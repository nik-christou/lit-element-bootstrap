
import { LitElement, html } from 'lit-element';
import { BsDropdownDividerCss } from './bs-dropdown-divider.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class BsDropdownDivider extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsDropdownDividerCss
        ];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }
};

if (!window.customElements.get("bs-dropdown-divider"))
    window.customElements.define('bs-dropdown-divider', BsDropdownDivider);
