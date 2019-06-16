
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';

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

window.customElements.define('bs-form-range', BsFormRange);