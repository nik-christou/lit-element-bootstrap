
import { LitElement, html } from 'lit-element';
import { BsListGroupItemCommonCss } from './bs-list-group-item-common.css.js';
import { BsListGroupItemActionCommonCss } from './bs-list-group-item-action-common.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot.css.js';
import { BsContentTypographyCss } from '@lit-element-bootstrap/content/bs-content-typography.css.js';

export class BsListGroupItemActionLink extends LitElement {

    static get properties() {
        return {
            index: Number,
            href: String,
            target: String,
            active: {type: Boolean, reflect: true},
            disabled: {type: Boolean, reflect: true}
        };
    }

    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsListGroupItemActionCommonCss,
            BsListGroupItemCommonCss
        ];
    }

    render() {
        return html`
            <a href="${this.href}" .target="${this.target}" class="list-group-item list-group-item-action">
                <slot></slot>
            </a>
        `;
    }

    constructor() {
        super();
        this.index = -1;
        this.active = false;
        this.href = '#';
        this.target = '_self';
        this.disabled = false;
    }

    firstUpdated() {
       const listGroupItemAction = this.shadowRoot.querySelector('a.list-group-item-action');
        listGroupItemAction.addEventListener('click', event => this._handleClickEvent(event));
    }

    _handleClickEvent(event) {

        if (this.disabled) {
            event.preventDefault();
            return;
        }

        if(this.target === '#') {
            event.preventDefault();
        }

        const listGroupItemSelectedEvent = new CustomEvent('list-group-item-selected', {
            bubbles: true,
            composed: true,
            detail: {
                index: this.index
            }
        });

        this.dispatchEvent(listGroupItemSelectedEvent);
    }
};

if(!window.customElements.get('bs-list-group-item-action-link'))
    window.customElements.define('bs-list-group-item-action-link', BsListGroupItemActionLink);
