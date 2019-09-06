
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot-css.js';

export class BsNavbarToggler extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                
                button {
                    padding: var(--navbar-toggler-padding, 0.25rem 0.75rem);
                    font-size: var(--navbar-toggler-font-size, 1.25rem);
                    line-height: 1;
                    border: var(--navbar-toggler-border, 1px solid transparent);
                    border-top-left-radius: 0.25rem;
                    border-top-right-radius: 0.25rem;
                    border-bottom-right-radius: 0.25rem;
                    border-bottom-left-radius: 0.25rem;
                    background-color: transparent;
                    color: var(--navbar-toggler-color);
                    border-color: var(--navbar-toggler-border-color);
                }
                
                button:focus {
                    text-decoration: none;
                    outline: var(--navbar-toggler-outline-focus);
                }
                
                button:hover {
                    text-decoration: none;
                }

                button:not(:disabled):not(.disabled)  {
                    cursor: pointer;
                }
            `
        ];
    }
    
    render() {
        return html`
            <button>
                <slot></slot>
            </button>
        `;
    }
    
    firstUpdated() {
        const toggleButton = this.shadowRoot.querySelector('button');
        toggleButton.addEventListener('click', event => this._handleToggleButtonClickEvent(event));
    }
    
    _handleToggleButtonClickEvent(event) {
        
        event.stopPropagation();
        event.preventDefault();
        
        const btnClickedEvent = new CustomEvent('bs-navbar-toggler-click', {bubbles: true, composed: true});
        this.dispatchEvent(btnClickedEvent);
    }
};

if(!window.customElements.get('bs-navbar-toggler')) 
    window.customElements.define('bs-navbar-toggler', BsNavbarToggler);