
import { LitElement, html } from 'lit-element';
import { BsAlertCss } from './bs-alert.css.js';

/**
 * Alert component
 *
 * @element bs-alert
 *
 * @attribute dismissable - Indicates whether or not the alert can be dismissed
 * @attribute {primary|secondary|success|info|warning|danger|light|dark} context -
 * Indicates the styling context to use
 *
 * @property {Boolean} dismissable - Indicates whether or not the alert can be dismissed. default: false
 *
 * @fires close.bs.alert - Gets fired before the dismission transition has ended
 * @fires closed.bs.alert - Gets fired after the dismission transition has ended
 *
 * @slot Slot for alert content
 * @slot heading - Slot to place alert header content
 * @slot dismiss - Slot to place content that will be used for dismiss
 *
 * @cssproperty --alert-color - The alert text color. default: user agent color
 * @cssproperty --alert-bg-color - The alert background color. default: user agent color
 * @cssproperty --alert-bd-color - The border color. default: user agent color
 * @cssproperty --alert-primary-color - The primary context text color. default: #004085
 * @cssproperty --alert-primary-bg-color - The primary context background color. default: #cce5ff
 * @cssproperty --alert-primary-bd-color - The primary context border color. default: #b8daff
 * @cssproperty --alert-secondary-color - The secondary context text color. default: #383d41
 * @cssproperty --alert-secondary-bg-color - The secondary context background color. default: #e2e3e5
 * @cssproperty --alert-secondary-bd-color - The secondary context border color. default: #d6d8db
 * @cssproperty --alert-success-color - The success context text color. default: #155724
 * @cssproperty --alert-success-bg-color - The success context background color. default: #d4edda
 * @cssproperty --alert-success-bd-color - The success context border color. default: #c3e6cb
 * @cssproperty --alert-info-color - The info context text color. default: #0c5460
 * @cssproperty --alert-info-bg-color - The info context background color. default: #d1ecf1
 * @cssproperty --alert-info-bd-color - The info context border color. default: #bee5eb
 * @cssproperty --alert-warning-color - The warning context text color. default: #856404
 * @cssproperty --alert-warning-bg-color - The warning context background color. default: #fff3cd
 * @cssproperty --alert-warning-bd-color - The warning context border color. default: #ffeeba
 * @cssproperty --alert-danger-color - The danger context text color. default: #721c24
 * @cssproperty --alert-danger-bg-color - The danger context background color. default: #f8d7da
 * @cssproperty --alert-danger-bd-color - The danger context border color. default: #f5c6cb
 * @cssproperty --alert-light-color - The light context text color. default: #818182
 * @cssproperty --alert-light-bg-color - The light context background color. default: #fefefe
 * @cssproperty --alert-light-bd-color - The light context border color. default: #fdfdfe
 * @cssproperty --alert-dark-color - The dark context text color. default: #1b1e21
 * @cssproperty --alert-dark-bg-color - The dark context background color. default: #d6d8d9
 * @cssproperty --alert-dark-bd-color - The dark context border color. default: #c6c8ca
 */
export class BsAlert extends LitElement {

    static get properties() {
        return {
            dismissable: {
                type: Boolean,
                reflect: true
            }
        };
    }

    static get styles() {
        return [
            BsAlertCss
        ];
    }

    render() {
        return html`
            <slot name="heading"></slot>
            <slot></slot>
            <slot name="dismiss"></slot>
        `;
    }

    constructor() {
        super();
        this.dismissable = false;
    }

    firstUpdated() {
        super.firstUpdated();
        this._addAriaRole();
        this.addEventListener('close.button.click', async _ => await this.dismiss());
    }

    _addAriaRole() {
        this.setAttribute('role', 'alert');
    }

    /**
     * Dismisses an alert
     *
     * @async
     * @return {Promise} A Promise which is resolved when dismissal has finished with transition.
     */
    async dismiss() {

        if(!this.dismissable) {
            return;
        }

        return new Promise(resolve => {

            const afterTransitionEnd = _ => {
                this._fireClosedEvent();
                this.removeEventListener('transitionend', afterTransitionEnd);
                resolve();
            }

            this._fireCloseEvent();
            this.addEventListener('transitionend', afterTransitionEnd);
            requestAnimationFrame(() => this.style.opacity = '0');
        });
    }

    /**
     * Schedule updates to occur just before the next frame
     */
    async performUpdate() {
        await new Promise((resolve) => requestAnimationFrame(() => resolve()));
        super.performUpdate();
    }

    _fireCloseEvent() {

        const alertCloseEvent = new CustomEvent('close.bs.alert', {
            bubbles: true,
            composed: true
        });

        this.dispatchEvent(alertCloseEvent);
    }

    _fireClosedEvent() {

        const alertClosedEvent = new CustomEvent('closed.bs.alert', {
            bubbles: true,
            composed: true
        });

        this.dispatchEvent(alertClosedEvent);
    }
};

if (!customElements.get("bs-alert"))
    customElements.define('bs-alert', BsAlert);
