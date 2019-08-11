
import { LitElement, html } from 'lit-element';
import { BsContentRebootCss, BsContentTypographyCss } from '../../content';
import { BsListGroupItemCommonCss } from './bs-list-group-item-common-css';
import { BsListGroupItemActionCommonCss } from './bs-list-group-item-action-common-css';

export class BsListGroupItemActionButton extends LitElement {
    
    static get properties() {
        return {
            index: Number,
            button: {type: Boolean, reflect: true},
            reset: {type: Boolean, reflect: true},
            submit: {type: Boolean, reflect: true},
            active: {type: Boolean, reflect: true},
            disabled: {type: Boolean, reflect: true}
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsListGroupItemActionCommonCss,
            BsListGroupItemCommonCss
        ];
    }
    
    render() {
        return html`
            <button class="list-group-item list-group-item-action">
                <slot></slot>
            </button>
        `;
    }
    
    constructor() {
        super();
        this.index = 0;
        this.button = true;
        this.reset = false;
        this.submit = false;
        this.active = false;
        this.disabled = false;
    }
    
    firstUpdated() {
        const buttonElement = this.shadowRoot.querySelector('button');
        buttonElement.addEventListener('click', event => this._handleClickEvent(event));
        
        this._setActiveState(buttonElement);
        this._setButtonType(buttonElement);
    }
    
    _setActiveState(buttonElement) {
        
        if(this.disabled && !this.active) {
            buttonElement.setAttribute('disabled', '');
        }
        
        if(!this.disabled && this.active) {
            buttonElement.classList.toggle('active');
        }
    }
    
    _setButtonType(buttonElement) {
        
        if(this.button) {
            buttonElement.setAttribute('type', 'button');
        }
        
        if(this.reset) {
            buttonElement.setAttribute('type', 'reset');
        }
        
        if(this.submit) {
            buttonElement.setAttribute('type', 'submit');
        }
    }
    
    _handleClickEvent(event) {

        if (this.disabled) {
            event.preventDefault();
        }

        const listGroupItemSelectedEvent = new CustomEvent('list-group-item-selected', {
            bubbles: true,
            composed: true,
            detail: {
                index: this.index
            }
        });

        this.dispatchEvent(listGroupItemSelectedEvent);
    }
};

if(!window.customElements.get('bs-list-group-item-action-button')) window.customElements.define('bs-list-group-item-action-button', BsListGroupItemActionButton);