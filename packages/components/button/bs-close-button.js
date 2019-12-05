
import { LitElement, html } from 'lit-element';
import { BsCloseButtonCss } from './bs-close-button.css.js';

export class BsCloseButton extends LitElement {

    static get styles() {
        return BsCloseButtonCss;
    }

    render() {
        return html`
            <button type="button" class="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>

        `;
    }

    firstUpdated() {
        const buttonElement = this.shadowRoot.querySelector('button');
        buttonElement.addEventListener('click', () => this._handleClick());
    }

    _handleClick() {

        const alertCloseEvent = new CustomEvent('close-button-click', {
            bubbles: true,
            composed: true
        });

        this.dispatchEvent(alertCloseEvent);
    }
};

if (!window.customElements.get("bs-close-button"))
    window.customElements.define('bs-close-button', BsCloseButton);
