
import { LitElement, html } from 'lit-element';
import { BsContentRebootCss } from '../../content';

import './bs-tab-content';

export class BsTabs extends LitElement {
    
    static get properties() {
        return {
            selectedTabId: Number
        };
    }
    
    render() {
        return html`
            
            <slot name="tabs"></slot>
            
            <bs-tab-content selectedItem="${this.selectedTabId}">
                <slot name="tabs-content"></slot>
            </bs-tab-content>
        `;
    }

    constructor() {
        super();
        this.selectedTabId = -1;
    }
    
    firstUpdated() {
        this.addEventListener('list-group-item-selected', event => this._handleListGroupItemSelected(event));
    }
    
    _handleListGroupItemSelected(event) {
        this.selectedTabId = event.detail.index;
    }
};

if(!window.customElements.get('bs-tabs')) window.customElements.define('bs-tabs', BsTabs);