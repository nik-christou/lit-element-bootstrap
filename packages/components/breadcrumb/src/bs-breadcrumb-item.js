import { LitElement, html, TemplateResult } from "lit-element";
import { BsBreadcrumbItemCss } from "./bs-breadcrumb-item.css.js";
import { BsBreadcrumbRebootCss } from "./bs-breadcrumb-reboot.css.js";

/**
 * Breadcrumb item
 *
 * @element bs-breadcrumb-item
 *
 * @attribute title - The breadcrub title
 * @attribute active - Indicates if this is the last breadcrumb item
 * @attribute href - The hyper link to point to (not applicable if last breadcrumb item)
 * @attribute target - The context target (not applicable if last breadcrumb item)
 *
 * @property {String} title - Indicates whether or not the alert can be dismissed. default: false
 * @property {String} active - Indicates if this is the last breadcrumb item. default: false
 * @property {String} href - The hyper link to point to (not applicable if last breadcrumb item). default: ''
 * @property {String} target - The context target (not applicable if last breadcrumb item). default: _self
 *
 * @cssproperty --breadcrumb-item-padding-left Left padding. default: 0.5rem
 * @cssproperty --breadcrumb-item-active-color Text color when active attribute is used. default: #6c757d
 * @cssproperty --breadcrumb-item-divider-content Divider content. default: "/"
 * @cssproperty --breadcrumb-item-divider-color Divider color. default: #6c757d
 * @cssproperty --breadcrumb-item-divider-display Divider display. default: inline-block
 * @cssproperty --breadcrumb-item-divider-padding-right Divider right padding. default: 0.3rem
 * @cssproperty --breadcrumb-item-divider-text-decoration Divider text decoration. default: none
 * @cssproperty --breadcrumb-item-link-color Link text color. default: #007bff
 * @cssproperty --breadcrumb-item-link-text-decoration Link text decoration. default: none
 * @cssproperty --breadcrumb-item-link-bg-color Link background color. default: transparent
 * @cssproperty --breadcrumb-link-item-link-hover-color Link hover text color. default: #0056b3
 * @cssproperty --breadcrumb-item-link-hover-text-decoration Link hover text decoration. default: underline
 */
export class BsBreadcrumbItem extends LitElement {
    static get properties() {
        return {
            title: {
                type: String,
                reflect: true
            },
            href: {
                type: String,
                reflect: true
            },
            target: {
                type: String,
                reflect: true
            },
            active: {
                type: Boolean,
                reflect: true
            }
        };
    }

    static get styles() {
        return [BsBreadcrumbRebootCss, BsBreadcrumbItemCss];
    }

    render() {
        return html`
            ${this._selectTemplateToLoad()}
        `;
    }

    constructor() {
        super();
        this.title = "";
        this.href = "";
        this.target = "_self";
        this.active = false;
    }

    /**
     * If the element is set as active (meaning the last breadcrumb item)
     * then the template will bu just the title. Otherwise it will be
     * an anchor link.
     *
     * @return  {TemplateResult}  the template to render
     */
    _selectTemplateToLoad() {
        if (this.active) {
            return html`
                <span>${this.title}</span>
            `;
        } else {
            return html`
                <a href="${this.href}">${this.title}</a>
            `;
        }
    }
}

if (!window.customElements.get("bs-breadcrumb-item"))
    window.customElements.define("bs-breadcrumb-item", BsBreadcrumbItem);
