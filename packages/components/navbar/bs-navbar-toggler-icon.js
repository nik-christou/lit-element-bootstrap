
import { LitElement } from 'lit-element';
import { BsNavbarTogglerIconCss } from './css/bs-navbar-toggler-icon.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class BsNavbarTogglerIcon extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsNavbarTogglerIconCss
        ];
    }
};

if(!window.customElements.get('bs-navbar-toggler-icon'))
    window.customElements.define('bs-navbar-toggler-icon', BsNavbarTogglerIcon);
