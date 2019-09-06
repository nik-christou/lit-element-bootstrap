
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot-css.js';

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

if (!window.customElements.get("bs-carousel-caption")) 
    window.customElements.define('bs-carousel-caption', BsCarouselCaption);