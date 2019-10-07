
import { LitElement, html } from 'lit-element';
import { BsBreadcrumbItemCss } from './bs-breadcrumb-item.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot.css.js';

export class BsBreadcrumbItem extends LitElement {

    static get properties() {
        return {
            title: String,
            href: String,
            active: Boolean
        };
    }

    static get styles() {
        return [
            BsContentRebootCss,
            BsBreadcrumbItemCss
        ];
    }

    render() {
        return html`
            ${this._selectTemplateToLoad()}
        `;
    }

    constructor() {
        super();
        this.href = '';
        this.title = '';
        this.active = false;
    }

    _selectTemplateToLoad() {

        if (this.active) {
            return html`${this.title}`;
        } else {
            return html`<a href="${this.href}">${this.title}</a>`;
        }
    }
};

if (!window.customElements.get("bs-breadcrumb-item"))
    window.customElements.define('bs-breadcrumb-item', BsBreadcrumbItem);
