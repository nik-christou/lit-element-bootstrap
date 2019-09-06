
import { LitElement, html, css } from 'lit-element';

import '@lit-element-bootstrap/button/bs-close-button.js';

export class BsAlertDismiss extends LitElement {

    static get styles() {
        return css`
            
            .dismiss-button {
                position: absolute;
                top: 0;
                right: 0;
                padding: 0.75rem 1.25rem;
                color: inherit;
            }
        `;
    }

    render() {
        return html`
            <bs-close-button class="dismiss-button"></bs-close-button>
        `;
    }
};

if(!window.customElements.get("bs-alert-dismiss"))  
    window.customElements.define('bs-alert-dismiss', BsAlertDismiss);