
import { LitElement, html, css } from 'lit-element';

import '../button/close/bs-close-btn';

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
            <bs-close-btn class="dismiss-button"></bs-close-btn>
        `;
    }
};

window.customElements.define('bs-alert-dismiss', BsAlertDismiss);