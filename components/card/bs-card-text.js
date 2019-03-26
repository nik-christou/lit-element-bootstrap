
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';

export class BsCardText extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    display: block;
                }
        
                :host > ::slotted(*:last-child) {
                    margin-bottom: 0;
                }
            `
        ];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }
};

window.customElements.define('bs-card-text', BsCardText);