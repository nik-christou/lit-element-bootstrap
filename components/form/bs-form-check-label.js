
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss, BsContentTypographyCss } from '../../content';

export class BsFormCheckLabel extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            css`
                label {
                    margin-bottom: 0;
                }
        
                :host([disabled]) label {
                    color: #6c757d;
                }
                
                :host([valid]) label {
                    color: #28a745;
                }
                
                :host([invalid]) label {
                    color: #dc3545;
                }
            `
        ];
    }
    
    render() {
        return html`
            <label><slot></slot></label>
        `;
    }
    
    firstUpdated() {
        const labelElement = this.shadowRoot.querySelector('label');
        labelElement.addEventListener('click', event => this._handleEvent(event));
    }
    
    _handleEvent(event) {
        
        event.preventDefault();
        
        const disabledAttribute = this.hasAttribute('disabled');
        
        if(disabledAttribute) {
            return;
        }
        
        const labelClickedEvent = new CustomEvent('bs-form-check-label-click', {
            bubbles: true, 
            composed: true
        });

        this.dispatchEvent(labelClickedEvent);
    }
};

if(!window.customElements.get('bs-form-check-label')) window.customElements.define('bs-form-check-label', BsFormCheckLabel);