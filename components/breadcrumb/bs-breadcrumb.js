
import { LitElement, html, css } from 'lit-element';

export class BsBreadrumb extends LitElement {
    
    static get styles() {
        return css`
            :host {
                display: flex;
                flex-wrap: wrap;
                padding: 0.75rem 1rem;
                margin-bottom: 1rem;
                list-style: none;
                background-color: #e9ecef;
                border-radius: 0.25rem;
            }
        `;
    }
    
    render() {
        return html`
            <slot></slot>
        `;
    }
};

window.customElements.define('bs-breadcrumb', BsBreadrumb);