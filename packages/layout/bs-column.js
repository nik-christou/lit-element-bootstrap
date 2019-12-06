
import { LitElement, html } from 'lit-element';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

import { BsColumnExtraSmallCss } from './css/bs-column-xs.css.js';
import { BsColumnSmallCss } from './css/bs-column-sm.css.js';
import { BsColumnMediumCss } from './css/bs-column-md.css.js';
import { BsColumnLargeCss } from './css/bs-column-lg.css.js';
import { BsColumnExtraLargeCss } from './css/bs-column-xl.css.js';

export class BsColumn extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsColumnExtraSmallCss,
            BsColumnSmallCss,
            BsColumnMediumCss,
            BsColumnLargeCss,
            BsColumnExtraLargeCss
        ];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }
};

if(!window.customElements.get('bs-column'))
    window.customElements.define('bs-column', BsColumn);
