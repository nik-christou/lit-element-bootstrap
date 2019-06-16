
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';
import { BsColumnExtraSmallCss } from './bs-column-xs-css';
import { BsColumnSmallCss } from './bs-column-sm-css';
import { BsColumnMediumCss } from './bs-column-md-css';
import { BsColumnLargeCss } from './bs-column-lg-css';
import { BsColumnExtraLargeCss } from './bs-column-xl-css';

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

window.customElements.define('bs-column', BsColumn);