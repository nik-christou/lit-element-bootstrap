
import { LitElement, html } from 'lit-element';
import { BsDropdownHeaderCss } from './css/bs-dropdown-header.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class BsDropdownHeader extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsDropdownHeaderCss
        ];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }
};

if (!window.customElements.get("bs-dropdown-header"))
    window.customElements.define('bs-dropdown-header', BsDropdownHeader);
