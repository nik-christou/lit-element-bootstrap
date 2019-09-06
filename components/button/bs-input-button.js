
import { LitElement, html } from 'lit-element';
import { BsContentRebootCss, BsContentTypographyCss } from '@lit-element-bootstrap/content';

import { BsButtonMixin } from './bs-button-mixin.js';
import { BsButtonsCommonCss } from './css/bs-button-common-css.js';
import { BsButtonPrimaryCss } from './css/bs-button-primary-css.js';
import { BsButtonSecondaryCss } from './css/bs-button-secondary-css.js';
import { BsButtonSuccessCss } from './css/bs-button-success-css.js';
import { BsButtonInfoCss } from './css/bs-button-info-css.js';
import { BsButtonWarningCss } from './css/bs-button-warning-css.js';
import { BsButtonDangerCss } from './css/bs-button-danger-css.js';
import { BsButtonLightCss } from './css/bs-button-light-css.js';
import { BsButtonDarkCss } from './css/bs-button-dark-css.js';
import { BsButtonPrimaryOutlineCss } from './css/bs-button-primary-outline-css.js';
import { BsButtonSecondaryOutlineCss } from './css/bs-button-secondary-outline-css.js';
import { BsButtonSuccessOutlineCss } from './css/bs-button-success-outline-css.js';
import { BsButtonInfoOutlineCss } from './css/bs-button-info-outline-css.js';
import { BsButtonWarningOutlineCss } from './css/bs-button-warning-outline-css.js';
import { BsButtonDangerOutlineCss } from './css/bs-button-danger-outline-css.js';
import { BsButtonLightOutlineCss } from './css/bs-button-light-outline-css.js';
import { BsButtonDarkOutlineCss } from './css/bs-button-dark-outline-css.js';
import { BsButtonLinkCss } from './css/bs-button-link-css.js';
import { BsButtonBlockCss } from './css/bs-button-block-css.js';
import { BsButtonLargeCss } from './css/bs-button-large-css.js';
import { BsButtonSmallCss } from './css/bs-button-small-css.js';

export class BsInputButton extends BsButtonMixin(LitElement) {
    
    static get properties() {
        return {
            label: String
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsButtonsCommonCss,
            BsButtonPrimaryCss,
            BsButtonSecondaryCss,
            BsButtonSuccessCss,
            BsButtonInfoCss,
            BsButtonWarningCss,
            BsButtonDangerCss,
            BsButtonLightCss,
            BsButtonDarkCss,
            BsButtonPrimaryOutlineCss,
            BsButtonSecondaryOutlineCss,
            BsButtonSuccessOutlineCss,
            BsButtonInfoOutlineCss,
            BsButtonWarningOutlineCss,
            BsButtonDangerOutlineCss,
            BsButtonLightOutlineCss,
            BsButtonDarkOutlineCss,
            BsButtonLinkCss,
            BsButtonBlockCss,
            BsButtonLargeCss,
            BsButtonSmallCss
        ];
    }
    
    render() {
        return html`
            <input class="btn" value="${this.label}" />
        `;
    }
    
    constructor() {
        super();
        this.label = '';
    }
};

if (!window.customElements.get("bs-input-button"))  
    window.customElements.define('bs-input-button', BsInputButton);

