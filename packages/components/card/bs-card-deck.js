
import { LitElement, html } from 'lit-element';
import { BsCardDeckCss } from './bs-card-deck.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class BsCardDeck extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsCardDeckCss
        ];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }
};

if (!window.customElements.get("bs-card-deck"))
    window.customElements.define('bs-card-deck', BsCardDeck);
