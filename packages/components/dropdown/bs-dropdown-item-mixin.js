
import { BsDropdownItemCss } from './css/bs-dropdown-item.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

const BsDropdownItemMixin = (superClass) => class extends superClass {

    static get properties() {
        return {
            title: String,
            index: Number,
            active: {type: Boolean, reflect: true},
            disabled: {type: Boolean, reflect: true}
        };
    }

    static get styles() {
        return [
            BsContentRebootCss,
            BsDropdownItemCss
        ];
    }

    constructor() {
        super();
        this.index = 0;
        this.title = '';
        this.active = false;
        this.disabled = false;
    }

    firstUpdated() {
        const buttonElement = this._retrieveButtonElement();
        buttonElement.addEventListener('mousedown', _ => this._handleButtonClick());
    }

    toggleHover() {
        const buttonElement = this._retrieveButtonElement();
        buttonElement.classList.toggle('hover');
    }

    isHover() {
        const buttonElement = this._retrieveButtonElement();
        return buttonElement.classList.contains('hover');
    }

    _retrieveButtonElement() {

        const linkElement = this.shadowRoot.querySelector('a.dropdown-item');
        const buttonElement = this.shadowRoot.querySelector('button.dropdown-item');

        if(linkElement) {
            return linkElement;
        }

        if(buttonElement) {
            return buttonElement;
        }
    }

    _applyButtonActivateState(btnElement) {

        if(this.disabled && !this.active) {
            btnElement.classList.toggle('disabled');
        }

        if(!this.disabled && this.active) {
            btnElement.classList.toggle('active');
        }
    }

    _handleButtonClick() {

        if(!this.disabled) {

            const btnClickedEvent = new CustomEvent('bs-dropdown-item-click', {
                bubbles: true,
                composed: true,
                detail: {
                    index: this.index
                }
            });

            this.dispatchEvent(btnClickedEvent);
        }
    }
};

export { BsDropdownItemMixin };
