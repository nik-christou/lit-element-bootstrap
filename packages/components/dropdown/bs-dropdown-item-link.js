
import { LitElement, html } from 'lit-element';
import { BsDropdownItemMixin } from './bs-dropdown-item-mixin.js';

export class BsDropdownItemLink extends BsDropdownItemMixin(LitElement) {
    
    static get properties() {
        return {
            href: String,
            target: String
        };
    }
    
    static get styles() {
        return [super.styles];
    }
    
    render() {
        return html`
            <a href="${this.href}" .target="${this.target}" class="dropdown-item">${this.title}</a>
        `;
    }
    
    constructor() {
        super();
        this.href = '';
        this.target = '_self';
    }
};

if (!window.customElements.get("bs-dropdown-item-link"))
    window.customElements.define('bs-dropdown-item-link', BsDropdownItemLink);