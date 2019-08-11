
import { LitElement, html, css } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';
import { BsFormControlSizeCss } from './css/bs-form-control-size-css';
import { BsContentRebootCss } from '../../content';

export class BsFormInputPlaintext extends LitElement {
    
    static get properties() {
        return {
            placeholder: String,
            value: String,
            type: String,
            readonly: {type: Boolean, reflect: true}
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsFormControlSizeCss,
            css`
                :host {
                    display: block;
                }
                
                input {
                    display: block;
                    width: 100%;
                    padding-top: 0.375rem;
                    padding-bottom: 0.375rem;
                    margin-bottom: 0;
                    line-height: 1.5;
                    color: #212529;
                    background-color: transparent;
                    border: solid transparent;
                    border-width: 1px 0;
                }

                :host([sm]) input,
                :host([lg]) input {
                    padding-right: 0;
                    padding-left: 0;
                }
        
                @media (min-width: 576px) {
                    
                    :host([inline]) input {
                        display: inline-block;
                    }
                }
            `
        ];
    }
    
    render() {
        return html`
            <input 
                type=${this.type}
                ?readonly=${this.readonly}
                .value=${this.value}
                placeholder=${ifDefined(this.placeholder)} />
        `;
    }
    
    constructor() {
        super();
        this.value = '';
        this.type = 'text';
        this.readonly = false;
    }
};

if(!window.customElements.get('bs-form-input-plaintext')) window.customElements.define('bs-form-input-plaintext', BsFormInputPlaintext);