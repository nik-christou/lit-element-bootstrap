
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';

export class BsCardOverlay extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    padding: 1.25rem;
                }
            `
        ];
    }

    render() {
        return html`
            <slot name="card-title"></slot>
            <slot name="card-subtitle"></slot>
            <slot name="card-text"></slot>
            <slot id="plainSlot"></slot>
            <slot name="card-links"></slot>
        `;
    }
};

if (!window.customElements.get("bs-card-overlay"))  window.customElements.define('bs-card-overlay', BsCardOverlay);



