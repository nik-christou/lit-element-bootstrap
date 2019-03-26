
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';

export class BsFormRow extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    display: flex;
                    flex-wrap: wrap;
                    margin-right: -5px;
                    margin-left: -5px;
                }
                
                ::slotted(bs-col) {
                    padding-right: 5px !important;
                    padding-left: 5px !important;
                }
                
                /* 
                 * the below assumes that the bs-form-group 
                 * has column attributes like md-6
                 */
                
                ::slotted(bs-form-group) {
                    padding-right: 5px !important;
                    padding-left: 5px !important;
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

window.customElements.define('bs-form-row', BsFormRow);