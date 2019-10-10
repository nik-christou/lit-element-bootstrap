
import { LitElement, html } from 'lit-element';
import { BsNavLinkCss } from './bs-nav-link.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot.css.js';

export class BsNavLink extends LitElement {

    static get properties() {
        return {
            index: Number,
            href: String,
            target: String,
            active: {type: Boolean, reflect: true},
            disabled: {type: Boolean, reflect: true}
        };
    }

    static get styles() {
        return [
            BsContentRebootCss,
            BsNavLinkCss
        ];
    }

    render() {
        return html`
            <a href="${this.href}" .target="${this.target}">
                <slot></slot>
            </a>
        `;
    }

    constructor() {
        super();
        this.index = -1;
        this.href = '';
        this.target = '_self';
        this.active = false;
        this.disabled = false;
    }

    firstUpdated() {
        const navLink = this.shadowRoot.querySelector('a');
        navLink.addEventListener('click', event => this._handleClickEvent(event));
    }

    _handleClickEvent(event) {

        if(!this.href) {
            event.preventDefault();
            return;
        }

        if (this.disabled) {
            event.preventDefault();
            return;
        }

        const navLinkClickEvent = new CustomEvent('nav-link', {
            bubbles: true,
            composed: true,
            detail: {
                index: this.index
            }
        });

        this.dispatchEvent(navLinkClickEvent);
    }
};

if(!window.customElements.get('bs-nav-link'))
    window.customElements.define('bs-nav-link', BsNavLink);

