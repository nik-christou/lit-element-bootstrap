
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss, BsContentTypographyCss } from '@lit-element-bootstrap/content';
import { BsSpacingCss } from '@lit-element-bootstrap/utilities/bs-spacing-css.js';

export class BsNavbarBrandLink extends LitElement {

    static get properties() {
        return {
            href: String,
            target: String
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsSpacingCss,
            css`
                
                :host {
                    display: inline-block;
                    padding-top: 0.3125rem;
                    padding-bottom: 0.3125rem;
                    margin-right: 1rem;
                    font-size: 1.25rem;
                    line-height: inherit;
                    white-space: nowrap;
                }
        
                a {
                    color: var(--navbar-brand-color);
                }
                
                a:hover {
                    color: var(--navbar-brand-link-hover-color);
                    text-decoration: none;
                }
        
                a:focus {
                    color: var(--navbar-brand-link-focus-color);
                    text-decoration: none;
                }
            `
        ];
    }

    render() {
        return html`
            <a href="${this.href}" .target="${this.target}">
                <slot></slot>
            </a>
        `;
    }
    
    constructor() {
        super();
        this.href = '';
        this.target = '_self';
    }
};

if(!window.customElements.get('bs-navbar-brand-link'))  
    window.customElements.define('bs-navbar-brand-link', BsNavbarBrandLink);