
import { LitElement, html, css } from 'lit-element';
import { DefaultThemeCss } from '@lit-element-bootstrap/theme/default-theme-css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot.css.js';
import { BsContentTypographyCss } from '@lit-element-bootstrap/content/bs-content-typography.css.js';

// import '@lit-element-bootstrap/button/bs-button.js';

import '../src/bs-breadcrumb.js';
import '../src/bs-breadcrumb-item.js';

export class BreadcrumbDemo extends LitElement {

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

                .arrowSeparator {
                    --breadcrumb-item-divider-content: ">";
                }

                .svgSeparator {
                    --breadcrumb-item-divider-content: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxwYXRoIGQ9Ik0yLjUgMEwxIDEuNSAzLjUgNCAxIDYuNSAyLjUgOGw0LTQtNC00eiIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9zdmc+);
                }
            `
        ];
    }

    render() {
        return html`

            <div class="container">

                <h1>Breadcrumb Demo</h1>

                <br />

                <bs-breadcrumb>
                    <bs-breadcrumb-item title="Home" href="/home" active></bs-breadcrumb-item>
                </bs-breadcrumb>

                <bs-breadcrumb>
                    <bs-breadcrumb-item title="Home" href="/home"></bs-breadcrumb-item>
                    <bs-breadcrumb-item title="Library" href="/library" active></bs-breadcrumb-item>
                </bs-breadcrumb>

                <bs-breadcrumb>
                    <bs-breadcrumb-item title="Home" href="/home"></bs-breadcrumb-item>
                    <bs-breadcrumb-item title="Library" href="/library"></bs-breadcrumb-item>
                    <bs-breadcrumb-item title="Data" href="/data" active></bs-breadcrumb-item>
                </bs-breadcrumb>

                <bs-breadcrumb class="arrowSeparator">
                    <bs-breadcrumb-item title="Home" href="/home"></bs-breadcrumb-item>
                    <bs-breadcrumb-item title="Library" href="/library" active></bs-breadcrumb-item>
                </bs-breadcrumb>

                <bs-breadcrumb class="svgSeparator">
                    <bs-breadcrumb-item title="Home" href="/home"></bs-breadcrumb-item>
                    <bs-breadcrumb-item title="Library" href="/library" active></bs-breadcrumb-item>
                </bs-breadcrumb>

            </div>
        `;
    }

    constructor() {
        super();
    }
};

window.customElements.define('breadcrumb-demo', BreadcrumbDemo);
