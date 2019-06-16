
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';

export class BsProgress extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    display: flex;
                    height: 1rem;
                    overflow: hidden;
                    font-size: 0.75rem;
                    background-color: #e9ecef;
                    border-radius: 0.25rem;
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

window.customElements.define('bs-progress', BsProgress);