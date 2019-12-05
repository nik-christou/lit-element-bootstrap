
import { LitElement, html } from 'lit-element';
import { BsCarouselControlNextCss } from './css/bs-carousel-control-next.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class BsCarouselControlNext extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsCarouselControlNextCss
        ];
    }

    render() {
        return html`
            <a class="carousel-control-next">
                <span class="icon"></span>
            </a>
        `;
    }

    firstUpdated() {
        const nextLink = this.shadowRoot.querySelector('a.carousel-control-next');
        nextLink.addEventListener('click', event => this._handleClickEvent(event));
    }

    _handleClickEvent(event) {

        event.preventDefault();

        const nextControlClickEvent = new CustomEvent('bs-carousel-control-next-click', {
            bubbles: true,
            composed: true
        });

        this.dispatchEvent(nextControlClickEvent);
    }
};

if (!window.customElements.get("bs-carousel-control-next"))
    window.customElements.define('bs-carousel-control-next', BsCarouselControlNext);
