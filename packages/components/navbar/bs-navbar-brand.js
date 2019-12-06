
import { LitElement, html } from 'lit-element';
import { BsNavbarBrandCss } from './css/bs-navbar-brand.css.js';
import { BsSpacingCss } from '@lit-element-bootstrap/utilities';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';
import { BsContentTypographyCss } from '@lit-element-bootstrap/content';

export class BsNavbarBrand extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsSpacingCss,
            BsNavbarBrandCss
        ];
    }

    render() {
        return html`
            <span class="mb-0 h1">
                <slot></slot>
            </span>
        `;
    }
};

if(!window.customElements.get('bs-navbar-brand'))
    window.customElements.define('bs-navbar-brand', BsNavbarBrand);
