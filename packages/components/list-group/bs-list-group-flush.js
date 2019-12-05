
import { LitElement, html } from 'lit-element';
import { BsListGroupFlushCss } from './css/bs-list-group-flush.css.js';
import { BsListGroupCommonCss } from './css/bs-list-group-common.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class BsListGroupFlush extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsListGroupCommonCss,
            BsListGroupFlushCss
        ];
    }

    render() {
        return html`
            <ul class="list-group">
                <slot></slot>
            </ul>
        `;
    }
};

if(!window.customElements.get('bs-list-group-flush'))
    window.customElements.define('bs-list-group-flush', BsListGroupFlush);
