
import { LitElement, html, css } from 'lit-element';
import { DefaultThemeCss } from '@lit-element-bootstrap/theme/default-theme-css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot.css.js';
import { BsContentTypographyCss } from '@lit-element-bootstrap/content/bs-content-typography.css.js';

import '@lit-element-bootstrap/dropdown/bs-dropdown.js';
import '@lit-element-bootstrap/dropdown/bs-dropdown-menu.js';
import '@lit-element-bootstrap/dropdown/bs-dropdown-item-link.js';
import '@lit-element-bootstrap/dropdown/bs-dropdown-divider.js';
import '@lit-element-bootstrap/button-group/bs-button-group.js';

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
                    <bs-button primary toggle disabled>Single toggle</bs-button>
                </div>

                <br />
                <div>
                    <bs-dropdown>
                        <bs-button primary dropdown-toggle>Primary</bs-button>
                        <bs-dropdown-menu down x-placement="bottom-start">
                            <bs-dropdown-item-link title="Action" index="0"></bs-dropdown-item-link>
                            <bs-dropdown-item-link title="Another action" index="1"></bs-dropdown-item-link>
                            <bs-dropdown-item-link title="Something else here" index="2"></bs-dropdown-item-link>
                            <bs-dropdown-divider></bs-dropdown-divider>
                            <bs-dropdown-item-link title="Separated link" index="3"></bs-dropdown-item-link>
                        </bs-dropdown-menu>
                    </bs-dropdown>
                </div>

                <br />
                <div>
                    <bs-button-group horizontal>
                        <bs-button secondary toggle>Left</bs-button>
                        <bs-button active secondary toggle>Middle</bs-button>
                        <bs-button secondary toggle>Right</bs-button>
                    </bs-button-group>
                </div>

                <br />
                <br />
            </div>
        `;
    }

    constructor() {
        super();
    }
};

window.customElements.define('button-demo', ButtonDemo);
