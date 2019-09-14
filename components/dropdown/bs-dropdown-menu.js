
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot-css.js';

const Direction = {
    UP: 'up',
    DOWN: 'down'
};

export class BsDropdownMenu extends LitElement {

    static get properties() {
        return {
            show: {type: Boolean, reflect: true},
            static: {type: Boolean, reflect: true},
            ariaExpanded: {type: String, reflect: true, attribute:'aria-expanded'},
            ariaLabelledBy: {type: String, reflect: true, attribute:'aria-labelledby'}
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    position: var(--dropdown-menu-position, absolute);
                    left: 0;
                    z-index: 1000;
                    display: var(--dropdown-menu-display, none);
                    visibility: hidden !important;
                    float: var(--dropdown-menu-float, left);
                    min-width: 10rem;
                    padding: 0.5rem 0;
                    margin-left: 0;
                    margin-right: 0;
                    font-size: 1rem;
                    color: #212529;
                    text-align: left;
                    list-style: none;
                    background-color: #fff;
                    background-clip: padding-box;
                    border: 1px solid rgba(0, 0, 0, 0.15);
                    border-top-left-radius: var(--dropdown-menu-border-top-left-radius, 0.25rem);
                    border-top-right-radius: var(--dropdown-menu-border-top-right-radius, 0.25rem);
                    border-bottom-right-radius: var(--dropdown-menu-border-bottom-right-radius, 0.25rem);
                    border-bottom-left-radius: var(--dropdown-menu-border-bottom-left-radius, 0.25rem);
                }
        
                :host([static]) {
                    position: static;
                }
        
                :host([down]) {
                    top: 100%;
                    margin-top: var(--dropdown-menu-down-margin-top, 0.125rem);
                    margin-bottom: 0;
                }
                
                :host([up]) {
                    top: auto;
                    bottom: 100%;
                    margin-top: var(--dropdown-menu-up-margin-top, 0);
                    margin-bottom: 0.125rem;
                }
        
                :host([right]) {
                    top: 0;
                    right: auto;
                    left: 100%;
                    margin-top: var(--dropdown-menu-right-margin-top, 0);
                    margin-left: 0.125rem;
                }
                
                :host([left]) {
                    top: 0;
                    right: 100%;
                    left: auto;
                    margin-top: var(--dropdown-menu-left-margin-top, 0);
                    margin-right: 0.125rem;
                }
                
                :host([align-right]) {
                    right: 0;
                    left: auto;
                }
                
                :host([show]) {
                    visibility: visible !important;
                }
                
                :host([x-placement^="top"]), 
                :host([x-placement^="right"]), 
                :host([x-placement^="bottom"]), 
                :host([x-placement^="left"]) {
                    right: auto;
                    bottom: auto;
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
        this.static = false;
        this.ariaExpanded = 'false';
        this.ariaLabelledBy = 'dropdownMenuButton';
    }

    connectedCallback() {
        super.connectedCallback();
        window.document.addEventListener('keydown', event => this._handleKeydownKey(event));
    }

    disconnectedCallback() {
        window.document.removeEventListener('keydown', event => this._handleKeydownKey(event));
        super.disconnectedCallback();
    }

    firstUpdated() {
        this._displayIfStatic();
    }
    
    toggleMenu() {
        this.show = !this.show;
        this._updateAriaExpanded();
        this._changeDisplayValueInCollapsedNavbar();
    }
    
    openMenu() {
        this.show = true;
        this._updateAriaExpanded();
        this.shadowRoot.host.focus();
    }
    
    closeMenu() {
        this.show = false;
        this._updateAriaExpanded();
        this._removeHoverStateFromItems();
    }

    _updateAriaExpanded() {
        this.ariaExpanded = `${this.show}`;
    }

    _changeDisplayValueInCollapsedNavbar() {
        
        const compStyles = window.getComputedStyle(this.shadowRoot.host);
        const displayValue = compStyles.getPropertyValue('display');
        
        if(this.show && displayValue === 'none') {
            this.shadowRoot.host.style.display = 'block';
        }
        
        if(!this.show && displayValue === 'block') {
            this.shadowRoot.host.style.display = 'none';
        }
    }

    _displayIfStatic() {

        if(this.static) {
            this.shadowRoot.host.style.setProperty('--dropdown-menu-display', 'block');
        }
    }

    // keydown events are document wide
    // which means that this function will
    // be executed by all be-dropdown-menu
    // elements in the document
    _handleKeydownKey(event) {

        // static bs-dropdown-menu elements
        // are not reactive to keydown events
        if(this.static) {
            return;
        }

        // menu must be visible to continue
        if(!this.show) {
            return;
        }

        // if ESC key was pressed
        if(event.keyCode === 27) {
            this.closeMenu();
        }

        // if UP key was pressed
        if(event.keyCode === 38) {
            this._updatedActivatedDropdownItem(Direction.UP);
            event.preventDefault();
        }

        // if DOWN key was pressed
        if(event.keyCode === 40) {
            this._updatedActivatedDropdownItem(Direction.DOWN);
            event.preventDefault();
        }
    }

    _removeHoverStateFromItems() {

        const slotElement = this.shadowRoot.querySelector('slot');
        const assignedNodes = slotElement.assignedNodes();
        const dropdownItemElements = this._extractDropdownItemElements(assignedNodes);

        for (let index = 0; index < dropdownItemElements.length; ++index) {

            const dropdownItem = dropdownItemElements[index];

            if(this._isDropdownItemElementHover(dropdownItem)) {
                dropdownItem.toggleHover();
            }
        }
    }

    _updatedActivatedDropdownItem(direction) {

        const slotElement = this.shadowRoot.querySelector('slot');
        const assignedNodes = slotElement.assignedNodes();
        const dropdownItemElements = this._extractDropdownItemElements(assignedNodes);
        const numberOfDropdownItems = dropdownItemElements.length;

        const activeDropdownItemElement = this._findActivatedDropdownItem(dropdownItemElements);

        const activeDropdownItemElementIndex = this._findActiveDropdownItemIndex(
            activeDropdownItemElement, 
            direction,
            numberOfDropdownItems);

        const newDropdownItemElementIndex = this._calculateNewDropdownItemIndex(
            activeDropdownItemElementIndex, 
            direction,
            numberOfDropdownItems);

        const newActiveDropdownItemElement = dropdownItemElements[newDropdownItemElementIndex];
        
        if(activeDropdownItemElement) {
            activeDropdownItemElement.toggleHover();
        }

        if(newActiveDropdownItemElement) {
            newActiveDropdownItemElement.toggleHover();
        }
    }

    _calculateNewDropdownItemIndex(previousIndex, direction, numberOfDropdownItems) {

        const delta = direction === Direction.UP ? -1 : 1;
        const newDropdownItemIndex = previousIndex + delta;

        // UP was fired && first item was active
        // return to first item
        if(newDropdownItemIndex === -1) {
            return 0;
        }

        // DOWN was fired && last item was active
        // return to last item
        if (newDropdownItemIndex === numberOfDropdownItems) {
            return new Number(numberOfDropdownItems - 1);
        }

        return newDropdownItemIndex;
    }

    _findActiveDropdownItemIndex(activeDropdownItemElement, direction, lastDropdownItemElementIndex) {

        if(activeDropdownItemElement) {
            return new Number(activeDropdownItemElement.index);
        }

        // if nothing was activated before and DOWN direction set 
        // -1 as the previously activated index in order to select
        // the first element at index position 0;
        if(!activeDropdownItemElement && direction === Direction.DOWN) {
            return -1;
        }

        // if nothing was activated before and UP direction set 
        // to number of items + 1 as the previously activated index 
        // in order to select for the last element at index position of last item;
        if(!activeDropdownItemElement && direction === Direction.UP) {
            return new Number(lastDropdownItemElementIndex);
        }
    }

    _findActivatedDropdownItem(dropdownItemElements) {

        for (let index = 0; index < dropdownItemElements.length; ++index) {

            const dropdownItem = dropdownItemElements[index];

            if(this._isDropdownItemElementHover(dropdownItem)) {
                return dropdownItem;
            }
        }        
    }

    _extractDropdownItemElements(slotNodes) {

        const elementNodes = [];
    
        for (let index = 0; index < slotNodes.length; ++index) {
            
            let slotItem = slotNodes[index];

            if (this._isDropdownItemLinkElement(slotItem) || 
                this._isDropdownItemButtonElement(slotItem)) {

                elementNodes.push(slotItem);
            }
        }
    
        return elementNodes;
    }

    _isDropdownItemElementHover(dropdownItemElement) {
        return dropdownItemElement.isHover();
    }

    _isDropdownItemLinkElement(element) {
        return element.nodeType === Node.ELEMENT_NODE 
                && (element.localName === 'bs-dropdown-item-link');
    }   

    _isDropdownItemButtonElement(element) {
        return element.nodeType === Node.ELEMENT_NODE 
                && (element.localName === 'bs-dropdown-item-button');
    }
};

if (!window.customElements.get("bs-dropdown-menu")) 
    window.customElements.define('bs-dropdown-menu', BsDropdownMenu);