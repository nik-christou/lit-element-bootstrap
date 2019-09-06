
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot-css.js';

export class BsDropdownMenu extends LitElement {
    
    static get properties() {
        return {
            show: {type: Boolean, reflect: true}
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    position: var(--dropdown-menu-position, absolute);
                    left: 0;
                    z-index: 1000;
                    display: var(--dropdown-menu-display, block);
                    visibility: hidden !important;
                    float: var(--dropdown-menu-float, left);
                    min-width: 10rem;
                    padding: 0.5rem 0;
                    margin-left: 0;
                    margin-right: 0;
                    font-size: 1rem;
                    color: #212529;
                    text-align: left;
                    list-style: none;
                    background-color: #fff;
                    background-clip: padding-box;
                    border: 1px solid rgba(0, 0, 0, 0.15);
                    border-top-left-radius: var(--dropdown-menu-border-top-left-radius, 0.25rem);
                    border-top-right-radius: var(--dropdown-menu-border-top-right-radius, 0.25rem);
                    border-bottom-right-radius: var(--dropdown-menu-border-bottom-right-radius, 0.25rem);
                    border-bottom-left-radius: var(--dropdown-menu-border-bottom-left-radius, 0.25rem);
                }
        
                :host([static]) {
                    position: static;
                }
        
                :host([down]) {
                    top: 100%;
                    margin-top: var(--dropdown-menu-down-margin-top, 0.125rem);
                    margin-bottom: 0;
                }
                
                :host([up]) {
                    top: auto;
                    bottom: 100%;
                    margin-top: var(--dropdown-menu-up-margin-top, 0);
                    margin-bottom: 0.125rem;
                }
        
                :host([right]) {
                    top: 0;
                    right: auto;
                    left: 100%;
                    margin-top: var(--dropdown-menu-right-margin-top, 0);
                    margin-left: 0.125rem;
                }
                
                :host([left]) {
                    top: 0;
                    right: 100%;
                    left: auto;
                    margin-top: var(--dropdown-menu-left-margin-top, 0);
                    margin-right: 0.125rem;
                }
                
                :host([align-right]) {
                    right: 0;
                    left: auto;
                }
                
                :host([show]) {
                    visibility: visible !important;
                }
                
                :host([x-placement^="top"]), 
                :host([x-placement^="right"]), 
                :host([x-placement^="bottom"]), 
                :host([x-placement^="left"]) {
                    right: auto;
                    bottom: auto;
                }
            `
        ];
    }
    
    render() {
        return html`
            <slot></slot>
        `;
    }
    
    constructor() {
        super();
        this.show = false;
    }
    
    toggleMenu() {
        this.show = !this.show;
        this._changeDisplayValueInCollapsedNavbar();
    }
    
    openMenu() {
        this.show = true;
    }
    
    closeMenu() {
        this.show = false;
    }
    
    _changeDisplayValueInCollapsedNavbar() {
        
        const compStyles = window.getComputedStyle(this.shadowRoot.host);
        const displayValue = compStyles.getPropertyValue('display');
        
        if(this.show && displayValue === 'none') {
            this.shadowRoot.host.style.display = 'block';
        }
        
        if(!this.show && displayValue === 'block') {
            this.shadowRoot.host.style.display = 'none';
        }
    }
};

if (!window.customElements.get("bs-dropdown-menu")) 
    window.customElements.define('bs-dropdown-menu', BsDropdownMenu);