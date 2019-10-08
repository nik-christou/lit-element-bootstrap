
import { LitElement, html } from 'lit-element';
import { BsListGroupCss } from './bs-list-group.css.js';
import { BsListGroupCommonCss } from './bs-list-group-common.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot.css.js';

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
