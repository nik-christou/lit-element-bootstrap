
import { LitElement, html } from 'lit-element';
import { BsCardLinkCss } from './bs-card-link.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class BsCardLink extends LitElement {

    static get properties() {
        return {
            label: String,
            target: String
        };
    }

    static get styles() {
        return [
            BsContentRebootCss,
            BsCardLinkCss
        ];
    }

    render() {
        return html`
            <a href="${this.target}">${this.label}</a>
        `;
    }

    constructor() {
        super();
        this.label = '';
        this.target = '#';
    }
};

if (!window.customElements.get("bs-card-link"))
    window.customElements.define('bs-card-link', BsCardLink);

