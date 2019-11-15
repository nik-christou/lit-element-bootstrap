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
    static get properties(): {
        title: {
            type: StringConstructor;
            reflect: boolean;
        };
        href: {
            type: StringConstructor;
            reflect: boolean;
        };
        target: {
            type: StringConstructor;
            reflect: boolean;
        };
        active: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    static get styles(): import("lit-element").CSSResult[];
    render(): TemplateResult;
    href: string;
    target: string;
    active: boolean;
    /**
     * If the element is set as active (meaning the last breadcrumb item)
     * then the template will bu just the title. Otherwise it will be
     * an anchor link.
     *
     * @return  {TemplateResult}  the template to render
     */
    _selectTemplateToLoad(): TemplateResult;
}
import { LitElement } from "lit-element";
import { TemplateResult } from "lit-element";

declare global {
    interface HTMLElementTagNameMap {
      "bs-breadcrumb-item": BsBreadcrumbItem
    }
}
