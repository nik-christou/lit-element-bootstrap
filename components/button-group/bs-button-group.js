
import { LitElement, html } from 'lit-element';
import { BsContentRebootCss } from '../../content';
import { BsButtonGroupCss } from './bs-button-group-css.js';
import { BsButtonGroupHorizontalCss } from './bs-button-group-horizontal-css.js';
import { BsButtonGroupVerticalCss } from './bs-button-group-vertical-css.js';
import { BsButtonGroupLargeCss } from './bs-button-group-large-css.js';
import { BsButtonGroupSmallCss } from './bs-button-group-small-css.js';

export class BsButtonGroup extends LitElement {
    
    static get properties() {
        return {
            small: {type: Boolean, reflect: true},
            large: {type: Boolean, reflect: true},
            vertical: {type: Boolean, reflect: true},
            horizontal: {type: Boolean, reflect: true}
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsButtonGroupHorizontalCss,
            BsButtonGroupVerticalCss,
            BsButtonGroupLargeCss,
            BsButtonGroupSmallCss,
            BsButtonGroupCss
        ];
    }
    
    render() {
        return html`
            <slot></slot>
        `;
    }
    
    constructor() {
        super();
        this.small = false;
        this.large = false;
        this.vertical = false;
        this.horizontal = false;
    }
};

window.customElements.define('bs-button-group', BsButtonGroup);