
import { LitElement, html } from 'lit-element';
import { BsPaginationCss } from './bs-pagination.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

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
            BsPaginationCss
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

if(!window.customElements.get('bs-pagination'))
    window.customElements.define('bs-pagination', BsPagination);
