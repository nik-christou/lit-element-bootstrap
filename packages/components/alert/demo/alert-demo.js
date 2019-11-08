
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot.css.js';
import { DefaultThemeCss } from '@lit-element-bootstrap/theme/default-theme-css.js';

import '../src/bs-alert.js';
import '../src/bs-alert-hr.js';
import '../src/bs-alert-link.js';
import '../src/bs-alert-dismiss.js';

export class AlertDemo extends LitElement {

    static get properties() {
        return {};
    }

    static get styles() {
        return [
            BsContentRebootCss,
            DefaultThemeCss,
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

                <h1>Alert Demo</h1>

                <bs-alert context="primary">
                    <div>A simple primary alert—check it out!</div>
                </bs-alert>

                <bs-alert context="secondary">
                    <div>A simple primary alert—check it out!</div>
                </bs-alert>

                <bs-alert context="success">
                    <div>A simple primary alert—check it out!</div>
                </bs-alert>

                <bs-alert context="danger">
                    <div>A simple primary alert—check it out!</div>
                </bs-alert>

                <bs-alert context="warning">
                    <div>A simple primary alert—check it out!</div>
                </bs-alert>

                <bs-alert context="info">
                    <div>A simple primary alert—check it out!</div>
                </bs-alert>

                <bs-alert context="light">
                    <div>A simple primary alert—check it out!</div>
                </bs-alert>

                <bs-alert context="dark">
                    <div>A simple primary alert—check it out!</div>
                </bs-alert>

                <bs-alert context="primary">
                    <div>A simple primary alert with <bs-alert-link context="primary">an example link</bs-alert-link>. Give it a click if you like.</div>
                </bs-alert>

                <bs-alert context="secondary">
                    <div>A simple primary alert with <bs-alert-link context="secondary">an example link</bs-alert-link>. Give it a click if you like.</div>
                </bs-alert>

                <bs-alert context="success">
                    <div>A simple primary alert with <bs-alert-link context="success">an example link</bs-alert-link>. Give it a click if you like.</div>
                </bs-alert>

                <bs-alert context="danger">
                    <div>A simple primary alert with <bs-alert-link context="danger">an example link</bs-alert-link>. Give it a click if you like.</div>
                </bs-alert>

                <bs-alert context="warning">
                    <div>A simple primary alert with <bs-alert-link context="warning">an example link</bs-alert-link>. Give it a click if you like.</div>
                </bs-alert>

                <bs-alert context="info">
                    <div>A simple primary alert with <bs-alert-link context="info">an example link</bs-alert-link>. Give it a click if you like.</div>
                </bs-alert>

                <bs-alert context="light">
                    <div>A simple primary alert with <bs-alert-link context="light">an example link</bs-alert-link>. Give it a click if you like.</div>
                </bs-alert>

                <bs-alert context="dark">
                    <div>A simple primary alert with <bs-alert-link context="dark">an example link</bs-alert-link>. Give it a click if you like.</div>
                </bs-alert>

                <bs-alert context="success">
                    <h4 slot="heading">Well done!</h4>
                    <div>
                        Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
                        <bs-alert-hr context="success"></bs-alert-hr>
                        <p>Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                    </div>
                </bs-alert>

                <bs-alert id="dismissableDemo" context="warning" dismissable>
                    <div>
                        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                    </div>
                    <bs-alert-dismiss slot="dismiss"></bs-alert-dismiss>
                </bs-alert>

            </div>
        `;
    }

    constructor() {
        super();
    }

    firstUpdated() {

        const dismissableDemo = this.shadowRoot.querySelector('#dismissableDemo');
        dismissableDemo.addEventListener('closed.bs.alert', _ => {
            dismissableDemo.remove();
        });
    }
};

window.customElements.define('alert-demo', AlertDemo);
