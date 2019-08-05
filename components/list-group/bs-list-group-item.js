
import { LitElement, html } from 'lit-element';
import { BsContentRebootCss } from '../../content';
import { BsListGroupItemCommonCss } from './bs-list-group-item-common-css';

export class BsListGroupItem extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsListGroupItemCommonCss
        ];
    }
    
    render() {
        return html`
            <li class="list-group-item">
                <slot></slot>
            </li>
        `;
    }
};

if(!window.customElements.get('bs-list-group-item'))  window.customElements.define('bs-list-group-item', BsListGroupItem);