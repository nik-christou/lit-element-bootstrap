
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot-css.js';

export class BsCarouselControlNext extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                .carousel-control-next {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    z-index: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 15%;
                    color: #fff;
                    text-align: center;
                    opacity: 0.5;
                    cursor: pointer;
                    right: 0;
                }
        
                .carousel-control-next:hover,
                .carousel-control-next:focus {
                    color: #fff;
                    text-decoration: none;
                    outline: 0;
                    opacity: 0.9;
                }
                
                .icon {
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    background: no-repeat 50%/100% 100%;
                    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 8 8%27%3E%3Cpath d=%27M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z%27/%3E%3C/svg%3E");
                }
            `
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