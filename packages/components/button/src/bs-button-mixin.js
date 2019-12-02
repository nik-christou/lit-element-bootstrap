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

        _handleFocusOut() {
            if (this.disabled) {
                return;
            }

            if (this.active && this.dropdownToggle) {
                this.active = !this.active;
            }

            this._fireFocusOutEvent();
        }

        _handleButtonClick() {
            if (this.disabled) {
                return;
            }

            const buttonElement = this.shadowRoot.querySelector(".btn");
            buttonElement.focus();

            if (this.toggle || this.dropdownToggle) {
                this.active = !this.active;
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
