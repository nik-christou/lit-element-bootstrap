
import { LitElement, html, css } from 'lit-element';
import { BsTextColorCss } from '@lit-element-bootstrap/content';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class BsFormHelpText extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsTextColorCss,
            css`
                .form-text {
                    display: block;
                    margin-top: 0.25rem;
                }
            `
        ];
    }

    render() {
        return html`
            <small class="form-text text-muted">
                <slot></slot>
            </small>
        `;
    }
};

if(!window.customElements.get('bs-form-help-text'))
    window.customElements.define('bs-form-help-text', BsFormHelpText);
