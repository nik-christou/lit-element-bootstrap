
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';

export class BsDropdownDivider extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    display: block;
                    height: 0;
                    margin: 0.5rem 0;
                    overflow: hidden;
                    border-top: 1px solid #e9ecef;
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

window.customElements.define('bs-dropdown-divider', BsDropdownDivider);