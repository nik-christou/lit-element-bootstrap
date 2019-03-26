
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';

export class BsRow extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    display: flex;
                    flex-wrap: wrap;
                    margin-right: -15px;
                    margin-left: -15px;
                }

                :host([no-gutters]) {
                    margin-right: 0;
                    margin-left: 0;
                }

                :host([no-gutters]) ::slotted(*) {
                    padding-right: 0;
                    padding-left: 0;
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

window.customElements.define('bs-row', BsRow);