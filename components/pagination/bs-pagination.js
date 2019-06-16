
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';

export class BsPagination extends LitElement {
    
    static get properties() {
        return {
            small: {type: Boolean, reflect: true},
            large: {type: Boolean, reflect: true}
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    display: flex;
                    padding-left: 0;
                    list-style: none;
                    border-radius: 0.25rem;
                }
        
                :host([large]) {
                    --bs-page-link-padding: 0.75rem 1.5rem;
                    --bs-page-link-font-size: 1.25rem;
                    --bs-page-link-line-height: 1.5;
                }

                :host([large]) ::slotted(bs-page-item:first-child) {
                    --bs-page-link-radius-top-left: 0.3rem;
                    --bs-page-link-radius-bottom-left: 0.3rem;
                }

                :host([large]) ::slotted(bs-page-item:last-child) {
                    --bs-page-link-radius-top-right: 0.3rem;
                    --bs-page-link-radius-bottom-right: 0.3rem;
                }
        
                :host([small]) {
                    --bs-page-link-padding: 0.25rem 0.5rem;
                    --bs-page-link-font-size: 0.875rem;
                    --bs-page-link-line-height: 1.5;
                }

                :host([small]) ::slotted(bs-page-item:first-child) {
                    --bs-page-link-radius-top-left: 0.2rem;
                    --bs-page-link-radius-bottom-left: 0.2rem;
                }

                :host([small]) ::slotted(bs-page-item:last-child) {
                   --bs-page-link-radius-top-right: 0.2rem;
                   --bs-page-link-radius-bottom-right: 0.2rem;
                }
            `
        ];
    }
    
    render() {
        return html`
            <slot></slot>
        `;
    }
    
    constructor() {
        super();
        this.small = false;
        this.large = false;
    }
};

window.customElements.define('bs-pagination', BsPagination);