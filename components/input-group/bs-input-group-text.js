
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';

export class BsInputGroupText extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    display: flex;
                    align-items: center;
                    padding: var(--bs-input-group-text-padding, 0.375rem 0.75rem);
                    margin-bottom: 0;
                    margin-left: var(--bs-input-group-text-margin-left);
                    font-size: var(--bs-input-group-text-font-size, 1rem);
                    font-weight: 400;
                    line-height: var(--bs-input-group-text-line-height, 1.5);
                    color: #495057;
                    text-align: center;
                    white-space: nowrap;
                    background-color: #e9ecef;
                    border: 1px solid #ced4da;
                    height: var(--bs-input-group-text-height);
                    border-top-left-radius: var(--bs-input-group-text-border-top-left-radius, 0.25rem);
                    border-top-right-radius: var(--bs-input-group-text-border-top-right-radius, 0.25rem);
                    border-bottom-right-radius: var(--bs-input-group-text-border-bottom-right-radius, 0.25rem);
                    border-bottom-left-radius: var(--bs-input-group-text-border-bottom-left-radius, 0.25rem);
                }
                
                :host ::slotted(bs-form-radio-input),
                :host ::slotted(bs-form-checkbox-input) {
                    --bs-form-checkbox-input-position: static;
                    --bs-form-checkbox-input-margin-top: 0;
                    --bs-form-checkbox-input-margin-left: 0;
                    --bs-form-radio-input-position: static;
                    --bs-form-radio-input-margin-top: 0;
                    --bs-form-radio-input-margin-left: 0;
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

if(!window.customElements.get('bs-input-group-text')) window.customElements.define('bs-input-group-text', BsInputGroupText);