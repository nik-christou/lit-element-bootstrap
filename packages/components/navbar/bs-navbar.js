
import { LitElement, html } from 'lit-element';
import { BsNavbarCss } from './css/bs-navbar.css.js';
import { BsNavbarExpandLargeCss } from './css/bs-navbar-expand-lg.css.js';
import { BsNavbarLightColorCss } from './css/bs-navbar-light-color.css.js';
import { BsNavbarDarkColorCss } from './css/bs-navbar-dark-color.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class BsNavbar extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsNavbarExpandLargeCss,
            BsNavbarLightColorCss,
            BsNavbarDarkColorCss,
            BsNavbarCss
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

if(!window.customElements.get('bs-navbar'))
    window.customElements.define('bs-navbar', BsNavbar);
