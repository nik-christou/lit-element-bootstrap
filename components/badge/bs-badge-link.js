
import { LitElement, html, css } from 'lit-element';
import { BsBadgeCss } from './bs-badge-css.js';
import { BsContentRebootCss } from '../../content';

export class BsBadgeLink extends LitElement {
    
    static get properties() {
        return {
            target: String
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsBadgeCss,
            css`
                
                :host([primary]) a {
                    text-decoration: none;
                }
                
                :host([secondary]) a {
                    text-decoration: none;
                }
                
                :host([success]) a {
                    text-decoration: none;
                }
        
                :host([info]) a {
                    text-decoration: none;
                }
                
                :host([warning]) a {
                    text-decoration: none;
                }
                
                :host([danger]) a {
                    text-decoration: none;
                }

                :host([light]) a {
                    text-decoration: none;
                }

                :host([dark]) a {
                    text-decoration: none;
                }
        
                :host([primary]) a:hover,
                :host([primary]) a:focus {
                    color: #fff;
                    text-decoration: none;
                    background-color: #0062cc;
                }
        
                :host([secondary]) a:hover,
                :host([secondary]) a:focus {
                    color: #fff;
                    text-decoration: none;
                    background-color: #545b62;
                }
        
                :host([success]) a:hover,
                :host([seccess]) a:focus {
                    color: #fff;
                    text-decoration: none;
                    background-color: #1e7e34;
                }
        
                :host([info]) a:hover,
                :host([info]) a:focus {
                    color: #fff;
                    text-decoration: none;
                    background-color: #117a8b;
                }
        
                :host([warning]) a:hover,
                :host([warning]) a:focus {
                    color: #212529;
                    text-decoration: none;
                    background-color: #d39e00;
                }
        
                :host([danger]) a:hover,
                :host([danger]) a:focus {
                    color: #fff;
                    text-decoration: none;
                    background-color: #bd2130;
                }
        
                :host([light]) a:hover,
                :host([light]) a:focus {
                    color: #212529;
                    text-decoration: none;
                    background-color: #dae0e5;
                }
        
                :host([dark][href]) a:hover,
                :host([dark][href]) a:focus {
                    color: #fff;
                    text-decoration: none;
                    background-color: #1d2124;
                }
            `
        ];
    }
    
    render() {
        return html`
            <a href="${this.target}" class="badge">
                <slot></slot>
            </a>
        `;
    }
    
    constructor() {
        super();
        this.target = '#';
    }
};

window.customElements.define('bs-badge-link', BsBadgeLink);