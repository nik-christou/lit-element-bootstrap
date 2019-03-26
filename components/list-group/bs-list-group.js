
import { LitElement, html, css } from 'lit-element';
import { BsListGroupCommonCss } from './bs-list-group-common-css';
import { BsContentRebootCss } from '../../content';

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

window.customElements.define('bs-list-group', BsListGroup);