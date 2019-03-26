
import { LitElement, html } from 'lit-element';

export class BsCollapseMultiToggle extends LitElement {
    
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

window.customElements.define('bs-collapse-multi-toggle', BsCollapseMultiToggle);