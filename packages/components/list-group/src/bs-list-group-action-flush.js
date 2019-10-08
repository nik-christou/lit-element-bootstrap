
import { LitElement, html } from 'lit-element';
import { BsListGroupCommonCss } from './bs-list-group-common.css.js';
import { BsListGroupActionFlushCss } from './bs-list-group-action-flush.css.js';
import { BsContentRebootCss } from '@l./bs-list-group-common.css.js/index.jsbs-content-reboot.css.js';

export class BsListGroupActionFlush extends LitElement {

    static get properties() {
        return {
            selectedItem: { type: Number, reflect: true }
        };
    }

    static get styles() {
        return [
            BsContentRebootCss,
            BsListGroupCommonCss,
            BsListGroupActionFlushCss
        ];
    }

    render() {
        return html`
            <div class="list-group">
                <slot></slot>
            </div>
        `;
    }

    constructor() {
        super();
        this.selectedItem = 0;
    }

    firstUpdated() {
        this._addGroupActionItemsIndex();
        this.addEventListener('list-group-item-selected', event => this._handleListGroupItemSelected(event));
    }

    updated(changedProperties) {

        if (changedProperties.has('selecteditem')) {
            this._updateSelectedItem();
       }
    }

    _handleListGroupItemSelected(event) {
        this.selectedItem = event.detail.index;
    }

    _addGroupActionItemsIndex() {

        const groupItems = this._retrieveGroupItems();

        for(let index = 0; index < groupItems.length; ++index) {
            const groupItem = groupItems[index];
            groupItem.setAttribute('index', index);
        }
    }

    _updateSelectedItem() {

        const groupItems = this._retrieveGroupItems();

        for(let index = 0; index < groupItems.length; ++index) {

            const groupItem = groupItems[index];

            if(index === this.selectedItem) {
                groupItem.setAttribute('active', '');
            } else {
                groupItem.removeAttribute('active');
            }
        }
    }

    _retrieveGroupItems() {

        const slotNodes = this.shadowRoot.querySelector('slot').assignedNodes();
        const groupActionItemNodes = this._retrieveGroupItemNodes(slotNodes);

        return groupActionItemNodes;
    }

    _retrieveGroupItemNodes(nodes) {

        const groupActionItemNodes = [];

        for (let index = 0; index < nodes.length; ++index) {
            const el = nodes[index];
            if (this._isGroupActionItem(el)) {
                groupActionItemNodes.push(el);
            }
        }

        return groupActionItemNodes;
    }

    _isGroupActionItem(el) {
        return el.nodeType === Node.ELEMENT_NODE && (
                el.localName === 'bs-list-group-item-action-link' ||
                el.localName === 'bs-list-group-item-action-button');
    }
};

if(!window.customElements.get('bs-list-group-action-flush'))
    window.customElements.define('bs-list-group-action-flush', BsListGroupActionFlush);
