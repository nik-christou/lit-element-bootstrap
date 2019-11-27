
import { LitElement, html } from 'lit-element';
import { BsCarouselCaptionCss } from './bs-carousel-caption.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class BsCarouselCaption extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsCarouselCaptionCss
        ];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }
};

if (!window.customElements.get("bs-carousel-caption"))
    window.customElements.define('bs-carousel-caption', BsCarouselCaption);
