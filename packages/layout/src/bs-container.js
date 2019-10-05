
import { LitElement, html } from 'lit-element';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot.css.js';
import { BsContainerCss } from './bs-container.css.js';

export class BsContainer extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsContainerCss
        ];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }
};

if(!window.customElements.get('bs-container'))
    window.customElements.define('bs-container', BsContainer);

