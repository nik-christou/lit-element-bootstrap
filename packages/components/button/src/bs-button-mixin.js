import { BsButtonRebootCss } from "./css/bs-button-reboot.js";
import { BsButtonCommonCss } from "./css/bs-button-common.css.js";
import { BsButtonPrimaryCss } from "./css/bs-button-primary.css.js";
import { BsButtonSecondaryCss } from "./css/bs-button-secondary.css.js";
import { BsButtonSuccessCss } from "./css/bs-button-success.css.js";
import { BsButtonInfoCss } from "./css/bs-button-info.css.js";
import { BsButtonWarningCss } from "./css/bs-button-warning.css.js";
import { BsButtonDangerCss } from "./css/bs-button-danger.css.js";
import { BsButtonLightCss } from "./css/bs-button-light.css.js";
import { BsButtonDarkCss } from "./css/bs-button-dark.css.js";
import { BsButtonBlockCss } from "./css/bs-button-block.css.js";
import { BsButtonLinkCss } from "./css/bs-button-link.css.js";
import { BsButtonSizeCss } from "./css/bs-button-size.css.js";

/**
 * `BsButtonMixin`: class mixin for buttons
 *
 * @exports BsButtonMixin
 * @param {*} superclass the class to mix into
 * @return The mixin class
 * @mixin BsButtonMixin
 */
export const BsButtonMixin = superclass =>
    /**
     * Class mixin for button elements
     *
     * @mixin
     */
    class extends superclass {

        static get properties() {
            return {
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

        static get styles() {
            return [
                BsButtonRebootCss,
                BsButtonCommonCss,
                BsButtonPrimaryCss,
                BsButtonSecondaryCss,
                BsButtonSuccessCss,
                BsButtonInfoCss,
                BsButtonWarningCss,
                BsButtonDangerCss,
                BsButtonLightCss,
                BsButtonDarkCss,
                BsButtonLinkCss,
                BsButtonBlockCss,
                BsButtonSizeCss
            ];
        }

        constructor(...args) {
            super(...args);
            this.active = false;
            this.toggle = false;
            this.disabled = false;
            this.dropdownToggle = false;
            this._addAriaRole();
        }

        /**
         * @param {Map} _updatedProperties
         */
        firstUpdated(_updatedProperties) {

            const buttonElement = this.shadowRoot.querySelector(".btn");

            buttonElement.addEventListener("click", _ =>
                this._handleButtonClick()
            );
            buttonElement.addEventListener("focusout", _ =>
                this._handleFocusOut()
            );
        }

        /**
         * @param {Map} _changedProperties
         */
        updated(_changedProperties) {

            if(_changedProperties.has("active")) {
                this._toggleAriaPressedState();
            }

            if(_changedProperties.has("disabled")) {
                this._toggleAriaDisabledState();
            }
        }

        async activate() {
            this.active = true;
            await this.updateComplete;
        }

        async deactivate() {
            this.active = false;
            await this.updateComplete;
        }

        async disable() {
            this.disabled = true;
            await this.updateComplete;
        }

        async enable() {
            this.disabled = false;
            await this.updateComplete;
        }

        _addAriaRole() {
            this.setAttribute("role", "button");
        }

        _toggleAriaDisabledState() {

            if(this.disabled) {
                this.setAttribute("tabindex", "-1");
                this.setAttribute("aria-disabled", "true");
            } else {
                this.removeAttribute("tabindex");
                this.removeAttribute("aria-disabled");
            }
        }

        _toggleAriaPressedState() {

            if(this.active) {
                this.setAttribute("aria-pressed", "true");
            } else {
                this.removeAttribute("aria-pressed");
            }
        }

        async _handleFocusOut() {

            if (this.disabled) {
                return;
            }

            if (this.active && this.dropdownToggle) {

                this.active = !this.active;
                await this.updateComplete;
            }

            this._fireFocusOutEvent();
        }

        async _handleButtonClick() {

            if (this.disabled) {
                return;
            }

            const buttonElement = this.shadowRoot.querySelector(".btn");
            buttonElement.focus();

            if (this.toggle || this.dropdownToggle) {

                this.active = !this.active;
                await this.updateComplete;
            }

            this._fireButtonClickEvent();
        }

        _fireFocusOutEvent() {

            const btnFocusOutEvent = new CustomEvent("bs-button-focusout", {
                bubbles: true,
                composed: true
            });

            this.dispatchEvent(btnFocusOutEvent);
        }

        _fireButtonClickEvent() {

            const btnClickedEvent = new CustomEvent("bs-button-click", {
                bubbles: true,
                composed: true,
                detail: {
                    active: this.active,
                    toggle: this.toggle,
                    dropdown: this.dropdownToggle
                }
            });

            this.dispatchEvent(btnClickedEvent);
        }
    };
