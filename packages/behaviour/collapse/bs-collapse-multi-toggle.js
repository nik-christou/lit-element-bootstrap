
import { LitElement, html } from 'lit-element';

export class BsCollapseMultiToggle extends LitElement {

    // TODO: replace the multitarget attribute with a data-multi-target attribute !!!

    static get properties() {
        return {
            multiTarget: {type: String, reflect: true}
        };
    }

    render() {
        return html`
            <slot></slot>
        `;
    }

    constructor() {
        super();
        this.multiTarget = '';
    }

    firstUpdated() {
        this.addEventListener('bs-button-click', event => this._handleMultiToggleCollapse(event));
    }

    _handleMultiToggleCollapse() {

        if(!this.multiTarget) {
            return;
        }

        const multiToggleCollapseEvent = new CustomEvent('bs-collapse-multi-toggle', {
            bubbles: true,
            composed: true,
            detail: {
                multiTarget: this.multiTarget
            }
        });

        this.dispatchEvent(multiToggleCollapseEvent);
    }
};

if(!window.customElements.get("bs-collapse-multi-toggle"))
    window.customElements.define('bs-collapse-multi-toggle', BsCollapseMultiToggle);
