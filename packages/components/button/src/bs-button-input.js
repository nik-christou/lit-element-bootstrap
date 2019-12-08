import { LitElement, html } from "lit-element";
import { BsButtonMixin } from './bs-button-mixin.js';
import { classMap } from "lit-html/directives/class-map.js";

export class BsButtonInput extends BsButtonMixin(LitElement) {

    static get properties() {
        return {
            ...super.properties,
            label: {
                type: String
            }
        };
    }

    render() {
        return html`
            <input
                type="button"
                value="${this.label}"
                ?disabled="${this.disabled}"
                class="btn ${classMap({ active: this.active })}"
            />
        `;
    }

    constructor() {
        super();
        this.label = "";
    }
}

if (!window.customElements.get("bs-button-input"))
    window.customElements.define("bs-button-input", BsButtonInput);
