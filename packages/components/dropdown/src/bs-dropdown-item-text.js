
import { LitElement, html } from 'lit-element';
import { BsDropdownItemTextCss } from './bs-dropdown-item-text.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class BsDropdownItemText extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsDropdownItemTextCss
        ];
    }

    render() {
        return html`
            <span class="dropdown-item-text">
                <slot></slot>
            </span>
        `;
    }
};

if (!window.customElements.get("bs-dropdown-item-text"))
    window.customElements.define('bs-dropdown-item-text', BsDropdownItemText);
