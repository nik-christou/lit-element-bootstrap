
import { LitElement, html } from 'lit-element';
import { BsContentRebootCss } from '../../content';
import { BsListGroupItemCommonCss } from './bs-list-group-item-common-css';
import { BsFlexJustifyCss, BsFlexDisplayCss, BsFlexAlignItemsCss } from '../../utilities/flex';

export class BsListGroupBadgeItem extends LitElement {
    
    static get properties() {
        return {
            align: String,
            justify: String
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsListGroupItemCommonCss,
            BsFlexJustifyCss,
            BsFlexDisplayCss,
            BsFlexAlignItemsCss
        ];
    }
    
    render() {
        return html`
            <li class="list-group-item d-flex">
                <slot></slot>
            </li>
        `;
    }
    
    constructor() {
        super();
        this.justify = 'between';
        this.align = 'center';
    }
    
    firstUpdated() {
        const groupItemElement = this.shadowRoot.querySelector('li');
        this._handleAlignItems(groupItemElement);
        this._handleJustification(groupItemElement);
    }
    
    _handleAlignItems(groupItemElement) {

        if(this.align === 'start') {
            groupItemElement.classList.add('align-items-start');
        }

        if(this.align === 'end') {
            groupItemElement.classList.add('align-items-end');
        }

        if(this.align === 'center') {
            groupItemElement.classList.add('align-items-center');
        }

        if(this.align === 'baseline') {
            groupItemElement.classList.add('align-items-baseline');
        }

        if(this.align === 'stretch') {
            groupItemElement.classList.add('align-items-stretch');
        }
    }

    _handleJustification(groupItemElement) {

        if(this.justify === 'start') {
            groupItemElement.classList.add('justify-content-start');
        }

        if(this.justify === 'end') {
            groupItemElement.classList.add('justify-content-end');
        }

        if(this.justify === 'center') {
            groupItemElement.classList.add('justify-content-center');
        }

        if(this.justify === 'between') {
            groupItemElement.classList.add('justify-content-between');
        }

        if(this.justify === 'around') {
            groupItemElement.classList.add('justify-content-around');
        }
    }
};

window.customElements.define('bs-list-group-badge-item', BsListGroupBadgeItem);