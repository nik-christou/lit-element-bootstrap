
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';

import '../button/close/bs-close-btn';

export class BsModalHeader extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                .modal-header {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    padding: 1rem;
                    border-bottom: 1px solid #e9ecef;
                    border-top-left-radius: 0.3rem;
                    border-top-right-radius: 0.3rem;
                }
                
                bs-close-btn {
                    --bs-close-btn-padding: 1rem;
                    --bs-close-btn-margin: -1rem -1rem -1rem auto;
                }
                
                .modal-title {
                    margin-bottom: 0;
                    line-height: 1.5;
                }
            `
        ];
    }
    
    render() {
        return html`
            <div class="modal-header">
                <div class="modal-title">
                    <slot></slot>
                </div>
                <bs-close-btn><bs-close-btn>
            </div>
        `;
    }
    
    firstUpdated() {
        this.addEventListener('close-button-click', () => this._handleCloseEvent());
    }
    
    _handleCloseEvent() {
        
        const modalDismissEvent = new CustomEvent('bs-modal-dismiss', {
            bubbles: true, 
            composed: true
        });
        
        this.dispatchEvent(modalDismissEvent);
    }
};

if(!window.customElements.get('bs-modal-header')) window.customElements.define('bs-modal-header', BsModalHeader);