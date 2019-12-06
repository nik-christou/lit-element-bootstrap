
import { LitElement, html } from 'lit-element';
import { BsPageItemCss } from './css/bs-page-item.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

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
            BsPageItemCss
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

if(!window.customElements.get('bs-page-item'))
    window.customElements.define('bs-page-item', BsPageItem);
