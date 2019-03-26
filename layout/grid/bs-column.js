
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';
import { BsColumnExtraSmallCss } from './bs-col-xs-css';
import { BsColumnSmallCss } from './bs-col-sm-css';
import { BsColumnMediumCss } from './bs-col-md-css';
import { BsColumnLargeCss } from './bs-col-lg-css';
import { BsColumnExtraLargeCss } from './bs-col-xl-css';

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