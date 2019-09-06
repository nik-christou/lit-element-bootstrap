
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss, BsContentTypographyCss } from '@lit-element-bootstrap/content';
import { BsColumnExtraSmallCss, 
         BsColumnSmallCss, 
         BsColumnMediumCss, 
         BsColumnLargeCss, 
         BsColumnExtraLargeCss } from '@lit-element-bootstrap/layout';

export class BsFormLabel extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsColumnExtraSmallCss,
            BsColumnSmallCss,
            BsColumnMediumCss,
            BsColumnLargeCss,
            BsColumnExtraLargeCss,
            css`
                :host([column]) {
                    padding-top: calc(0.375rem + 1px);
                    padding-bottom: calc(0.375rem + 1px);
                    margin-bottom: 0;
                    font-size: inherit;
                    line-height: 1.5;
                }

                :host([column-lg]) {
                    padding-top: calc(0.5rem + 1px);
                    padding-bottom: calc(0.5rem + 1px);
                    font-size: 1.25rem;
                    line-height: 1.5;
                }

                :host([column-sm]) {
                    padding-top: calc(0.25rem + 1px);
                    padding-bottom: calc(0.25rem + 1px);
                    font-size: 0.875rem;
                    line-height: 1.5;
                }
        
                @media (min-width: 576px) {
                    
                    :host([inline]) {
                        display: -ms-flexbox;
                        display: flex;
                        -ms-flex-align: center;
                        align-items: center;
                        -ms-flex-pack: center;
                        justify-content: center;
                        margin-bottom: 0;
                    }
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
        
        const labelClickedEvent = new CustomEvent('bs-form-label-click', {
            bubbles: true, 
            composed: true
        });

        this.dispatchEvent(labelClickedEvent);
    }
};

if(!window.customElements.get('bs-form-label'))  
    window.customElements.define('bs-form-label', BsFormLabel);