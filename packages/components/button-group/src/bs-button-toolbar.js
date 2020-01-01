import { LitElement, html } from "lit-element";
import { BsButtonToolbarCss } from "./bs-button-toolbar.css.js";
import { BsButtonGroupRebootCss } from "./bs-button-group-reboot.css.js";

export class BsButtonToolbar extends LitElement {
    static get styles() {
        return [BsButtonGroupRebootCss, BsButtonToolbarCss];
    }

    render() {
        return html`
            <slot></slot>
        `;
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
     * Adds an arial role attribute with value of 'toolbar'
     *
     * @return  {void}
     */
    _addAriaRole() {
        this.setAttribute("role", "toolbar");
    }
}

if (!window.customElements.get("bs-button-toolbar"))
    window.customElements.define("bs-button-toolbar", BsButtonToolbar);
