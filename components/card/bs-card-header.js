
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot-css.js';

export class BsCardHeader extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    padding: 0.75rem 1.25rem;
                    margin-bottom: 0;
                    background-color: rgba(0, 0, 0, 0.03);
                    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
                    border-top-left-radius: var(--card-header-top-left-border-radius);
                    border-top-right-radius: var(--card-header-top-right-border-radius);
                }
                
                :host:first-child {
                    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
                }
                
                :host ::slotted(*) + .list-group .list-group-item:first-child {
                    border-top: 0;
                }
        
                :host ::slotted(bs-nav[tabs]) {
                    --bs-nav-margin-right: -0.625rem;
                    --bs-nav-margin-bottom: -0.75rem;
                    --bs-nav-margin-left: -0.625rem;
                    --bs-nav-border-bottom: 0;
                    --nav-link-active-background-color: #fff;
                }
        
                :host ::slotted(bs-nav[pills]) {
                    --bs-nav-margin-right: -0.625rem;
                    --bs-nav-margin-left: -0.625rem;
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

if (!window.customElements.get("bs-card-header")) 
    window.customElements.define('bs-card-header', BsCardHeader);

