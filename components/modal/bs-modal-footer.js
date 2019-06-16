
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';

export class BsModalFooter extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                .modal-footer {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    padding: 1rem;
                    border-top: 1px solid #e9ecef;
                }

                :host ::slotted(:not(:first-child)) {
                    margin-left: .25rem;
                }

                :host ::slotted(:not(:last-child)) {
                    margin-right: .25rem;
                }
            `
        ];
    }
    
    render() {
        return html`
            <div class="modal-footer">
                <slot></slot>
            </div>
        `;
    }
};

window.customElements.define('bs-modal-footer', BsModalFooter);

