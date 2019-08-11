
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';

export class BsPageItem extends LitElement {
    
    static get properties() {
        return {
            active: {type: Boolean, reflect: true},
            disabled: {type: Boolean, reflect: true}
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
               :host(:first-child) ::slotted(bs-page-link) {
                    margin-left: 0;
                    border-top-left-radius: 0.25rem;
                    border-bottom-left-radius: 0.25rem;
                }

                :host(:last-child) ::slotted(bs-page-link) {
                    border-top-right-radius: 0.25rem;
                    border-bottom-right-radius: 0.25rem;
                }

                :host([active]) ::slotted(bs-page-link) {
                    z-index: 1;
                    --bs-page-link-color: #fff;
                    background-color: #007bff;
                    border-color: #007bff;
                }

                :host([disabled]) ::slotted(bs-page-link) {
                    --bs-page-link-color: #6c757d;
                    pointer-events: none;
                    cursor: auto;
                    background-color: #fff;
                    border-color: #dee2e6;
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
        this.active = false;
        this.disabled = false;
    }
};

if(!window.customElements.get('bs-page-item')) window.customElements.define('bs-page-item', BsPageItem);