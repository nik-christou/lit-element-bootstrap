
import { LitElement, html } from 'lit-element';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot-css.js';

import { BsDropdownItemMixin } from './bs-dropdown-item-mixin.js';
import { BsDropdownItemCss } from './bs-dropdown-item-css.js';

export class BsDropdownItemLink extends BsDropdownItemMixin(LitElement) {
    
    static get properties() {
        return {
            index: Number,
            title: String,
            href: String,
            target: String
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsDropdownItemCss
        ];
    }
    
    render() {
        return html`
            <a href="${this.href}" .target="${this.target}" class="dropdown-item">${this.title}</a>
        `;
    }
    
    constructor() {
        super();
        this.index = 0;
        this.title = '';
        this.href = '';
        this.target = '_self';
    }
};

if (!window.customElements.get("bs-dropdown-item-link"))
    window.customElements.define('bs-dropdown-item-link', BsDropdownItemLink);