
import { LitElement, html } from 'lit-element';
import { BsAlertDismissCss } from './bs-alert-dismiss.css.js';

/**
 * Alert dismiss component
 *
 * @element bs-alert-dismiss
 *
 * @fires close.button.click - Fired when the button is clicked
 */
export class BsAlertDismiss extends LitElement {

    static get styles() {
        return BsAlertDismissCss;
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
        buttonElement.addEventListener('click', _ => this._handleClick());
    }

    _handleClick() {

        const closeButtonClickEvent = new CustomEvent('close.button.click', {
            bubbles: true,
            composed: true
        });

        this.dispatchEvent(closeButtonClickEvent);
    }
};

if(!window.customElements.get("bs-alert-dismiss"))
    window.customElements.define('bs-alert-dismiss', BsAlertDismiss);
