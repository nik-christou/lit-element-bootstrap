
import { LitElement, html } from 'lit-element';
import { BsNavItemCss } from './bs-nav-item.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot.css.js';

export class BsNavItem extends LitElement {

    static get properties() {
        return {
            show: { type: Boolean, reflect: true }
        };
    }

    static get styles() {
        return [
            BsContentRebootCss,
            BsNavItemCss
        ];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }

    constructor() {
        super();
        this.show = false;
    }

    firstUpdated() {
        this.addEventListener('bs-button-click', () => this._handleDropdownToggleClick());
        this.addEventListener('bs-button-focusout', () => this._handleDropdownToggleFocusOut());
    }

    _handleDropdownToggleClick() {

        const navParentElement = this.parentElement;

        if(navParentElement.hasAttribute('pills')) {
            this.show = !this.show;
        }
    }

    _handleDropdownToggleFocusOut() {

        const navParentElement = this.parentElement;

        if(navParentElement.hasAttribute('pills')) {
            if(this.show) {
                this.show = !this.show;
            }
        }
    }
};

if(!window.customElements.get('bs-nav-item'))
    window.customElements.define('bs-nav-item', BsNavItem);

