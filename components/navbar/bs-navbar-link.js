
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';

export class BsNavbarLink extends LitElement {

    static get properties() {
        return {
            target: String
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                
                :host {
                    display: inline-block;
                    padding-top: 0.5rem;
                    padding-bottom: 0.5rem;
                }
                
                a {
                    color: var(--navbar-text-link-color, rgba(0, 0, 0, 0.9));
                }
        
                a:hover {
                    color: var(--navbar-text-link-hover-color, rgba(0, 0, 0, 0.9));
                }
                
                a:focus {
                    color: var(--navbar-text-link-focus-color, rgba(0, 0, 0, 0.9));
                }
            `
        ];
    }
    
    render() {
        return html`
            <a href="${this.target}">
                <slot></slot>
            </a>
        `;
    }
    
    constructor() {
        super();
        this.target = '#';
    }
};

if(!window.customElements.get('bs-navbar-link')) window.customElements.define('bs-navbar-link', BsNavbarLink);