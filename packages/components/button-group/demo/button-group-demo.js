
import { LitElement, html, css } from 'lit-element';
import { DefaultThemeCss } from '@lit-element-bootstrap/theme/default-theme-css.js';
import { BsContentTypographyCss } from '@lit-element-bootstrap/content/bs-content-typography.css.js';
import { BsButtonSecondaryCss } from '@lit-element-bootstrap/button/css/bs-button-secondary.css';
import { BsFlexJustifyCss } from '@lit-element-bootstrap/utilities/bs-flex-justify.css.js';

import '@lit-element-bootstrap/button/bs-button.js';
import '@lit-element-bootstrap/form/bs-form-input.js';
import '@lit-element-bootstrap/dropdown/bs-dropdown.js';
import '@lit-element-bootstrap/dropdown/bs-dropdown-menu.js';
import '@lit-element-bootstrap/dropdown/bs-dropdown-item-link.js';
import '@lit-element-bootstrap/dropdown/bs-dropdown-divider.js';
import '@lit-element-bootstrap/input-group/bs-input-group.js';
import '@lit-element-bootstrap/input-group/bs-input-group-text.js';
import '@lit-element-bootstrap/input-group/bs-input-group-prepend.js';

import '../src/bs-button-group.js';
import '../src/bs-button-toolbar.js';

export class ButtonGroupDemo extends LitElement {

    static get styles() {
        return [
            DefaultThemeCss,
            BsContentTypographyCss,
            BsButtonSecondaryCss,
            BsFlexJustifyCss,
            css`
                .container {
                    padding-left: 15px;
                    padding-right: 15px;
                }

                .mr-2 {
                    margin-right: 0.5rem;
                }

                .mb-3 {
                    margin-bottom: 1rem;
                }
            `
        ];
    }

    render() {
        return html`

            <div class="container">

                <h1>Button Group Demo</h1>

                <br />

                <div>
                    <bs-button-group direction="horizontal">
                        <bs-button context="secondary">Left</bs-button>
                        <bs-button context="secondary">Middle</bs-button>
                        <bs-button context="secondary">Right</bs-button>
                    </bs-button-group>
                </div>

                <br />
                <div>
                    <bs-button-toolbar>
                        <bs-button-group direction="horizontal" class="mr-2">
                            <bs-button context="secondary">1</bs-button>
                            <bs-button context="secondary">2</bs-button>
                            <bs-button context="secondary">3</bs-button>
                            <bs-button context="secondary">4</bs-button>
                        </bs-button-group>
                        <bs-button-group direction="horizontal" class="mr-2">
                            <bs-button context="secondary">5</bs-button>
                            <bs-button context="secondary">6</bs-button>
                            <bs-button context="secondary">7</bs-button>
                        </bs-button-group>
                        <bs-button-group direction="horizontal" class="mr-2">
                            <bs-button context="secondary">8</bs-button>
                        </bs-button-group>
                    </bs-button-toolbar>
                </div>

                <br />
                <div>
                    <bs-button-toolbar class="mb-3">
                        <bs-button-group direction="horizontal" class="mr-2">
                            <bs-button context="secondary">1</bs-button>
                            <bs-button context="secondary">2</bs-button>
                            <bs-button context="secondary">3</bs-button>
                            <bs-button context="secondary">4</bs-button>
                        </bs-button-group>
                        <bs-input-group>
                            <bs-input-group-prepend>
                                <bs-input-group-text>@</bs-input-group-text>
                            </bs-input-group-prepend>
                            <bs-form-input placeholder="Input group example"></bs-form-input>
                        </bs-input-group>
                    </bs-button-toolbar>
                </div>
                <div>
                    <bs-button-toolbar class="justify-content-between">
                        <bs-button-group direction="horizontal">
                            <bs-button context="secondary">1</bs-button>
                            <bs-button context="secondary">2</bs-button>
                            <bs-button context="secondary">3</bs-button>
                            <bs-button context="secondary">4</bs-button>
                        </bs-button-group>
                        <bs-input-group>
                            <bs-input-group-prepend>
                                <bs-input-group-text>@</bs-input-group-text>
                            </bs-input-group-prepend>
                            <bs-form-input placeholder="Input group example"></bs-form-input>
                        </bs-input-group>
                    </bs-button-toolbar>
                </div>

                <br />
                <div>
                    <bs-button-group size="large">
                        <bs-button context="secondary">Left</bs-button>
                        <bs-button context="secondary">Middle</bs-button>
                        <bs-button context="secondary">Right</bs-button>
                    </bs-button-group>

                    <bs-button-group>
                        <bs-button context="secondary">Left</bs-button>
                        <bs-button context="secondary">Middle</bs-button>
                        <bs-button context="secondary">Right</bs-button>
                    </bs-button-group>

                    <bs-button-group size="small">
                        <bs-button context="secondary">Left</bs-button>
                        <bs-button context="secondary">Middle</bs-button>
                        <bs-button context="secondary">Right</bs-button>
                    </bs-button-group>
                </div>

                <br />
                <div>
                    <bs-button-group direction="horizontal">
                        <bs-button context="secondary">1</bs-button>
                        <bs-button context="secondary">2</bs-button>
                        <bs-button-group>
                            <bs-dropdown>
                                <bs-button context="secondary" dropdown-toggle>Dropdown</bs-button>
                                <bs-dropdown-menu down x-placement="bottom-start">
                                    <bs-dropdown-item-link index="0" title="Dropdown link"></bs-dropdown-item-link>
                                    <bs-dropdown-item-link index="1" title="Dropdown link"></bs-dropdown-item-link>
                                </bs-dropdown-menu>
                            </bs-dropdown>
                        </bs-button-group>
                    </bs-button-group>
                </div>

                <br />
                <div>
                    <bs-button-group direction="horizontal">
                        <bs-button-group>
                            <bs-dropdown>
                                <bs-button context="secondary" dropdown-toggle>Dropdown</bs-button>
                                <bs-dropdown-menu down x-placement="bottom-start">
                                    <bs-dropdown-item-link index="0" title="Dropdown link"></bs-dropdown-item-link>
                                    <bs-dropdown-item-link index="1" title="Dropdown link"></bs-dropdown-item-link>
                                </bs-dropdown-menu>
                            </bs-dropdown>
                        </bs-button-group>
                        <bs-button context="secondary">1</bs-button>
                        <bs-button context="secondary">2</bs-button>
                    </bs-button-group>
                </div>

                <br />
                <div>
                    <bs-button-group direction="horizontal">
                        <bs-button context="secondary">1</bs-button>
                        <bs-button-group>
                            <bs-dropdown>
                                <bs-button context="secondary" dropdown-toggle>Dropdown</bs-button>
                                <bs-dropdown-menu down x-placement="bottom-start">
                                    <bs-dropdown-item-link index="0" title="Dropdown link"></bs-dropdown-item-link>
                                    <bs-dropdown-item-link index="1" title="Dropdown link"></bs-dropdown-item-link>
                                </bs-dropdown-menu>
                            </bs-dropdown>
                        </bs-button-group>
                        <bs-button context="secondary">2</bs-button>
                    </bs-button-group>
                </div>

                <br />
                <div>
                    <bs-button-group direction="vertical">
                        <bs-button context="secondary">Button</bs-button>
                        <bs-button context="secondary">Button</bs-button>
                        <bs-button context="secondary">Button</bs-button>
                        <bs-button context="secondary">Button</bs-button>
                        <bs-button context="secondary">Button</bs-button>
                        <bs-button context="secondary">Button</bs-button>
                    </bs-button-group>
                </div>

                <br />
                <div>
                    <bs-button-group direction="vertical">
                        <bs-button context="secondary">Button</bs-button>
                        <bs-button context="secondary">Button</bs-button>
                        <bs-button-group>
                            <bs-dropdown>
                                <bs-button context="secondary" dropdown-toggle>Dropdown</bs-button>
                                <bs-dropdown-menu down x-placement="bottom-start">
                                    <bs-dropdown-item-link index="0" title="Dropdown link"></bs-dropdown-item-link>
                                    <bs-dropdown-item-link index="1" title="Dropdown link"></bs-dropdown-item-link>
                                </bs-dropdown-menu>
                            </bs-dropdown>
                        </bs-button-group>
                        <bs-button context="secondary">Button</bs-button>
                        <bs-button context="secondary">Button</bs-button>
                        <bs-button-group>
                            <bs-dropdown>
                                <bs-button context="secondary" dropdown-toggle>Dropdown</bs-button>
                                <bs-dropdown-menu down x-placement="bottom-start">
                                    <bs-dropdown-item-link index="0" title="Dropdown link"></bs-dropdown-item-link>
                                    <bs-dropdown-item-link index="1" title="Dropdown link"></bs-dropdown-item-link>
                                </bs-dropdown-menu>
                            </bs-dropdown>
                        </bs-button-group>
                        <bs-button-group>
                            <bs-dropdown>
                                <bs-button context="secondary" dropdown-toggle>Dropdown</bs-button>
                                <bs-dropdown-menu down x-placement="bottom-start">
                                    <bs-dropdown-item-link index="0" title="Dropdown link"></bs-dropdown-item-link>
                                    <bs-dropdown-item-link index="1" title="Dropdown link"></bs-dropdown-item-link>
                                </bs-dropdown-menu>
                            </bs-dropdown>
                        </bs-button-group>
                        <bs-button-group>
                            <bs-dropdown>
                                <bs-button context="secondary" dropdown-toggle>Dropdown</bs-button>
                                <bs-dropdown-menu down x-placement="bottom-start">
                                    <bs-dropdown-item-link index="0" title="Dropdown link"></bs-dropdown-item-link>
                                    <bs-dropdown-item-link index="1" title="Dropdown link"></bs-dropdown-item-link>
                                </bs-dropdown-menu>
                            </bs-dropdown>
                        </bs-button-group>
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

window.customElements.define('button-group-demo', ButtonGroupDemo);
