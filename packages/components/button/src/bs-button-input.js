import { LitElement, html } from "lit-element";
import { BsButtonMixin } from './bs-button-mixin.js';
import { classMap } from "lit-html/directives/class-map.js";

export class BsButtonInput extends BsButtonMixin(LitElement) {
    static get properties() {
        return {
            label: {
                type: String
            },
            toggle: {
                type: Boolean,
                reflect: true
            },
            active: {
                type: Boolean,
                reflect: true
            },
            disabled: {
                type: Boolean,
                reflect: true
            },
            dropdownToggle: {
                type: Boolean,
                reflect: true,
                attribute: "dropdown-toggle"
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
        this.active = false;
        this.toggle = false;
        this.disabled = false;
        this.dropdownToggle = false;
    }
}

if (!window.customElements.get("bs-button-input"))
    window.customElements.define("bs-button-input", BsButtonInput);
