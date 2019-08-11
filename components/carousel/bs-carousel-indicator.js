
import { LitElement, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';

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
            css`
                :host {
                    position: relative;
                    flex: 0 1 auto;
                    width: 30px;
                    height: 3px;
                    margin-right: 3px;
                    margin-left: 3px;
                    text-indent: -999px;
                    cursor: pointer;
                    background-color: rgba(255, 255, 255, 0.5);
                }
                
                :host([active]) {
                    background-color: #fff;
                }
        
                :host::before {
                    position: absolute;
                    top: -10px;
                    left: 0;
                    display: inline-block;
                    width: 100%;
                    height: 10px;
                    content: "";
                }
        
                :host::after {
                    position: absolute;
                    bottom: -10px;
                    left: 0;
                    display: inline-block;
                    width: 100%;
                    height: 10px;
                    content: "";
                }
            `
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

if (!window.customElements.get("bs-carousel-indicator")) window.customElements.define('bs-carousel-indicator', BsCarouselIndicator);