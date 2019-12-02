import { LitElement, html } from "lit-element";
import { BsButtonMixin } from './bs-button-mixin.js';
import { classMap } from "lit-html/directives/class-map.js";

export class BsButtonLink extends BsButtonMixin(LitElement) {
    static get properties() {
        return {
            href: {
                type: String
            },
            target: {
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
        this.active = false;
        this.toggle = false;
        this.type = "button";
        this.disabled = false;
        this.dropdownToggle = false;
    }
}

if (!window.customElements.get("bs-button-link"))
    window.customElements.define("bs-button-link", BsButtonLink);
