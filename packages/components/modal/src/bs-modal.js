
import { LitElement, html } from 'lit-element';
import { BsModalCss } from './bs-modal.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot.css.js';

export class BsModal extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsModalCss
        ];
    }

    render() {
        return html`
            <div class="modal-backdrop"></div>
            <div class="modal">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <slot name="header"></slot>
                        <slot name="body"></slot>
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        `;
    }

    static get properties() {
        return {
            large: Boolean,
            small: {type: Boolean, reflect: true},
            centered: {type: Boolean, reflect: true},
            _openTransition: Boolean,
            _closeTransition: Boolean,
            opened: {type: Boolean, reflect: true},
            dismissable: {type: Boolean, reflect: true},
            backdrop: {type: Boolean, reflect: true},
            animated: {type: Boolean, reflect: true}
        };
    }

    constructor() {
        super();
        this.opened = false;
        this.centered = false;
        this.dismissable = false;
        this.backdrop = false;
        this.animated = false;
        this.large = false;
        this.small = false;
        this._openTransition = false;
        this._closeTransition = false;
    }

    firstUpdated() {

        if(!this.animated) {
            this._removeTransitions();
        }

        this.addEventListener('bs-modal-dismiss', () => this._handleDismissEvent());

        const modalBackdrop = this.shadowRoot.querySelector('.modal-backdrop');
        modalBackdrop.addEventListener('click', () => this._handleBackdropClickEvent());
        modalBackdrop.addEventListener('transitionend', () => this._handleModalBackdropTransitionEnd());
    }

    _handleDismissEvent() {
        if(this.dismissable) {
            this.close();
        }
    }

    _handleBackdropClickEvent() {
        if(this.opened) {
            this.close();
        }
    }

    _removeTransitions() {

        const modalElement = this.shadowRoot.querySelector('.modal');
        const modalDialogElement = this.shadowRoot.querySelector('.modal-dialog');
        const modalBackdropElement = this.shadowRoot.querySelector('.modal-backdrop');

        modalElement.style.transition = 'none';
        modalDialogElement.style.transition = 'none';
        modalBackdropElement.style.transition = 'none';
    }

    toggle() {

        if(this.opened) {
            this.close();
        } else {
            this.open();
        }
    }

    open() {

        this._sendModalOpenEvent();
        this._openTransition = true;

        if(this.animated) {
            this._openWithAnimation();
        } else {
            this._openWithNoAnimation();
        }
    }

    close() {

        this._sendModalCloseEvent();
        this.opened = false;

        if(this.animated) {
            this._closeWithAnimation();
        } else {
            this._closeWithNoAnimation();
        }
    }

    _closeWithAnimation() {
        this._hideModal();
    }

    _closeWithNoAnimation() {

        this._closeTransition = true;

        if(this.backdrop) {
            this._hideBackdrop();
            this._dismissBackdrop();
        }

        this._dismissModal();
        this._closeTransition = false;
        this._sendModalClosedEvent();
    }

    _openWithAnimation() {

        if(this.backdrop) {
            this._showBackdrop();
        } else {
            this._showModal();
            this.opened = true;
        }
    }

    _openWithNoAnimation() {

        if(this.backdrop) {
            this._showBackdrop();
        }

        this._showModal();
        this.opened = true;
        this._openTransition = false;
        this._sendModalOpenedEvent();
    }

    _handleModalDialogTransitionEnd() {

        if(this._openTransition) {

            this._sendModalOpenedEvent();
            this._openTransition = false;

        } else {

            this._closeTransition = true;

            if(this.backdrop) {
                this._hideBackdrop();
            } else {
                this._dismissModal();
                this._closeTransition = false;
                this._sendModalClosedEvent();
            }
        }
    }

    _handleModalBackdropTransitionEnd() {

        if(this._openTransition) {
            this._showModal();
            this.opened = true;
        }

        if(this._closeTransition) {
            this._dismissModal();
            this._dismissBackdrop();
            this._closeTransition = false;
        }
    }

    _showModal() {
        const modalElement = this.shadowRoot.querySelector('.modal');
        modalElement.style.setProperty('--bs-modal-display', 'block');
        window.getComputedStyle(modalElement).display;
        modalElement.style.opacity = '1';
    }

    _hideModal() {
        const modalElement = this.shadowRoot.querySelector('.modal');
        modalElement.style.opacity = '0';
    }

    _dismissModal() {
        const modalElement = this.shadowRoot.querySelector('.modal');
        modalElement.style.setProperty('--bs-modal-display', 'none');
    }

    _showBackdrop() {
        const modalBackdropElement = this.shadowRoot.querySelector('.modal-backdrop');
        modalBackdropElement.classList.add('show');
        modalBackdropElement.style.opacity = '0.5';
    }

    _hideBackdrop() {
        const modalBackdropElement = this.shadowRoot.querySelector('.modal-backdrop');
        modalBackdropElement.style.opacity = '0';
    }

    _dismissBackdrop() {
        const modalBackdropElement = this.shadowRoot.querySelector('.modal-backdrop');
        modalBackdropElement.classList.remove('show');
    }

    _sendModalOpenEvent() {

        const modalOpenEvent = new CustomEvent('bs.modal.open', {
            bubbles: true,
            composed: true
        });

        this.dispatchEvent(modalOpenEvent);
    }

    _sendModalOpenedEvent() {

        const modalOpenedEvent = new CustomEvent('bs.modal.opened', {
            bubbles: true,
            composed: true
        });

        this.dispatchEvent(modalOpenedEvent);
    }

    _sendModalCloseEvent() {

        const modalCloseEvent = new CustomEvent('bs.modal.close', {
            bubbles: true,
            composed: true
        });

        this.dispatchEvent(modalCloseEvent);
    }

    _sendModalClosedEvent() {

        const modalClosedEvent = new CustomEvent('bs.modal.closed', {
            bubbles: true,
            composed: true
        });

        this.dispatchEvent(modalClosedEvent);
    }
};

if(!window.customElements.get('bs-modal'))
    window.customElements.define('bs-modal', BsModal);
