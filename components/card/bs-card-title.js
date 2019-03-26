
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';

export class BsCardTitle extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    margin-bottom: 0.75rem;
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

window.customElements.define('bs-card-title', BsCardTitle);