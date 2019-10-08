
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot.css.js';

export class BsFormRange extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    display: block;
                }
                
                .form-control-range {
                    display: block;
                    width: 100%;
                }
            `
        ];
    }
    
    render() {
        return html`
            <input type="range" class="form-control-range" />
        `;
    }
};

if(!window.customElements.get('bs-form-range')) 
    window.customElements.define('bs-form-range', BsFormRange);