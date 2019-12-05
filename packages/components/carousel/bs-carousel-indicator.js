
import { LitElement } from 'lit-element';
import { BsCarouselIndicatorCss } from './css/bs-carousel-indicator.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class BsCarouselIndicator extends LitElement {

    static get properties() {
        return {
            index: Number,
            active: {type: Boolean, reflect: true}
        };
    }

    static get styles() {
        return [
            BsContentRebootCss,
            BsCarouselIndicatorCss
        ];
    }

    constructor() {
        super();
        this.index = 0;
        this.active = false;
    }

    firstUpdated() {
        this.addEventListener('click', event => this._handleClickEvent(event));
    }

    _handleClickEvent(event) {

        event.preventDefault();

        const indicatorClickEvent = new CustomEvent('bs-carousel-indicator-click', {
            bubbles: true,
            composed: true,
            detail: {
                index: this.index
            }
        });

        this.dispatchEvent(indicatorClickEvent);
    }
};

if (!window.customElements.get("bs-carousel-indicator"))
    window.customElements.define('bs-carousel-indicator', BsCarouselIndicator);
