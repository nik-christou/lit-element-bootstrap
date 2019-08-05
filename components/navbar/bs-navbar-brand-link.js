
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss, BsContentTypographyCss } from '../../content';
import { BsSpacingCss } from '../../utilities';

export class BsNavbarBrandLink extends LitElement {

    static get properties() {
        return {
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

if(!window.customElements.get('bs-navbar-brand-link'))  window.customElements.define('bs-navbar-brand-link', BsNavbarBrandLink);