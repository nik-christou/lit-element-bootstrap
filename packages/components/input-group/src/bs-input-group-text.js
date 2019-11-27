
import { LitElement, html } from 'lit-element';
import { BsInputGroupTextCss } from './bs-input-group-text.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class BsInputGroupText extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsInputGroupTextCss
        ];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }
};

if(!window.customElements.get('bs-input-group-text'))
    window.customElements.define('bs-input-group-text', BsInputGroupText);
