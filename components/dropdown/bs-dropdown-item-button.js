
import { LitElement, html } from 'lit-element';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot-css.js';

import { BsDropdownItemCss } from './bs-dropdown-item-css.js';
import { BsDropdownItemMixin } from './bs-dropdown-item-mixin.js';

export class BsDropdownItemButton extends BsDropdownItemMixin(LitElement) {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsDropdownItemCss
        ];
    }
    
    render() {
        return html`
            <button class="dropdown-item" type="button">${this.title}</button>
        `;
    }
};

if (!window.customElements.get("bs-dropdown-item-button"))  
    window.customElements.define('bs-dropdown-item-button', BsDropdownItemButton);