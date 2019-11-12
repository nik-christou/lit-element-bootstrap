/**
 * Badge Link Component
 *
 * @element bs-badge-link
 *
 * @attribute href - The hyper link to point to
 * @attribute target - The context target
 * @attribute pill - Indicates if badge should be displayed as a pill
 * @attribute {primary|secondary|success|info|warning|danger|light|dark} context -
 * Indicates the styling context to use
 *
 * @property {String} href - The hyper link to point, default: ''
 * @property {String} target - The context target. default: _self
 *
 * @slot Slot for badge link content
 *
 * @cssproperty --badge-link-color - Text color, default: #007bff
 * @cssproperty --badge-link-bg-color - Background color, default: transparent
 * @cssproperty --badge-link-pd-top - Padding top, default: 0.25em
 * @cssproperty --badge-link-pd-bottom - Padding bottom, default: 0.25em
 * @cssproperty --badge-link-pd-left - Padding left, default: 0.4em
 * @cssproperty --badge-link-pd-right- Padding right, default: 0.4em
 * @cssproperty --badge-link-font-size - Font size, default: 75%
 * @cssproperty --badge-link-font-wg - Font weight, default: 700
 * @cssproperty --badge-link-line-hg - Line height, default: 1
 * @cssproperty --badge-link-text-align - Text align, default: center
 * @cssproperty --badge-link-bd-radius - Border radius, default: 0.25rem
 * @cssproperty --badge-link-pill-pd-top - Pill padding right, default: 0.6em
 * @cssproperty --badge-link-pill-pd-left - Pill padding left, default: 0.6em
 * @cssproperty --badge-link-pill-bd-radius - Pill border radius, default: 10rem
 * @cssproperty --badge-link-primary-color - Primary context text color, default: #fff
 * @cssproperty --badge-link-primary-bg-color - Primary context background color, default: #007bff
 * @cssproperty --badge-link-primary-text-decoration - Primary context text decoration, default: none
 * @cssproperty --badge-link-primary-hover-color - Primary context hover text color, default: #fff
 * @cssproperty --badge-link-primary-hover-bg-color - Primary context hover background color, default: #0062cc
 * @cssproperty --badge-link-primary-focus-color - Primary context focus text color, default: #fff
 * @cssproperty --badge-link-primary-focus-bg-color - Primary context focus background color, default: #0062cc
 * @cssproperty --badge-link-primary-link-outline - Primary context link outline, default: 0
 * @cssproperty --badge-link-primary-link-box-shadow - Primary context link box shadow, default: 0 0 0 0.2rem rgba(0, 123, 255, 0.5)
 * @cssproperty --badge-link-secondary-color - Secondary context text color, default: #fff
 * @cssproperty --badge-link-secondary-bg-color - Secondary context background color, default: #6c757d
 * @cssproperty --badge-link-secondary-text-decoration - Secondary context text decoration, default: none
 * @cssproperty --badge-link-secondary-hover-color - Secondary context hover text color, default: #fff
 * @cssproperty --badge-link-secondary-hover-bg-color - Secondary context hover background color, default: #545b62
 * @cssproperty --badge-link-secondary-focus-color - Secondary context focus text color, default: #fff
 * @cssproperty --badge-link-secondary-focus-bg-color - Secondary context focus background color, default: #545b62
 * @cssproperty --badge-link-secondary-link-outline - Secondary context link outline, default: 0
 * @cssproperty --badge-link-secondary-link-box-shadow - Secondary context link box shadow, default: 0 0 0 0.2rem rgba(108, 117, 125, 0.5)
 * @cssproperty --badge-link-success-color - Success context text color, default: #fff
 * @cssproperty --badge-link-success-bg-color - Success context background color, default: #28a745
 * @cssproperty --badge-link-success-text-decoration - Success context text decoration, default: none
 * @cssproperty --badge-link-success-hover-color - Success context hover text color, default: #fff
 * @cssproperty --badge-link-success-hover-bg-color - Success context hover background color, default: #1e7e34
 * @cssproperty --badge-link-success-focus-color - Success context focus text color, default: #fff
 * @cssproperty --badge-link-success-focus-bg-color - Success context focus background color, default: #1e7e34
 * @cssproperty --badge-link-success-link-outline - Success context link outline, default: 0
 * @cssproperty --badge-link-success-link-box-shadow - Success context link box shadow, default: 0 0 0 0.2rem rgba(40, 167, 69, 0.5)
 * @cssproperty --badge-link-info-color - Info context text color, default: #fff
 * @cssproperty --badge-link-info-bg-color - Info context background color, default: #17a2b8
 * @cssproperty --badge-link-info-text-decoration - Info context text decoration, default: none
 * @cssproperty --badge-link-info-hover-color - Info context hover text color, default: #fff
 * @cssproperty --badge-link-info-hover-bg-color - Info context hover background color, default: #117a8b
 * @cssproperty --badge-link-info-focus-color - Info context focus text color, default: #fff
 * @cssproperty --badge-link-info-focus-bg-color - Info context focus background color, default: #117a8b
 * @cssproperty --badge-link-info-link-outline - Info context link outline, default: 0
 * @cssproperty --badge-link-info-link-box-shadow - Info context link box shadow, default: 0 0 0 0.2rem rgba(23, 162, 184, 0.5)
 * @cssproperty --badge-link-warning-color - Warning context text color, default: #212529
 * @cssproperty --badge-link-warning-bg-color - Warning context background color, default: #ffc107
 * @cssproperty --badge-link-warning-text-decoration - Warning context text decoration, default: none
 * @cssproperty --badge-link-warning-hover-color - Warning context hover text color, default: #212529
 * @cssproperty --badge-link-warning-hover-bg-color - Warning context hover background color, default: #d39e00
 * @cssproperty --badge-link-warning-focus-color - Warning context focus text color, default: #212529
 * @cssproperty --badge-link-warning-focus-bg-color - Warning context focus background color, default: #d39e00
 * @cssproperty --badge-link-warning-link-outline - Warning context link outline, default: 0
 * @cssproperty --badge-link-warning-link-box-shadow - Warning context link box shadow, default: 0 0 0 0.2rem rgba(255, 193, 7, 0.5)
 * @cssproperty --badge-link-danger-color - Danger context text color, default: #fff
 * @cssproperty --badge-link-danger-bg-color - Danger context background color, default: #dc3545
 * @cssproperty --badge-link-danger-text-decoration - Danger context text decoration, default: none
 * @cssproperty --badge-link-danger-hover-color - Danger context hover text color, default: #fff
 * @cssproperty --badge-link-danger-hover-bg-color - Danger context hover background color, default: #bd2130
 * @cssproperty --badge-link-danger-focus-color - Danger context focus text color, default: #fff
 * @cssproperty --badge-link-danger-focus-bg-color - Danger context focus background color, default: #bd2130
 * @cssproperty --badge-link-danger-link-outline - Danger context link outline, default: 0
 * @cssproperty --badge-link-danger-link-box-shadow - Danger context link box shadow, default: 0 0 0 0.2rem rgba(220, 53, 69, 0.5)
 * @cssproperty --badge-link-light-color - Light context text color, default: #212529
 * @cssproperty --badge-link-light-bg-color - Light context background color, default: #f8f9fa
 * @cssproperty --badge-link-light-text-decoration - Light context text decoration, default: none
 * @cssproperty --badge-link-light-hover-color - Light context hover text color, default: #212529
 * @cssproperty --badge-link-light-hover-bg-color - Light context hover background color, default: #dae0e5
 * @cssproperty --badge-link-light-focus-color - Light context focus text color, default: #212529
 * @cssproperty --badge-link-light-focus-bg-color - Light context focus background color, default: #dae0e5
 * @cssproperty --badge-link-light-link-outline - Light context link outline, default: 0
 * @cssproperty --badge-link-light-link-box-shadow - Light context link box shadow, default: 0 0 0 0.2rem rgba(248, 249, 250, 0.5)
 * @cssproperty --badge-link-dark-color - Dark context text color, default: #fff
 * @cssproperty --badge-link-dark-bg-color - Dark context background color, default: #f8f9fa
 * @cssproperty --badge-link-dark-text-decoration - Dark context text decoration, default: none
 * @cssproperty --badge-link-dark-hover-color - Dark context hover text color, default: #fff
 * @cssproperty --badge-link-dark-hover-bg-color - Dark context hover background color, default: #1d2124
 * @cssproperty --badge-link-dark-focus-color - Dark context focus text color, default: #fff
 * @cssproperty --badge-link-dark-focus-bg-color - Dark context focus background color, default: #1d2124
 * @cssproperty --badge-link-dark-link-outline - Dark context link outline, default: 0
 * @cssproperty --badge-link-dark-link-box-shadow - Dark context link box shadow, default: 0 0 0 0.2rem rgba(52, 58, 64, 0.5)
 */
export class BsBadgeLink extends LitElement {
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
      "bs-badge-link": BsBadgeLink
    }
}