
const defaultThemeColors = new Map([
    ['primary', '#007bff'],
    ['secondary', '#6c757d'],
    ['success', '#28a745'],
    ['info', '#17a2b8'],
    ['warning', '#ffc107'],
    ['danger', '#dc3545'],
    ['light', '#f8f9fa'],
    ['dark', '#343a40']
]);

import { LitElement, html } from 'lit-element';
import { BsButtonRebootCss } from './bs-button-reboot.js';
import { BsButtonCommonCss } from './css/bs-button-common.css.js';
import { BsButtonPrimaryCss } from './css/bs-button-primary.css.js';
import { BsButtonSecondaryCss } from './css/bs-button-secondary.css.js';
import { BsButtonSuccessCss } from './css/bs-button-success.css.js';
import { BsButtonInfoCss } from './css/bs-button-info.css.js';
import { BsButtonWarningCss } from './css/bs-button-warning.css.js';
import { BsButtonDangerCss } from './css/bs-button-danger.css.js';
import { BsButtonLightCss } from './css/bs-button-light.css.js';
import { BsButtonDarkCss } from './css/bs-button-dark.css.js';
import { BsButtonPrimaryOutlineCss } from './css/bs-button-primary-outline.css.js';
import { BsButtonSecondaryOutlineCss } from './css/bs-button-secondary-outline.css.js';
import { BsButtonSuccessOutlineCss } from './css/bs-button-success-outline.css.js';
import { BsButtonInfoOutlineCss } from './css/bs-button-info-outline.css.js';
import { BsButtonWarningOutlineCss } from './css/bs-button-warning-outline.css.js';
import { BsButtonDangerOutlineCss } from './css/bs-button-danger-outline.css.js';
import { BsButtonLightOutlineCss } from './css/bs-button-light-outline.css.js';
import { BsButtonDarkOutlineCss } from './css/bs-button-dark-outline.css.js';
import { BsButtonLinkCss } from './css/bs-button-link.css.js';
import { BsButtonBlockCss } from './css/bs-button-block.css.js';
import { BsButtonLargeCss } from './css/bs-button-large.css.js';
import { BsButtonSmallCss } from './css/bs-button-small.css.js';

export class BsButtonBase extends LitElement {

    static get properties() {
        return {
            toggle: { type: Boolean, reflect: true }, // indicates if active state can be toggled...
            active: { type: Boolean, reflect: true }, // indicates if the button is in active state
            disabled: { type: Boolean, reflect: true } // indicates if the button is in disabled state
            //dropdownToggle: { type: Boolean, reflect: true, attribute: 'dropdown-toggle' } // indicates if active state can be toggled as part of a dropdown
        };

        // dropdownToggle is used in the click event data
        // this is expected in the dropdown element in order to display the menu
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
            BsButtonPrimaryOutlineCss,
            BsButtonSecondaryOutlineCss,
            BsButtonSuccessOutlineCss,
            BsButtonInfoOutlineCss,
            BsButtonWarningOutlineCss,
            BsButtonDangerOutlineCss,
            BsButtonLightOutlineCss,
            BsButtonDarkOutlineCss,
            BsButtonLinkCss, // link css should be moved to bs-button-link
            BsButtonBlockCss,
            BsButtonLargeCss,
            BsButtonSmallCss
        ];
    }

    constructor() {
        super();
        this.active = false;
        this.toggle = false;
        this.disabled = false;
        // this.dropdownToggle = false;
    }

    /**
     * @param {Map} _updatedProperties Map of updated properties
     */
    firstUpdated(_updatedProperties) {

        const buttonElement = this.retrieveButtonElement();

        if(this.disabled) {
            this._applyDisabledState(buttonElement);
        }

        if(this.active) {
            this._applyActiveState(buttonElement);
        }

        buttonElement.addEventListener('click', _ => this._handleButtonClick());
        buttonElement.addEventListener('focusout', _ => this._handleFocusOut());

        this._setupDefaultThemeColors();
    }

    /**
     * Must return the HTMLElement that represents the button implementation
     *
     * @abstract
     * @return {HTMLElement}
     */
    retrieveButtonElement() {
        throw new Error('You have to implement method retrieveButtonElement!');
    }

    // attribute disabled is only valid for button & input elements
    // it is not valid for anchor tags

    /**
     * @param {HTMLElement} btnElement
     */
    _removeDisabledState(btnElement) {
        btnElement.classList.remove('disabled');
        btnElement.removeAttribute('disabled');
    }

    /**
     * @param {HTMLElement} btnElement
     */
    _applyDisabledState(btnElement) {
        btnElement.classList.add('disabled');
        btnElement.setAttribute('disabled', '');
    }

    /**
     * @param {HTMLElement} btnElement
     */
    _removeActiveState(btnElement) {
        btnElement.classList.remove('active');
    }

    /**
     * @param {HTMLElement} btnElement
     */
    _applyActiveState(btnElement) {
        btnElement.classList.add('active');
    }

    _setupDefaultThemeColors() {

        const hostElement = this.shadowRoot.host;

        for (let [key, value] of defaultThemeColors) {

            if(hostElement.hasAttribute(key)) {
                this._updateCssProperty(hostElement, key, value);
            }
        }
    }

    _updateCssProperty(hostElement, cssPropName, cssPropValue) {

        const cssVarName = '--'+cssPropName;

        if(!getComputedStyle(hostElement).getPropertyValue(cssVarName)) {
            hostElement.style.setProperty(cssVarName, cssPropValue);
        }
    }

    _handleFocusOut() {

        if(this.disabled) {
            return;
        }

        if(this.active /* && this.dropdownToggle */) {

            const btnElement = this.shadowRoot.querySelector('button');
            this._updateToggleableActiveState(btnElement);
        }

        const btnFocusOutEvent = new CustomEvent('bs-button-focusout', {
            bubbles: true,
            composed: true
        });

        this.dispatchEvent(btnFocusOutEvent);
    }

    _handleButtonClick() {

        if(this.disabled) {
            return;
        }

        const btnElement = this.shadowRoot.querySelector('button');
        btnElement.focus();

        this._updateToggleableActiveState(btnElement);

        const btnClickedEvent = new CustomEvent('bs-button-click', {
            bubbles: true,
            composed: true,
            detail: {
                active: this.active,
                // type: this.type, this could be used inside the form
                toggle: this.toggle
                //dropdown: this.dropdownToggle
            }
        });

        this.dispatchEvent(btnClickedEvent);
    }

    /**
     * Toggle active state.
     * Used in cases where the active state should not be lost when the
     * mouse is moved away from the button. Toggle and dropdown are examples
     *
     * @param {HTMLButtonElement} btnElement
     */
    _updateToggleableActiveState(btnElement) {

        // added the this.dropdownToggle to enable "active"
        // look and feel during the dropdown menu opened
        //
        // there is an issue: if button is part of a button-group
        // then the active state is not sticky !!!
        if(this.toggle /* || this.dropdownToggle */) {

            if(this.active) {
                this._removeActiveState(btnElement);
            } else {
                this._applyActiveState(btnElement);
            }

            this.active = !this.active;
        }
    }
};
