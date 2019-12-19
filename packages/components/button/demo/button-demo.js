
import { LitElement, html, css } from 'lit-element';
import { DefaultThemeCss } from '@lit-element-bootstrap/theme/default-theme-css.js';
import { BsContentTypographyCss } from '@lit-element-bootstrap/content/bs-content-typography.css.js';

import { BsButtonPrimaryCss } from '../src/css/bs-button-primary.css.js';
import { BsButtonSecondaryCss } from '../src/css/bs-button-secondary.css.js';
import { BsButtonSuccessCss } from '../src/css/bs-button-success.css.js';
import { BsButtonDangerCss } from '../src/css/bs-button-danger.css.js';
import { BsButtonWarningCss } from '../src/css/bs-button-warning.css.js';
import { BsButtonInfoCss } from '../src/css/bs-button-info.css.js';
import { BsButtonLightCss } from '../src/css/bs-button-light.css.js';
import { BsButtonDarkCss } from '../src/css/bs-button-dark.css.js';
import { BsButtonLinkCss } from '../src/css/bs-button-link.css.js';
import { BsButtonSizeCss } from '../src/css/bs-button-size.css.js';
import { BsButtonBlockCss } from '../src/css/bs-button-block.css.js';

import '@lit-element-bootstrap/dropdown/bs-dropdown.js';
import '@lit-element-bootstrap/dropdown/bs-dropdown-menu.js';
import '@lit-element-bootstrap/dropdown/bs-dropdown-item-link.js';
import '@lit-element-bootstrap/dropdown/bs-dropdown-divider.js';
import '@lit-element-bootstrap/button-group/bs-button-group.js';

import '../src/bs-button.js';
import '../src/bs-button-input.js';
import '../src/bs-button-link.js';

export class ButtonDemo extends LitElement {

    static get styles() {
        return [
            DefaultThemeCss,
            BsContentTypographyCss,
            BsButtonPrimaryCss,
            BsButtonSecondaryCss,
            BsButtonSuccessCss,
            BsButtonDangerCss,
            BsButtonWarningCss,
            BsButtonInfoCss,
            BsButtonLightCss,
            BsButtonDarkCss,
            BsButtonLinkCss,
            BsButtonSizeCss,
            BsButtonBlockCss,
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
                    <bs-button context="primary">Primary</bs-button>
                    <bs-button context="secondary">Secondary</bs-button>
                    <bs-button context="success">Success</bs-button>
                    <bs-button context="danger">Danger</bs-button>
                    <bs-button context="warning">Warning</bs-button>
                    <bs-button context="info">Info</bs-button>
                    <bs-button context="light">Light</bs-button>
                    <bs-button context="dark">Dark</bs-button>
                    <bs-button context="link">Link</bs-button>
                </div>

                <br />
                <div>
                    <bs-button context="primary" type="button">Button</bs-button>
                    <bs-button context="primary" type="reset">Reset</bs-button>
                    <bs-button context="primary" type="submit">Submit</bs-button>
                </div>

                <br />
                <div>
                    <bs-button-link context="primary">Link</bs-button-link>
                    <bs-button context="primary" type="submit">Button</bs-button>
                    <bs-button-input context="primary" label="Input"></bs-button-input>
                    <bs-button-input context="primary" label="Submit"></bs-button-input>
                    <bs-button-input context="primary" label="Reset"></bs-button-input>
                </div>

                <br />
                <div>
                    <bs-button context="primary" outline>Primary</bs-button>
                    <bs-button context="secondary" outline>Secondary</bs-button>
                    <bs-button context="success" outline>Success</bs-button>
                    <bs-button context="danger" outline>Danger</bs-button>
                    <bs-button context="warning" outline>Warning</bs-button>
                    <bs-button context="info" outline>Info</bs-button>
                    <bs-button context="light" outline>Light</bs-button>
                    <bs-button context="dark" outline>Dark</bs-button>
                </div>

                <br />
                <div>
                    <bs-button context="primary" size="large">Large button</bs-button>
                    <bs-button context="secondary" size="large">Large button</bs-button>
                </div>

                <br />
                <div>
                    <bs-button context="primary" size="small">Small button</bs-button>
                    <bs-button context="secondary" size="small">Small button</bs-button>
                </div>

                <br />
                <div>
                    <bs-button context="primary" size="large" block>Block level button</bs-button>
                    <bs-button context="secondary" size="large" block>Block level button</bs-button>

                    <bs-button-input label="Input Block level button" context="primary" size="large" block></bs-button-input>
                    <bs-button-input label="Input Block level button" context="secondary" size="large" block></bs-button-input>
                </div>

                <br />
                <div>
                    <bs-button-link active>Basic</bs-button-link>
                    <bs-button-link context="primary" active>Primary</bs-button-link>
                    <bs-button-link context="secondary" active>Secondary</bs-button-link>
                    <bs-button-link context="success" active>Success</bs-button-link>
                    <bs-button-link context="danger" active>Danger</bs-button-link>
                    <bs-button-link context="warning" active>Warning</bs-button-link>
                    <bs-button-link context="info" active>Info</bs-button-link>
                    <bs-button-link context="light" active>Light</bs-button-link>
                    <bs-button-link context="dark" active>Dark</bs-button-link>
                    <bs-button-link link active>Link</bs-button-link>
                </div>

                <br />
                <div>
                    <bs-button disabled>Basic</bs-button>
                    <bs-button context="primary" disabled>Primary</bs-button>
                    <bs-button context="secondary" disabled>Secondary</bs-button>
                    <bs-button context="success" disabled>Success</bs-button>
                    <bs-button context="danger" disabled>Danger</bs-button>
                    <bs-button context="warning" disabled>Warning</bs-button>
                    <bs-button context="info" disabled>Info</bs-button>
                    <bs-button context="light" disabled>Light</bs-button>
                    <bs-button context="dark" disabled>Dark</bs-button>
                    <bs-button link disabled>Link</bs-button>
                </div>

                <br />
                <h5>bs-button-link disabled</h5>
                <div>
                    <bs-button-link disabled>Basic</bs-button-link>
                    <bs-button-link href="www.google.com" context="primary" disabled>Primary</bs-button-link>
                    <bs-button-link context="secondary" disabled>Secondary</bs-button-link>
                    <bs-button-link context="success" disabled>Success</bs-button-link>
                    <bs-button-link context="danger" disabled>Danger</bs-button-link>
                    <bs-button-link context="warning" disabled>Warning</bs-button-link>
                    <bs-button-link context="info" disabled>Info</bs-button-link>
                    <bs-button-link context="light" disabled>Light</bs-button-link>
                    <bs-button-link context="dark" disabled>Dark</bs-button-link>
                </div>

                <br />
                <div>
                    <bs-button context="primary" toggle>Primary toggle</bs-button>
                    <bs-button context="primary" toggle disabled>Primary toggle</bs-button>
                </div>
                <br />
                <div>
                    <bs-button context="secondary" toggle>Secondary toggle</bs-button>
                    <bs-button context="secondary" toggle disabled>Secondary toggle</bs-button>
                </div>
                <br />
                <div>
                    <bs-button context="success" toggle>Success toggle</bs-button>
                    <bs-button context="success" toggle disabled>Success toggle</bs-button>
                </div>

                <br />
                <div>
                    <bs-dropdown>
                        <bs-button context="primary" dropdown-toggle>Primary</bs-button>
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
                    <bs-dropdown>
                        <bs-button context="success" dropdown-toggle>Secondary</bs-button>
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
                        <bs-button context="secondary" toggle>Left</bs-button>
                        <bs-button context="secondary" toggle active>Middle</bs-button>
                        <bs-button context="secondary" toggle>Right</bs-button>
                    </bs-button-group>
                </div>

                <br />
                <div>
                    <bs-button-group horizontal>
                        <bs-button context="dark" toggle>Left</bs-button>
                        <bs-button context="dark" toggle active>Middle</bs-button>
                        <bs-button context="dark" toggle>Right</bs-button>
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
