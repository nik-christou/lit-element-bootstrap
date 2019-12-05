
import { LitElement, html } from 'lit-element';
import { configureCardLinks } from './helper/bs-card-links-helper.js';
import { BsCardLinksCss } from './css/bs-card-links.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class BsCardLinks extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsCardLinksCss
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

if (!window.customElements.get("bs-card-links"))
    window.customElements.define('bs-card-links', BsCardLinks);


