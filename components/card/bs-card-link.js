
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';

export class BsCardLink extends LitElement {

    static get properties() {
        return {
            label: String,
            target: String
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                a {
                    margin-left: var(--card-link-left-margin, 1.25rem);
                }

                a:hover {
                    color: #0056b3;
                    text-decoration: none;
                }
            `
        ];
    }
    
    render() {
        return html`
            <a href="${this.target}">${this.label}</a>
        `;
    }
    
    constructor() {
        super();
        this.label = '';
        this.target = '#';
    }
};

if (!window.customElements.get("bs-card-link"))  window.customElements.define('bs-card-link', BsCardLink);

