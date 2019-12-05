import { LitElement, html } from "lit-element";
import { BsBadgeCss } from "./css/bs-badge.css.js";
import { BsBadgeRebootCss } from "./css/bs-badge-reboot.css.js";

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
 * @cssproperty --badge-color - Text color, default: user agent
 * @cssproperty --badge-bg-color - Background color, default: user agent
 * @cssproperty --badge-pd-top - Padding top, default: 0.25em
 * @cssproperty --badge-pd-bottom - Padding bottom, default: 0.25em
 * @cssproperty --badge-pd-left - Padding left, default: 0.4em
 * @cssproperty --badge-pd-right - Padding right, default: 0.4em
 * @cssproperty --badge-font-size - The badge font size, default: 75%
 * @cssproperty --badge-font-wg - Font weight, default: 700
 * @cssproperty --badge-line-hg - Line height, default: 1
 * @cssproperty --badge-text-align - Text align, default: center
 * @cssproperty --badge-bd-radius - Border radius, default: 0.25rem
 * @cssproperty --badge-pill-pd-top - Pill padding top, default: 0.6em
 * @cssproperty --badge-pill-pd-left - Pill padding left, default: 0.6em
 * @cssproperty --badge-pill-bd-radius - Pill border radius, default: 10rem
 * @cssproperty --badge-primary-color - Primary context text color, default: #fff
 * @cssproperty --badge-primary-bg-color - Primary context background color, default: #007bff
 * @cssproperty --badge-secondary-color - Secondary context text color, default: #fff
 * @cssproperty --badge-secondary-bg-color - Secondary context background color, default: #6c757d
 * @cssproperty --badge-success-color - Success context text color, default: #fff
 * @cssproperty --badge-success-bg-color - Success context background color, default: #28a745
 * @cssproperty --badge-info-color - Info context text color, default: #fff
 * @cssproperty --badge-info-bg-color - Info context background color, default: #17a2b8
 * @cssproperty --badge-warning-color - Warning context text color, default: #212529
 * @cssproperty --badge-warning-bg-color - Warning context background color, default: #ffc107
 * @cssproperty --badge-danger-color - Danger context text color, default: #fff
 * @cssproperty --badge-danger-bg-color - Danger context background color, default: #dc3545
 * @cssproperty --badge-light-color - Light context text color, default: #212529
 * @cssproperty --badge-light-bg-color - Light context background color, default: #f8f9fa
 * @cssproperty --badge-dark-color - Dark context text color, default: #fff
 * @cssproperty --badge-dark-bg-color - Dark context background color, default: #343a40
 */
export class BsBadge extends LitElement {
    static get styles() {
        return [BsBadgeRebootCss, BsBadgeCss];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }
}

if (!window.customElements.get("bs-badge"))
    window.customElements.define("bs-badge", BsBadge);
