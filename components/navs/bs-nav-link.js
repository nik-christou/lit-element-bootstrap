
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';

export class BsNavLink extends LitElement {
    
    static get properties() {
        return {
            index: Number,
            href: String,
            target: String,
            active: {type: Boolean, reflect: true},
            disabled: {type: Boolean, reflect: true}
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    display: block;
                    padding-top: 0.5rem;
                    padding-bottom: 0.5rem;
                    padding-right: var(--nav-link-padding-right, 1rem);
                    padding-left: var(--nav-link-padding-left, 1rem);
                    border: var(--nav-link-border);
                    border-radius: var(--nav-link-border-radius);
                }
                
                :host(:hover),
                :host(:focus) {
                    border-color: #e9ecef #e9ecef #dee2e6;
                    border-top-left-radius: 0.25rem;
                    border-top-right-radius: 0.25rem;
                }
                
                a {
                    color: var(--nav-link-color, #007bff);
                }
                
                :host(:hover) a {
                    color: var(--nav-link-hover-color, #0056b3);
                    text-decoration: none;
                }
                
                :host(:focus) a {
                    color: var(--nav-link-focus-color);
                    text-decoration: none;
                }

                :host([disabled]) a {
                    color: var(--nav-link-disabled-color, #6c757d);
                }
                
                :host([disabled]) {
                    background-color: transparent;
                    border-color: transparent;
                }
                
                :host([active]) a {
                    color: var(--nav-link-active-color, #007bff);
                }
                
                :host([active]) a:hover {
                    text-decoration: none;
                    color: var(--nav-link-active-hover-color, #0056b3);
                }
                
                :host([active]) {
                    background-color: var(--nav-link-active-background-color);
                    border-color: var(--nav-link-active-border-color);
                    border-bottom-left-radius: var(--nav-link-active-border-bottom-left-radius);
                    border-bottom-right-radius: var(--nav-link-active-border-bottom-right-radius);
                    border-top-left-radius: var(--nav-link-active-border-top-left-radius);
                    border-top-right-radius: var(--nav-link-active-border-top-right-radius);
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
        this.index = -1;
        this.href = '';
        this.target = '_self';
        this.active = false;
        this.disabled = false;
    }
    
    firstUpdated() {
        const navLink = this.shadowRoot.querySelector('a');
        navLink.addEventListener('click', event => this._handleClickEvent(event));
    }
    
    _handleClickEvent(event) {

        if(!this.href) {
            event.preventDefault();
            return;
        }

        if (this.disabled) {
            event.preventDefault();
            return;
        }
        
        const navLinkClickEvent = new CustomEvent('nav-link', {
            bubbles: true,
            composed: true,
            detail: {
                index: this.index
            }
        });

        this.dispatchEvent(navLinkClickEvent);
    }
};

if(!window.customElements.get('bs-nav-link')) window.customElements.define('bs-nav-link', BsNavLink);

