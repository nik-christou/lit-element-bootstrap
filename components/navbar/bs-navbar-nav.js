
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';

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

window.customElements.define('bs-navbar-nav', BsNavbarNav);