/**
 * Badge Component
 *
 * @element bs-badge
 *
 * @attribute pill - Indicates if badge should be displayed as a pill
 * @attribute {primary|secondary|success|info|warning|danger|light|dark} context -
 * Indicates the styling context to use
 *
 * @slot Slot for badge content
 *
 * @cssproperty --badge-color - The badge text color, default: user agent
 * @cssproperty --badge-bg-color - The badge background color, default: user agent
 * @cssproperty --badge-pd-top - The badge padding top, default: 0.25em
 * @cssproperty --badge-pd-bottom - The badge padding bottom, default: 0.25em
 * @cssproperty --badge-pd-left - The badge padding left, default: 0.4em
 * @cssproperty --badge-pd-right- The badge padding right, default: 0.4em
 * @cssproperty --badge-font-size - The badge font size, default: 75%
 * @cssproperty --badge-font-wg - The badge font weight, default: 700
 * @cssproperty --badge-line-hg - The badge line height, default: 1
 * @cssproperty --badge-text-align - The badge text align, default: center
 * @cssproperty --badge-bd-radius - The badge border radius, default: 0.25rem
 * @cssproperty --badge-pill-pd-top - The badge pill padding top, default: 0.6em
 * @cssproperty --badge-pill-pd-left - The badge pill padding left, default: 0.6em
 * @cssproperty --badge-pill-bd-radius - The badge pill border radius, default: 10rem
 * @cssproperty --badge-primary-color - The badge primary context text color, default: #fff
 * @cssproperty --badge-primary-bg-color - The badge primary context background color, default: #007bff
 * @cssproperty --badge-secondary-color - The badge secondary context text color, default: #fff
 * @cssproperty --badge-secondary-bg-color - The badge secondary context background color, default: #6c757d
 * @cssproperty --badge-success-color - The badge success context text color, default: #fff
 * @cssproperty --badge-success-bg-color - The badge success context background color, default: #28a745
 * @cssproperty --badge-info-color - The badge info context text color, default: #fff
 * @cssproperty --badge-info-bg-color - The badge info context background color, default: #17a2b8
 * @cssproperty --badge-warning-color - The badge warning context text color, default: #212529
 * @cssproperty --badge-warning-bg-color - The badge warning context background color, default: #ffc107
 * @cssproperty --badge-danger-color - The badge danger context text color, default: #fff
 * @cssproperty --badge-danger-bg-color - The badge danger context background color, default: #dc3545
 * @cssproperty --badge-light-color - The badge light context text color, default: #212529
 * @cssproperty --badge-light-bg-color - The badge light context background color, default: #f8f9fa
 * @cssproperty --badge-dark-color - The badge dark context text color, default: #fff
 * @cssproperty --badge-dark-bg-color - The badge dark context background color, default: #343a40
 */
export class BsBadge extends LitElement {
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
}
import { LitElement } from "lit-element";

declare global {
    interface HTMLElementTagNameMap {
      "bs-badge": BsBadge
    }
}