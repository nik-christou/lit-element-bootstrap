
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot-css.js';

export class BsCarouselControlPrev extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                .carousel-control-prev {
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
                    left: 0;
                }
            
                .carousel-control-prev:hover, 
                .carousel-control-prev:focus {
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
                    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 8 8%27%3E%3Cpath d=%27M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z%27/%3E%3C/svg%3E");
                }
            `
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