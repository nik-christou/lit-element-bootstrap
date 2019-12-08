import { LitElement, html } from "lit-element";
import { BsButtonMixin } from './bs-button-mixin.js';
import { classMap } from "lit-html/directives/class-map.js";

export class BsButtonLink extends BsButtonMixin(LitElement) {

    static get properties() {
        return {
            ...super.properties,
            href: {
                type: String
            },
            target: {
                type: String
            }
        };
    }

    render() {
        return html`
            <a
                href="${this.href}"
                .target="${this.target}"
                class="btn ${classMap({
                    active: this.active,
                    disabled: this.disabled
                })}">
                <slot></slot>
            </a>
        `;
    }

    constructor() {
        super();
        this.href = "";
        this.target = "_self";
    }
}

if (!window.customElements.get("bs-button-link"))
    window.customElements.define("bs-button-link", BsButtonLink);
