
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';

export class BsCarouselCaption extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    position: absolute;
                    right: 15%;
                    bottom: 20px;
                    left: 15%;
                    z-index: 10;
                    padding-top: 20px;
                    padding-bottom: 20px;
                    color: #fff;
                    text-align: center;
                }
            `
        ];
    }
    
    render() {
        return html`
            <slot></slot>
        `;
    }
};

window.customElements.define('bs-carousel-caption', BsCarouselCaption);