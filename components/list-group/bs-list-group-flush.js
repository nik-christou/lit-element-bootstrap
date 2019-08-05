
import { LitElement, html, css } from 'lit-element';
import { BsListGroupCommonCss } from './bs-list-group-common-css';
import { BsContentRebootCss } from '../../content';

export class BsListGroupFlush extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsListGroupCommonCss,
            css`
                ul ::slotted(*) {
                    --list-group-item-border-right: 0px;
                    --list-group-item-border-left: 0px;
                    --list-group-item-border-radius-bottom-right: 0;
                    --list-group-item-border-radius-bottom-left: 0;
                    --list-group-item-border-radius-top-left: 0;
                    --list-group-item-border-radius-top-right: 0;
                }
                
                ul ::slotted(*:first-child) {
                    --list-group-item-border-top: var(--flush-list-group-item-top-border, 0);
                    --list-group-item-border-radius-top-left: var(--flush-list-group-item-top-left-radius, 0);
                    --list-group-item-border-radius-top-right: var(--flush-list-group-item-top-right-radius, 0);
                }
                
                ul ::slotted(*:last-child) {
                    --list-group-item-border-bottom: var(--flush-list-group-item-bottom-border, 0);
                    --list-group-item-border-radius-bottom-left: var(--flush-list-group-item-bottom-left-radius, 0);
                    --list-group-item-border-radius-bottom-right: var(--flush-list-group-item-bottom-right-radius, 0);
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

if(!window.customElements.get('bs-list-group-flush'))  window.customElements.define('bs-list-group-flush', BsListGroupFlush);