
import { LitElement, html } from 'lit-element';
import { BsCardCss } from './bs-card.css.js';
import { BsTextCss } from '@lit-element-bootstrap/content';
import { BsSizingCss } from '@lit-element-bootstrap/content';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';
import { configureFlushListGroupBorders } from './helper/bs-card-list-group-helper.js';

export class BsCard extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsSizingCss,
            BsTextCss,
            BsCardCss
        ];
    }

    render() {
        return html`
            <slot name="top-image"></slot>
            <slot name="card-header"></slot>
            <slot id="content"></slot>
            <slot name="card-footer"></slot>
            <slot name="bottom-image"></slot>
        `;
    }

    firstUpdated() {
        const contentSlotElement = this.shadowRoot.querySelector('slot#content');
        const slotNodes = contentSlotElement.assignedNodes();
        configureFlushListGroupBorders(slotNodes);
    }
};

if (!window.customElements.get("bs-card"))
    window.customElements.define('bs-card', BsCard);

