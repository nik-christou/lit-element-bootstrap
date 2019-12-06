
import { LitElement, html } from 'lit-element';
import { BsMediaGroupCss } from './css/bs-media-group.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class BsMediaGroup extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsMediaGroupCss
        ];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }
};

if(!window.customElements.get('bs-media-group'))
    window.customElements.define('bs-media-group', BsMediaGroup);

