
import { LitElement, html } from 'lit-element';
import { BsCarouselControlPrevCss } from './bs-carousel-control-prev.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class BsCarouselControlPrev extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsCarouselControlPrevCss
        ];
    }

    render() {
        return html`
            <a class="carousel-control-prev">
                <span class="icon"></span>
            </a>
        `;
    }

    firstUpdated() {
        const prevLink = this.shadowRoot.querySelector('a.carousel-control-prev');
        prevLink.addEventListener('click', event => this._handleClickEvent(event));
    }

    _handleClickEvent(event) {

        event.preventDefault();

        const prevControlClickEvent = new CustomEvent('bs-carousel-control-prev-click', {
            bubbles: true,
            composed: true
        });

        this.dispatchEvent(prevControlClickEvent);
    }
};

if (!window.customElements.get("bs-carousel-control-prev"))
    window.customElements.define('bs-carousel-control-prev', BsCarouselControlPrev);
