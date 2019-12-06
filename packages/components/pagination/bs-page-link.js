
import { LitElement, html } from 'lit-element';
import { BsPageLinkCss } from './css/bs-page-link.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class BsPageLink extends LitElement {

    static get properties() {
        return {
            href: String,
            target: String,
            disabled: {type: Boolean, reflect: true}
        };
    }

    static get styles() {
        return [
            BsContentRebootCss,
            BsPageLinkCss
        ];
    }

    render() {
        return html`
            <a href="${this.href}" .target="${this.target}"><slot></slot></a>
        `;
    }

    constructor() {
        super();
        this.href = '';
        this.target = '_self';
        this.disabled = false;
    }
};

if(!window.customElements.get('bs-page-link'))
    window.customElements.define('bs-page-link', BsPageLink);
