
import { LitElement, html } from 'lit-element';
import { BsCarouselItemCss } from './bs-carousel-item.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot.css.js';

export class BsCarouselItem extends LitElement {

    static get properties() {
        return {
            next: { type: Boolean, reflect: true },
            prev: { type: Boolean, reflect: true },
            fade: { type: Boolean, reflect: true },
            active: { type: Boolean, reflect: true }
        };
    }

    static get styles() {
        return [
            BsContentRebootCss,
            BsCarouselItemCss
        ];
    }

    render() {
        return html`
            <slot></slot>
            <slot name="caption"></slot>
        `;
    }

    constructor() {
        super();
        this.next = false;
        this.prev = false;
        this.fade = false;
        this.active = false;
    }
};

if (!window.customElements.get("bs-carousel-item"))
    window.customElements.define('bs-carousel-item', BsCarouselItem);
