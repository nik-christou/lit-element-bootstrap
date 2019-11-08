import { LitElement, html } from "lit-element";
import { BsAlertHrCss } from "./bs-alert-hr.css.js";

/**
 * Alert hr component
 *
 * @element bs-alert-hr
 *
 * @attribute {primary|secondary|success|info|warning|danger|light|dark} context -
 * Indicates the styling context to use
 *
 * @cssproperty --alert-hr-bd-top-color - The hr top border color. default: rgba(0, 0, 0, 0.1)
 * @cssproperty --alert-hr-primary-bd-top-color - The hr primary context top border color. default: #9fcdff
 * @cssproperty --alert-hr-secondary-bd-top-color - The hr secondary context top border color. default: #c8cbcf
 * @cssproperty --alert-hr-success-bd-top-color - The hr success context top border color. default: #b1dfbb
 * @cssproperty --alert-hr-info-bd-top-color - The hr info context top border color. default: #abdde5
 * @cssproperty --alert-hr-warning-bd-top-color - The hr warning context top border color. default: #ffe8a1
 * @cssproperty --alert-hr-danger-bd-top-color - The hr danger context top border color. default: #f1b0b7
 * @cssproperty --alert-hr-light-bd-top-color - The hr light context top border color. default: #ececf6
 * @cssproperty --alert-hr-dark-bd-top-color - The hr dark context top border color. default: #b9bbbe
 */
export class BsAlertHr extends LitElement {
    static get styles() {
        return [BsAlertHrCss];
    }

    render() {
        return html`
            <hr />
        `;
    }
}

if (!window.customElements.get("bs-alert-hr"))
    window.customElements.define("bs-alert-hr", BsAlertHr);
