
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot.css.js';

import { BsDropdownNavCss } from './bs-dropdown-nav.css.js';
import { BsDropdownSplitCss } from './bs-dropdown-split.css.js';
import { BsDropdownToggleCss } from './bs-dropdown-toggle.css.js';

import Popper from 'popper.js/dist/esm/popper';

export class BsDropdown extends LitElement {

    static get properties() {
        return {
            _popper: Popper,
            offset: String,
            split: {type: Boolean, reflect: true},
            ariasHasPopup: {type: String, reflect: true, attribute: 'aria-haspopup'}
        };
    } 
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsDropdownNavCss,
            BsDropdownToggleCss,
            BsDropdownSplitCss,
            css`
                :host {
                    position: relative;
                    display: var(--dropdown-display, flex);
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
        this._popper = null;
        this.offset = '';
        this.split = false;
        this.ariasHasPopup = 'true';
    }
    
    firstUpdated() {
        
        const slotElement = this.shadowRoot.querySelector('slot');
        const slotNodes = slotElement.assignedNodes();
        
        const dropdownMenuElement = this._findDropdownMenuElement(slotNodes);
        this.addEventListener('bs-button-click', event => this._handleBtnClicked(event, dropdownMenuElement));
        this.addEventListener('bs-button-focusout', _ => this._handleBtnFocusOut(dropdownMenuElement));
        
        // if the dropdown is part of a navbar, don't add popper.js
        if(!this._isParentElementNavItem()) {
            const dropdownButtonElement = this._findDropdownButtonElement(slotNodes);
            this._configurePopper(dropdownButtonElement, dropdownMenuElement);
        }
    }
    
    _configurePopper(dropdownButtonElement, dropdownMenuElement) {
        
        const dropdDownMenuPlacement = dropdownMenuElement.getAttribute('x-placement');
        const referenceElement = this._findReferenceElement(dropdownButtonElement);

        const config = this._createPopperConfig(dropdDownMenuPlacement);
        this._popper = new Popper(referenceElement, dropdownMenuElement, config);
    }
    
    _createPopperConfig(dropdDownMenuPlacement) {
        
        if(this.offset) {
            
            return {
                placement: dropdDownMenuPlacement,
                modifiers: {
                    flip: {
                        enabled: true
                    },
                    offset: {
                        enabled: true,
                        offset: this.offset
                    },
                    keepTogether: { 
                        enabled: true 
                    }
                }
            };
        }
        
        return {
            placement: dropdDownMenuPlacement,
            modifiers: {
                flip: {
                    enabled: true
                },
                keepTogether: { 
                    enabled: true 
                }
            }
        };
    }
    
    _handleBtnClicked(event, dropdownMenuElement) {

        // check if event was fired from a dropdown button
        if(!event.detail.dropdown) {
            return;
        }

        dropdownMenuElement.toggleMenu();
        this.active = !this.active;
    }
    
    _handleBtnFocusOut(dropdownMenuElement) {
        dropdownMenuElement.closeMenu();
        this.active = false;
    }
    
    _findReferenceElement(dropdownButtonElement) {

        if(this.split) {
            return dropdownButtonElement;
        } 
        
        return this.shadowRoot.host;
    }
    
    _findDropdownButtonElement(slotNodes) {
        
        for (let index = 0; index < slotNodes.length; index++) {
            
            const slotItem = slotNodes[index];
            
            if (this._isDropdownButtonToggle(slotItem)) {
                
                return slotItem;
            }
        }
    }
    
    _findDropdownMenuElement(slotNodes) {
        
        for (let index = 0; index < slotNodes.length; index++) {
            
            const slotItem = slotNodes[index];

            if (this._isDropdownMenuElement(slotItem)) {
                return slotItem;
            }
        }
    }
    
    _isDropdownButtonToggle(element) {
        return element.nodeType === Node.ELEMENT_NODE &&
            element.hasAttribute('dropdown-toggle');
    }
    
    _isDropdownMenuElement(element) {
        return element.nodeType === Node.ELEMENT_NODE 
                && (element.localName === 'bs-dropdown-menu');
    }
    
    _isParentElementNavItem() {
        const parentElement = this.parentElement;
        return parentElement.nodeType === Node.ELEMENT_NODE 
                && parentElement.localName === 'bs-nav-item';
    }
};

if (!window.customElements.get("bs-dropdown")) 
    window.customElements.define('bs-dropdown', BsDropdown);
