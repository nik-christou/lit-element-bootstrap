
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot-css.js';

export class BsNavbarNav extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    display: flex;
                    flex-direction: var(--navbar-nav-flex-direction, column);
                    padding-left: 0;
                    margin-bottom: 0;
                    list-style: none;
                }
                
                :host ::slotted(bs-dropdown) {
                    position: static;
                    float: none;
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

if(!window.customElements.get('bs-navbar-nav')) 
    window.customElements.define('bs-navbar-nav', BsNavbarNav);