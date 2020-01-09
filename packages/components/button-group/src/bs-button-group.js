import { LitElement, html } from "lit-element";
import { BsButtonGroupCss } from "./bs-button-group.css.js";
import { BsButtonGroupSizeCss } from "./bs-button-group-size.css.js";
import { BsButtonGroupDirectionCss } from "./bs-button-group-direction.css.js";
import { BsButtonGroupRebootCss } from "./bs-button-group-reboot.css.js";

export class BsButtonGroup extends LitElement {
    static get properties() {
        return {
            direction: { type: String, reflect: true }
        };
    }

    static get styles() {
        return [
            BsButtonGroupRebootCss,
            BsButtonGroupCss,
            BsButtonGroupSizeCss,
            BsButtonGroupDirectionCss
        ];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }

    constructor() {
        super();
        this.direction = "horizontal";
    }

    /**
     * The aria role is added to the host element
     *
     * @param   {Map}  _updatedProperties  the Map with updated properties
     * @return  {void}
     */
    firstUpdated(_updatedProperties) {
        super.firstUpdated(_updatedProperties);
        this._addAriaRole();
    }

    /**
     * Adds an arial role attribute with value of 'group'
     *
     * @return  {void}
     */
    _addAriaRole() {
        this.setAttribute("role", "group");
    }
}

if (!window.customElements.get("bs-button-group"))
    window.customElements.define("bs-button-group", BsButtonGroup);
