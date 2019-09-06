
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot-css.js';

export class BsButtonToolbar extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: flex-start;
                    --bs-input-group-width: auto;
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

if (!window.customElements.get("bs-button-toolbar"))  
    window.customElements.define('bs-button-toolbar', BsButtonToolbar);