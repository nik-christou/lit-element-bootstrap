
import { LitElement, html, css} from 'lit-element';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';
import { DefaultThemeCss } from '@lit-element-bootstrap/theme';

import '@lit-element-bootstrap/button/bs-button.js';

import '../src/bs-form.js';
import '../src/bs-form-input.js';
import '../src/bs-form-group.js';
import '../src/bs-form-label.js';
import '../src/bs-form-input-feedback.js';
import '../src/bs-form-help-text.js';
import '../src/bs-form-check-group.js';
import '../src/bs-form-check-label.js';
import '../src/bs-form-checkbox-input.js';

export class FormDemo extends LitElement {

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

            <bs-form>
                <bs-form-group>
                    <bs-form-label slot="label">Email address</bs-form-label>
                    <bs-form-input slot="control" required type="email" name="email" placeholder="Enter email"></bs-form-input>
                    <bs-form-input-feedback
                        slot="feedback"
                        valid-value-msg="Valid email address"
                        missing-value-msg="Please enter an email address"
                        mismatch-value-msg="Please enter a valid email address">
                    </bs-form-input-feedback>
                    <bs-form-help-text slot="helptext">We'll never share your email with anyone else.</bs-form-help-text>
                </bs-form-group>
                <bs-form-group>
                    <bs-form-label slot="label">Password</bs-form-label>
                    <bs-form-input slot="control" required type="password" name="password" placeholder="Password"></bs-form-input>
                    <bs-form-input-feedback
                        slot="feedback"
                        missing-value-msg="Please enter your password">
                    </bs-form-input-feedback>
                </bs-form-group>
                <bs-form-check-group>
                    <bs-form-checkbox-input slot="check" required name="checkmeout"></bs-form-checkbox-input>
                    <bs-form-check-label slot="label">Check me out</bs-form-check-label>
                    <bs-form-input-feedback
                        slot="feedback"
                        missing-value-msg="You must agree before submitting.">
                    </bs-form-input-feedback>
                </bs-form-check-group>
                <bs-button primary action="submit">Submit</bs-button>
            </bs-form>

            </div>
        `;
    }

    constructor() {
        super();
    }
};

window.customElements.define('form-demo', FormDemo);
