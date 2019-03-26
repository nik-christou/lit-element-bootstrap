
import { LitElement, html, css } from 'lit-element';

export class BsCloseButton extends LitElement {
    
    static get styles() {
        return css`
            
            .close {
                border: 0;
                float: right;
                font-size: 1.5rem;
                font-weight: 700;
                line-height: 1;
                color: #000;
                text-shadow: 0 1px 0 #fff;
                opacity: 0.5;
                margin: var(--bs-close-btn-margin);
                padding: var(--bs-close-btn-padding, 0);
                background-color: transparent;
                -webkit-appearance: none;
            }

            .close:not(:disabled):not(.disabled):hover, 
            .close:not(:disabled):not(.disabled):focus {
                color: #000;
                text-decoration: none;
                opacity: 0.75;
                cursor: pointer;
            }
        `;
    }
    
    render() {
        return html`
            <button type="button" class="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            
        `;
    }
    
    firstUpdated() {
        const buttonElement = this.shadowRoot.querySelector('button');
        buttonElement.addEventListener('click', () => this._handleClick());
    }

    _handleClick() {
        
        const alertCloseEvent = new CustomEvent('close-button-click', {
            bubbles: true, 
            composed: true
        });
        
        this.dispatchEvent(alertCloseEvent);
    }
};

window.customElements.define('bs-close-btn', BsCloseButton);