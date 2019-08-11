
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';

export class BsNavItem extends LitElement {
    
    static get properties() {
        return {
            show: { type: Boolean, reflect: true }
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    margin-bottom: var(--nav-item-margin-bottom);
                }
                
                :host([show]) {
                    --dropdown-nav-link-color: #fff;
                    --dropdown-nav-link-hover-color: #fff;
                    --dropdown-nav-link-background-color: #007bff;
                }
            `
        ];
    }
    
    render() {
        return html`
            <slot></slot>
        `;
    }
    
    constructor() {
        super();
        this.show = false;
    }
    
    firstUpdated() {
        this.addEventListener('bs-button-click', () => this._handleDropdownToggleClick());
        this.addEventListener('bs-button-focusout', () => this._handleDropdownToggleFocusOut());
    }
    
    _handleDropdownToggleClick() {
        
        const navParentElement = this.parentElement;
        
        if(navParentElement.hasAttribute('pills')) {
            this.show = !this.show;
        }
    }
    
    _handleDropdownToggleFocusOut() {
        
        const navParentElement = this.parentElement;
        
        if(navParentElement.hasAttribute('pills')) {
            if(this.show) {
                this.show = !this.show;
            }
        }
    }
};

if(!window.customElements.get('bs-nav-item')) window.customElements.define('bs-nav-item', BsNavItem);

