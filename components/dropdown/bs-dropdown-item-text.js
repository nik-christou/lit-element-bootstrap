
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot-css.js';

export class BsDropdownItemText extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    display: block;
                }
                
                .dropdown-item-text {
                    display: block;
                    padding: 0.25rem 1.5rem;
                    color: #212529;
                }
            `
        ];
    }
    
    render() {
        return html`
            <span class="dropdown-item-text">
                <slot></slot>
            </span>
        `;
    }
};

if (!window.customElements.get("bs-dropdown-item-text")) 
    window.customElements.define('bs-dropdown-item-text', BsDropdownItemText);