
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';

export class BsMediaGroup extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    margin-top: 0;
                    margin-bottom: 1rem;
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

if(!window.customElements.get('bs-media-group')) window.customElements.define('bs-media-group', BsMediaGroup);

