
import { LitElement, html } from 'lit-element';
import { BsProgressBarCss } from './css/bs-progress-bar.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class BsProgressBar extends LitElement {

    static get properties() {
        return {
            striped: {type: Boolean, reflect: true},
            animated: {type: Boolean, reflect: true},
            completed: {type: Number, reflect: true, attribute: 'completed'}
        };
    }

    static get styles() {
        return [
            BsContentRebootCss,
            BsProgressBarCss
        ];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }

    constructor() {
        super();
        this.striped = false;
        this.animated = false;
        this.completed = 0;
    }

    updated(changedProperties) {

        super.updated();

        if (changedProperties.has('completed')) {
            this._percentCompletedChanged();
        }
    }

    _percentCompletedChanged() {

        if(this.completed) {
            this.shadowRoot.host.style.width = `${this.completed}%`;
        }
    }
};

if(!window.customElements.get('bs-progress-bar'))
    window.customElements.define('bs-progress-bar', BsProgressBar);
