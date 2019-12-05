
import { LitElement, html, css } from 'lit-element';
import { DefaultThemeCss } from '@lit-element-bootstrap/theme';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';
import { BsContentTypographyCss } from '@lit-element-bootstrap/content';

import '@lit-element-bootstrap/button/bs-button.js';

import '../bs-badge.js';
import '../bs-badge-link.js';

export class BadgeDemo extends LitElement {

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

                <h1>Badge Demo</h1>

                <br />

                <h1>Example heading <bs-badge context="secondary">New</bs-badge></h1>
                <h2>Example heading <bs-badge context="secondary">New</bs-badge></h2>
                <h3>Example heading <bs-badge context="secondary">New</bs-badge></h3>
                <h4>Example heading <bs-badge context="secondary">New</bs-badge></h4>
                <h5>Example heading <bs-badge context="secondary">New</bs-badge></h5>
                <h6>Example heading <bs-badge context="secondary">New</bs-badge></h6>

                <br />

                <bs-button primary> Notifications
                    <bs-badge context="light">4</bs-badge>
                </bs-button>

                <br />
                <br />

                <span><bs-badge context="primary">Primary</bs-badge></span>
                <span><bs-badge context="secondary">Seconday</bs-badge></span>
                <span><bs-badge context="success">Success</bs-badge></span>
                <span><bs-badge context="info">Info</bs-badge></span>
                <span><bs-badge context="warning">Warining</bs-badge></span>
                <span><bs-badge context="danger">Danger</bs-badge></span>
                <span><bs-badge context="light">Light</bs-badge></span>
                <span><bs-badge context="dark">Dark</bs-badge></span>

                <br />
                <br />

                <span><bs-badge pill context="primary">Primary</bs-badge></span>
                <span><bs-badge pill context="secondary">Seconday</bs-badge></span>
                <span><bs-badge pill context="success">Success</bs-badge></span>
                <span><bs-badge pill context="info">Info</bs-badge></span>
                <span><bs-badge pill context="warning">Warining</bs-badge></span>
                <span><bs-badge pill context="danger">Danger</bs-badge></span>
                <span><bs-badge pill context="light">Light</bs-badge></span>
                <span><bs-badge pill context="dark">Dark</bs-badge></span>

                <br />
                <br />

                <bs-badge-link context="primary">Primary</bs-badge-link>
                <bs-badge-link context="secondary">Secondary</bs-badge-link>
                <bs-badge-link context="success">Success</bs-badge-link>
                <bs-badge-link context="info">Info</bs-badge-link>
                <bs-badge-link context="warning">Warning</bs-badge-link>
                <bs-badge-link context="danger">Danger</bs-badge-link>
                <bs-badge-link context="light">Light</bs-badge-link>
                <bs-badge-link context="dark">Dark</bs-badge-link>

                <br />
                <br />

            </div>
        `;
    }

    constructor() {
        super();
    }
};

window.customElements.define('badge-demo', BadgeDemo);
