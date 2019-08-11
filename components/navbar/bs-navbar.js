
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';
import { BsNavbarExpandLargeCss } from './css/bs-navbar-expand-lg-css';
import { BsNavbarLightColorCss } from './css/bs-navbar-light-color-css';
import { BsNavbarDarkColorCss } from './css/bs-navbar-dark-color-css';

export class BsNavbar extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsNavbarExpandLargeCss,
            BsNavbarLightColorCss,
            BsNavbarDarkColorCss,
            css`
                
                :host {
                    position: relative;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0.5rem 1rem;
                }
                
                :host ::slotted(bs-container) {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: space-between;
                }
            `
        ];
    }
    
    render() {
        return html`
            <slot></slot>
        `;
    }
    
    firstUpdated() {
        this.addEventListener('bs-navbar-toggler-click', () => this._handleToggleEvent());
    }
    
    _handleToggleEvent() {
        
        const navbarCollapseElement = this._findCollapsableElement();
        
        if(navbarCollapseElement) {
            navbarCollapseElement.toggle();
        }
    }
    
    _retrieveSlotAssignedNodes() {
        
        const slotElement = this.shadowRoot.querySelector('slot');
        const assignedNodes = slotElement.assignedNodes();
        
        return assignedNodes;
    }
    
    _findCollapsableElement() {
        
        const assignedNodes = this._retrieveSlotAssignedNodes();
        
        for (let index = 0; index < assignedNodes.length; index++) {

            const slotItem = assignedNodes[index];

            if (this._isNavbarCollapse(slotItem)) {
                return slotItem;
            }
        }
    }
    
    _isNavbarCollapse(element) {
        return element.nodeType === Node.ELEMENT_NODE 
                && element.localName === 'bs-navbar-collapse';
    }
};

if(!window.customElements.get('bs-navbar')) window.customElements.define('bs-navbar', BsNavbar);