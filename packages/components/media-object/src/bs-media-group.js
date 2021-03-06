
import { LitElement, html } from 'lit-element';
import { BsMediaGroupCss } from './bs-media-group.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot.css.js';

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

