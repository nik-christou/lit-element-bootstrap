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
 * ButtonMixin
 *
 * @mixin BsButtonMixin
 *
 * @param {*} superclass the class to mix into
 * @exports BsButtonMixin
 * @return The mixin class
 *
 * @attribute toggle - Indicates whether or not the button is in toggle state
 * @attribute active - Indicates whether or not the button is in active state
 * @attribute disabled - Indicates whether or not the button is in disable state
 * @attribute dropdown-toggle - Indicates whether or not the button is in dropdown toggle state
 * @attribute outline - Indicates whether or not the button is in outline mode
 * @attribute {primary|secondary|success|info|warning|danger|light|dark}  context -
 * Indicates the styling context to use
 *
 * @property {Boolean} toggle - Indicates whether or not the button is in toggle state. default: false
 * @property {Boolean} active - Indicates whether or not the button is in active state. default: false
 * @property {Boolean} disabled - Indicates whether or not the button is in disabled state. default: false
 * @property {Boolean} dropdownToggle - Indicates whether or not the button is in dropdown toggle state. default: false
 *
 * @fires bs-button-click - Gets fired when button has been clicked on
 * @fires bs-button-focusout - Gets fired when button loses focus
 *
 * @cssproperty --btn-text-color - the button text color
 * @cssproperty --btn-bg-color - the button background color
 * @cssproperty --btn-bd-width - the button border width - default: 1px
 * @cssproperty --btn-bd-style - the button border style - default: solid
 * @cssproperty --btn-bd-color - the button border color - default: transparent
 * @cssproperty --btn-bd-top-left-radius - the button border top left radius - default: 0.25rem
 * @cssproperty --btn-bd-top-right-radius - the button border top right radius - default: 0.25rem
 * @cssproperty --btn-bd-bottom-right-radius - the button border bottom right radius - defaut: 0.25rem
 * @cssproperty --btn-bd-bottom-left-radius - the button border bottom left radius - default 0.25rem
 * @cssproperty --btn-display - the button display - default: inline-block
 * @cssproperty --btn-font-weight - the button font weight - default: 400
 * @cssproperty --btn-text-align - the button text align - default: center
 * @cssproperty --btn-white-space - the button white space - default: nowrap
 * @cssproperty --btn-vertical-align - the button vertical align - default: middle
 * @cssproperty --btn-width - the button width
 * @cssproperty --btn-height - the button height
 * @cssproperty --btn-flex - the button flex
 * @cssproperty --btn-pd-top - the button padding top - default 0.375rem
 * @cssproperty --btn-pd-bottom - the button padding bottom - default: 0.375rem
 * @cssproperty --btn-pd-left - the button padding left - default: 0.75rem
 * @cssproperty --btn-pd-right - the button padding right - default: 0.75rem
 * @cssproperty --btn-font-size - the button font size - default: 1rem
 * @cssproperty --btn-line-height- the button line height - default: 1.5
 * @cssproperty --btn-position - the button position
 * @cssproperty --btn-mg-top - the button margin top
 * @cssproperty --btn-mg-right - the button margin right
 * @cssproperty --btn-mg-left - the button margin left
 * @cssproperty --btn-mg-bottom - the button margin bottom
 * @cssproperty --btn-display-after - the button ::after display
 * @cssproperty --btn-width-after - the button ::after width
 * @cssproperty --btn-height-after - the button ::after height
 * @cssproperty --btn-margin-left-after - the button ::after margin left
 * @cssproperty --btn-vertical-align-after - the button ::after vertical align
 * @cssproperty --btn-content-after - the button ::after content
 * @cssproperty --btn-border-top-after - the button ::after border top
 * @cssproperty --btn-border-right-after - the button ::after border right after
 * @cssproperty --btn-border-bottom-after - the button ::after border bottom
 * @cssproperty --btn-border-left-after - the button ::after border left
 * @cssproperty --btn-margin-left-empty-after the button ::after:empty margin left
 * @cssproperty --btn-display-before - the button ::before display
 * @cssproperty --btn-width-before - the button ::before width
 * @cssproperty --btn-height-before - the button ::before height
 * @cssproperty --btn-margin-left-before - the button ::before margin left
 * @cssproperty --btn-vertical-align-before - the button ::before vertical align
 * @cssproperty --btn-content-before - the button ::before content
 * @cssproperty --btn-border-top-before - the button ::before border top
 * @cssproperty --btn-border-right-before - the button ::before border right
 * @cssproperty --btn-border-bottom-before - the button ::before border bottom
 * @cssproperty --btn-border-left-before - the button ::before border left
 * @cssproperty --btn-text-color-hover - the button hover text color - default: #212529
 * @cssproperty --btn-text-decoration-hover - the button hover text decoration - default: none
 * @cssproperty --btn-z-index-hover - the button hover z-index
 * @cssproperty --btn-bd-color-hover - the button hover border color
 * @cssproperty --btn-box-shadow-hover - the button hover box shadow
 * @cssproperty --btn-bg-color-hover - the button hover background color
 * @cssproperty --btn-box-shadow-focus - the button focus box-shadow - default: 0 0 0 0.2rem rgba(0, 123, 255, 0.25)
 * @cssproperty --btn-text-color-focus - the button focus text color
 * @cssproperty --btn-z-index-focus - the button focus z-index
 * @cssproperty --btn-bg-color-focus - the button focus background color
 * @cssproperty --btn-bd-color-focus - the button focus border color
 * @cssproperty --btn-text-color-disabled - the button disabled text color
 * @cssproperty --btn-bg-color-disabled - the button disabled background color
 * @cssproperty --btn-bd-color-disabled - the button disabled border color
 * @cssproperty --btn-opacity-disabled - the button disabled opacity - default: 0.65
 * @cssproperty --btn-pointer-events-disabled - the button disabled pointer-events - default: none
 * @cssproperty --btn-text-color-active - the button active text color
 * @cssproperty --btn-bg-color-active - the button active background color
 * @cssproperty --btn-bd-color-active - the button active border color
 * @cssproperty --btn-box-shadow-active-focus the button active focus box-shadow
 * @cssproperty --btn-z-index-active the button active z-index
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

            buttonElement.addEventListener("click", event =>
                this._handleButtonClick(event)
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

        /**
         * @param {MouseEvent} event
         */
        async _handleButtonClick(event) {

            // added this to avoid page refresh
            // during tests for bs-button-link
            event.preventDefault();

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
