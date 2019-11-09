/**
 * Alert link component
 *
 * @element bs-alert-link
 *
 * @attribute href - The hyper link to point to
 * @attribute target - The context target
 * @attribute {primary|secondary|success|info|warning|danger|light|dark} context -
 * Indicates the styling context to use
 *
 * @property {String} href - The hyper link to point to
 * @property {String} target - The context target. default: _self
 *
 * @slot Slot for alert link content
 *
 * @cssproperty --alert-link-color - The link color. default: #007bff
 * @cssproperty --alert-link-font-weight - The link font weight. default 700
 * @cssproperty --alert-link-text-decoration - The link text decoration. default: none
 * @cssproperty --alert-link-bg-color - The link background color. default: transparent
 * @cssproperty --alert-link-hover-color - The link hover color. default: #0056b3
 * @cssproperty --alert-link-hover-text-decoration - The link hover text decoration. default: underline
 * @cssproperty --alert-link-primary-color - The primary context link color. defaul: #002752
 * @cssproperty --alert-link-secondary-color - The secondary context link color. default: #202326
 * @cssproperty --alert-link-success-color - The success context link color. default: #0b2e13
 * @cssproperty --alert-link-info-color - The info context link color. default: #062c33
 * @cssproperty --alert-link-warning-color - The warning context link color, default: #533f03
 * @cssproperty --alert-link-danger-color - The danger context link color. default: #491217
 * @cssproperty --alert-link-light-color - The light context link color. default: #686868
 * @cssproperty --alert-link-dark-color - The dark context link color. default: #040505
 */
export class BsAlertLink extends LitElement {
    static get properties(): {
        href: {
            type: StringConstructor;
            reflect: boolean;
        };
        target: {
            type: StringConstructor;
            reflect: boolean;
        };
    };
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
    href: string;
    target: string;
}
import { LitElement } from "lit-element";

declare global {
    interface HTMLElementTagNameMap {
      "bs-alert-link": BsAlertLink
    }
}