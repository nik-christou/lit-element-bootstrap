
import { LitElement, html } from 'lit-element';
import { BsDropdownItemMixin } from './bs-dropdown-item-mixin.js';

export class BsDropdownItemButton extends BsDropdownItemMixin(LitElement) {
    
    static get styles() {
        return [super.styles];
    }
    
    render() {
        return html`
            <button class="dropdown-item" type="button">${this.title}</button>
        `;
    }
};

if (!window.customElements.get("bs-dropdown-item-button"))  
    window.customElements.define('bs-dropdown-item-button', BsDropdownItemButton);