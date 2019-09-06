
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot-css.js';

import { BsListGroupCommonCss } from './bs-list-group-common-css.js';

export class BsListGroup extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsListGroupCommonCss,
            css`
                ul ::slotted(*:first-child) {
                    --list-group-item-border-radius-top-left: 0.25rem;
                    --list-group-item-border-radius-top-right: 0.25rem;
                }
                
                ul ::slotted(*:last-child) {
                    margin-bottom: 0;
                    --list-group-item-border-radius-bottom-left: 0.25rem;
                    --list-group-item-border-radius-bottom-right: 0.25rem;
                }
            `
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