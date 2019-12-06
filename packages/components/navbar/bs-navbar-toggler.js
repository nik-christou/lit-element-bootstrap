
import { LitElement, html } from 'lit-element';
import { BsNavbarTogglerCss } from './css/bs-navbar-toggler.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class BsNavbarToggler extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsNavbarTogglerCss
        ];
    }

    render() {
        return html`
            <button>
                <slot></slot>
            </button>
        `;
    }

    firstUpdated() {
        const toggleButton = this.shadowRoot.querySelector('button');
        toggleButton.addEventListener('click', event => this._handleToggleButtonClickEvent(event));
    }

    _handleToggleButtonClickEvent(event) {

        event.stopPropagation();
        event.preventDefault();

        const btnClickedEvent = new CustomEvent('bs-navbar-toggler-click', {bubbles: true, composed: true});
        this.dispatchEvent(btnClickedEvent);
    }
};

if(!window.customElements.get('bs-navbar-toggler'))
    window.customElements.define('bs-navbar-toggler', BsNavbarToggler);
