import { LitElement, html } from "lit-element";
import { BsButtonMixin } from './bs-button-mixin.js';
import { classMap } from "lit-html/directives/class-map.js";

export class BsButton extends BsButtonMixin(LitElement) {
    static get properties() {
        return {
            type: {
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
            <button
                .type="${this.type}"
                ?disabled="${this.disabled}"
                class="btn ${classMap({ active: this.active })}">
                <slot></slot>
            </button>
        `;
    }

    constructor() {
        super();
        this.active = false;
        this.toggle = false;
        this.type = "button";
        this.disabled = false;
        this.dropdownToggle = false;
    }
}

if (!window.customElements.get("bs-button"))
    window.customElements.define("bs-button", BsButton);
