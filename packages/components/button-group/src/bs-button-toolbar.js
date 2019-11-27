
import { LitElement, html } from 'lit-element';
import { BsButtonToolbarCss } from './bs-button-toolbar.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class BsButtonToolbar extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsButtonToolbarCss
        ];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }
};

if (!window.customElements.get("bs-button-toolbar"))
    window.customElements.define('bs-button-toolbar', BsButtonToolbar);
