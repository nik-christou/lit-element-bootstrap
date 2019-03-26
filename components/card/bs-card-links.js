
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';
import { configureCardLinks } from './helper/bs-card-links-helper';

export class BsCardLinks extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host ::slotted(*):hover {
                    color: red;
                    text-decoration: underline;
                }
            `
        ];
    }
    
    render() {
        return html`
            <slot></slot>
        `;
    }
    
    firstUpdated() {
        const slotElement = this.shadowRoot.querySelector('slot');
        const slotNodes = slotElement.assignedNodes();
        
        configureCardLinks(slotNodes);
    }
};

window.customElements.define('bs-card-links', BsCardLinks);


