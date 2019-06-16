
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';

export class BsDropdownHeader extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    display: block;
                    padding: 0.5rem 1.5rem;
                    margin-bottom: 0;
                    font-size: 0.875rem;
                    color: #6c757d;
                    white-space: nowrap;
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

window.customElements.define('bs-dropdown-header', BsDropdownHeader);