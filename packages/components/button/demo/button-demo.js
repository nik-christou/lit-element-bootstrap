
import { LitElement, html, css } from 'lit-element';
import { DefaultThemeCss } from '@lit-element-bootstrap/theme/default-theme-css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot.css.js';
import { BsContentTypographyCss } from '@lit-element-bootstrap/content/bs-content-typography.css.js';

import '../src/bs-button.js';
import '../src/bs-input-button.js';
import '../src/bs-link-button.js';

export class ButtonDemo extends LitElement {

    static get properties() {
        return {};
    }

    static get styles() {
        return [
            BsContentRebootCss,
            DefaultThemeCss,
            BsContentTypographyCss,
            css`
                .container {
                    padding-left: 15px;
                    padding-right: 15px;
                }
            `
        ];
    }

    render() {
        return html`

            <div class="container">

                <h1>Button Demo</h1>

                <br />
                <div>
                    <bs-button primary>Primary</bs-button>
                    <bs-button secondary>Secondary</bs-button>
                    <bs-button success>Success</bs-button>
                    <bs-button danger>Danger</bs-button>
                    <bs-button warning>Warning</bs-button>
                    <bs-button info>Info</bs-button>
                    <bs-button light>Light</bs-button>
                    <bs-button dark>Dark</bs-button>
                    <bs-button link>Link</bs-button>
                </div>

                <br />
                <div>
                    <bs-link-button primary>Link</bs-link-button>
                    <bs-button primary button-type="submit">Button</bs-button>
                    <bs-input-button primary label="Input"></bs-input-button>
                    <bs-input-button primary label="Submit" button-type="submit"></bs-input-button>
                    <bs-input-button primary label="Reset" button-type="reset"></bs-input-button>
                </div>

                <br />
                <div>
                    <bs-button outline-primary>Primary</bs-button>
                    <bs-button outline-secondary>Secondary</bs-button>
                    <bs-button outline-success>Success</bs-button>
                    <bs-button outline-danger>Danger</bs-button>
                    <bs-button outline-warning>Warning</bs-button>
                    <bs-button outline-info>Info</bs-button>
                    <bs-button outline-light>Light</bs-button>
                    <bs-button outline-dark>Dark</bs-button>
                    <bs-button outline-link>Link</bs-button>
                </div>

                <br />
                <div>
                    <bs-button primary large>Large button</bs-button>
                    <bs-button secondary large>Large button</bs-button>
                </div>

                <br />
                <div>
                    <bs-button primary large block>Block level button</bs-button>
                    <bs-button secondary large block>Block level button</bs-button>

                    <bs-input-button label="Input Block level button" primary large block></bs-input-button>
                    <bs-input-button label="Input Block level button" secondary large block></bs-input-button>
                </div>

                <br />
                <div>
                    <bs-link-button active>Basic</bs-link-button>
                    <bs-link-button primary active>Primary</bs-link-button>
                    <bs-link-button secondary active>Secondary</bs-link-button>
                    <bs-link-button success active>Success</bs-link-button>
                    <bs-link-button danger active>Danger</bs-link-button>
                    <bs-link-button warning active>Warning</bs-link-button>
                    <bs-link-button info active>Info</bs-link-button>
                    <bs-link-button light active>Light</bs-link-button>
                    <bs-link-button dark active>Dark</bs-link-button>
                    <bs-link-button link active>Link</bs-link-button>
                </div>

                <br />
                <div>
                    <bs-button disabled>Basic</bs-button>
                    <bs-button primary disabled>Primary</bs-button>
                    <bs-button secondary disabled>Secondary</bs-button>
                    <bs-button success disabled>Success</bs-button>
                    <bs-button danger disabled>Danger</bs-button>
                    <bs-button warning disabled>Warning</bs-button>
                    <bs-button info disabled>Info</bs-button>
                    <bs-button light disabled>Light</bs-button>
                    <bs-button dark disabled>Dark</bs-button>
                    <bs-button link disabled>Link</bs-button>
                </div>

                <br />
                <div>
                    <bs-link-button disabled>Basic</bs-link-button>
                    <bs-link-button primary disabled>Primary</bs-link-button>
                    <bs-link-button secondary disabled>Secondary</bs-link-button>
                    <bs-link-button success disabled>Success</bs-link-button>
                    <bs-link-button danger disabled>Danger</bs-link-button>
                    <bs-link-button warning disabled>Warning</bs-link-button>
                    <bs-link-button info disabled>Info</bs-link-button>
                    <bs-link-button light disabled>Light</bs-link-button>
                    <bs-link-button dark disabled>Dark</bs-link-button>
                </div>

                <br />
                <div>
                    <bs-button primary toggle>Single toggle</bs-button>
                </div>
            </div>
        `;
    }

    constructor() {
        super();
    }
};

window.customElements.define('button-demo', ButtonDemo);
