
import { LitElement, html } from 'lit-element';
import { BsAlertCss } from './bs-alert.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot.css.js';

export class BsAlert extends LitElement {

    static get properties() {
        return {
            show: { type: Boolean, reflect: true },
            fade: { type: Boolean, reflect: true },
            dismissable: { type: Boolean, reflect: true }
        };
    }

    static get styles() {
        return [
            BsContentRebootCss,
            BsAlertCss
        ];
    }

    render() {
        return html`
            <slot name="heading"></slot>
            <slot name="message"></slot>
            <slot name="dismiss"></slot>
        `;
    }

    constructor() {
        super();
        this.show = false;
        this.fade = false;
        this.dismissable = false;
    }

    firstUpdated() {
        const alertElement = this.shadowRoot.host;
        alertElement.addEventListener('transitionend', () => this._afterElementTransition());
        this.addEventListener('close-button-click', () => this._handleAlertDismiss());
    }

    _afterElementTransition() {
        this._fireClosedEvent();
    }

    _handleAlertDismiss() {
        this._fireCloseEvent();
        this.show = false;
    }

    _fireClosedEvent() {

        const alertClosedEvent = new CustomEvent('closed.bs.alert', {
            bubbles: true,
            composed: true
        });

        this.dispatchEvent(alertClosedEvent);
    }

    _fireCloseEvent() {

        const alertCloseEvent = new CustomEvent('close.bs.alert', {
            bubbles: true,
            composed: true
        });

        this.dispatchEvent(alertCloseEvent);
    }
};

if (!window.customElements.get("bs-alert"))
    window.customElements.define('bs-alert', BsAlert);
