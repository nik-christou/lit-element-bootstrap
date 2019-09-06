
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot-css.js';

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
            css`
                :host([active]) {
                    color: #6c757d;
                }
            
                :host {
                    padding-left: var(--bs-breadcrumb-item-padding-left);
                }
            
                :host::before {
                    display: var(--bs-breadcrumb-item-display);
                    padding-right: var(--bs-breadcrumb-item-padding-right);
                    color: var(--bs-breadcrumb-item-color);
                    text-decoration: var(--bs-breadcrumb-item-text-decoration);
                    content: var(--bs-breadcrumb-item-divider);
                }
            `
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