
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';

export class BsMediaBody extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    flex: 1;
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

if(!window.customElements.get('bs-media-body')) window.customElements.define('bs-media-body', BsMediaBody);

