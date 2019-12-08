import { LitElement, html } from "lit-element";
import { BsButtonMixin } from './bs-button-mixin.js';
import { classMap } from "lit-html/directives/class-map.js";

export class BsButton extends BsButtonMixin(LitElement) {

    static get properties() {
        return {
            ...super.properties,
            type: {
                type: String
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
        this.type = "button";
    }
}

if (!window.customElements.get("bs-button"))
    window.customElements.define("bs-button", BsButton);
