
import { LitElement, html } from 'lit-element';
import { BsProgressCss } from './bs-progress.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot.css.js';

export class BsProgress extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsProgressCss
        ];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }
};

if(!window.customElements.get('bs-progress'))
    window.customElements.define('bs-progress', BsProgress);
