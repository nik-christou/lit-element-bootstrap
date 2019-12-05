
import { LitElement, html } from 'lit-element';
import { BsListGroupCss } from './css/bs-list-group.css.js';
import { BsListGroupCommonCss } from './css/bs-list-group-common.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class BsListGroup extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsListGroupCommonCss,
            BsListGroupCss
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

if(!window.customElements.get('bs-list-group'))
    window.customElements.define('bs-list-group', BsListGroup);
