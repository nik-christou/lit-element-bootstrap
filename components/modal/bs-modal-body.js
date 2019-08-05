
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';

export class BsModalBody extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                .modal-body {
                    position: relative;
                    flex: 1 1 auto;
                    padding: 1rem;
                }
            `
        ];
    }
    
    render() {
        return html`
            <div class="modal-body">
                <slot></slot>
            </div>
        `;
    }
};

if(!window.customElements.get('bs-modal-body')) window.customElements.define('bs-modal-body', BsModalBody);

