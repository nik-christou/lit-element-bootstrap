
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot-css.js';

export class BsCardFooter extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    padding: 0.75rem 1.25rem;
                    background-color: rgba(0, 0, 0, 0.03);
                    border-top: 1px solid rgba(0, 0, 0, 0.125);
                    border-bottom-left-radius: var(--card-footer-bottom-left-border-radius);
                    border-bottom-right-radius: var(--card-footer-bottom-right-border-radius);
                }

                :host ::slotted(*:last-child) {
                    border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
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

if (!window.customElements.get("bs-card-footer"))   
    window.customElements.define('bs-card-footer', BsCardFooter);