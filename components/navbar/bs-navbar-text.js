
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot-css.js';

export class BsNavbarText extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    display: inline-block;
                    padding-top: 0.5rem;
                    padding-bottom: 0.5rem;
                }
                
                span {
                    color: var(--navbar-text-color, rgba(0, 0, 0, 0.5));
                }
            `
        ];
    }
    
    render() {
        return html`
            <span><slot></slot></span>
        `;
    }
};

if(!window.customElements.get('bs-navbar-text')) 
    window.customElements.define('bs-navbar-text', BsNavbarText);