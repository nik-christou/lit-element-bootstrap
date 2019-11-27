
import { LitElement, html } from 'lit-element';
import { BsJumbotronCss } from './bs-jumbotron.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class BsJumbotron extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsJumbotronCss
        ];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }
};

if(!window.customElements.get('bs-jumbotron'))
    window.customElements.define('bs-jumbotron', BsJumbotron);
