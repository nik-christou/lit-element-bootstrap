
import { LitElement, html } from 'lit-element';
import { BsInputGroupCss } from './css/bs-input-group.css.js';
import { BsInputGroupLargeCss } from './css/bs-input-group-large.css.js';
import { BsInputGroupSmallCss } from './css/bs-input-group-small.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class BsInputGroup extends LitElement {

    static get properties() {
        return {
            large: { type: Boolean, reflect: true },
            small: { type: Boolean, reflect: true }
        };
    }

    static get styles() {
        return [
            BsContentRebootCss,
            BsInputGroupCss,
            BsInputGroupLargeCss,
            BsInputGroupSmallCss
        ];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }

    constructor() {
        super();
        this.large = false;
        this.small = false;
    }

    firstUpdated() {
        this._adjustMarginOnMultipleFormControlElements();
    }

    // :slotted can only accept simple selectors and not combinators
    // since the adjucent sibling selector cannot be used, we apply css via javascript

   _adjustMarginOnMultipleFormControlElements() {

        const slotNode = this.shadowRoot.querySelector('slot');
        const slottedNodes = slotNode.assignedNodes();

        slottedNodes.forEach(slotElement => {
            this._applyCssForFormInputElement(slotElement);
            this._applyCssForFormSelectElement(slotElement);
            this._applyCssForFormTextAreaElement(slotElement);
            this._applyCssForCustomSelectElement(slotElement);
            this._applyCssForCustomFileElement(slotElement);
        });
    }

    _applyCssForFormTextAreaElement(slotElement) {

        if(this._isFormTextAreaElement(slotElement)) {

            if(this._isFormTextAreaElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-form-control-margin-left', '-1px');
            }

            if(this._isCustomSelectElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-form-control-margin-left', '-1px');
            }

            if(this._isCustomFileElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-form-control-margin-left', '-1px');
            }
        }
    }

    _applyCssForFormSelectElement(slotElement) {

        if(this._isFormSelectElement(slotElement)) {

            if(this._isFormSelectElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-form-control-margin-left', '-1px');
            }

            if(this._isCustomSelectElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-form-control-margin-left', '-1px');
            }

            if(this._isCustomFileElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-form-control-margin-left', '-1px');
            }
        }
    }

    _applyCssForFormInputElement(slotElement) {

        if(this._isFormInputElement(slotElement)) {

            if(this._isFormInputElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-form-control-margin-left', '-1px');
            }

            if(this._isCustomSelectElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-form-control-margin-left', '-1px');
            }

            if(this._isCustomFileElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-form-control-margin-left', '-1px');
            }
        }
    }

    _applyCssForCustomSelectElement(slotElement) {

        if(this._isCustomSelectElement(slotElement)) {

            if(this._isCustomSelectElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-custom-select-margin-left', '-1px');
            }

            if(this._isCustomFileElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-custom-select-margin-left', '-1px');
            }

            if(this._isFormInputElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-custom-select-margin-left', '-1px');
            }

            if(this._isFormSelectElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-custom-select-margin-left', '-1px');
            }

            if(this._isFormTextAreaElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-custom-select-margin-left', '-1px');
            }
        }
    }

    _applyCssForCustomFileElement(slotElement) {

        if(this._isCustomFileElement(slotElement)) {

            if(this._isCustomFileElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-custom-file-margin-left', '-1px');
            }

            if(this._isCustomSelectElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-custom-file-margin-left', '-1px');
            }

            if(this._isFormInputElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-custom-file-margin-left', '-1px');
            }

            if(this._isFormSelectElement(slotElement.previousElementSibling)) {
                slotElement.style.setProperty('--bs-custom-file-margin-left', '-1px');
            }

            if(this._isFormTextAreaElement(slotElement.previousElementSibling)) {
                 slotElement.style.setProperty('--bs-custom-file-margin-left', '-1px');
            }
        }
    }

    _isFormSelectElement(element) {
        if(element) {
            return element.nodeType === Node.ELEMENT_NODE
                    && element.localName === 'bs-form-select';
        }
    }

    _isFormInputElement(element) {
        if(element) {
            return element.nodeType === Node.ELEMENT_NODE
                    && element.localName === 'bs-form-input';
        }
    }

    _isFormTextAreaElement(element) {
        if(element) {
            return element.nodeType === Node.ELEMENT_NODE
                    && element.localName === 'bs-form-textarea';
        }
    }

    _isCustomFileElement(element) {
        if(element) {
            return element.nodeType === Node.ELEMENT_NODE
                    && element.localName === 'bs-custom-file';
        }
    }

    _isCustomSelectElement(element) {
        if(element) {
            return element.nodeType === Node.ELEMENT_NODE
                    && element.localName === 'bs-custom-select';
        }
    }
};

if(!window.customElements.get('bs-input-group'))
    window.customElements.define('bs-input-group', BsInputGroup);
