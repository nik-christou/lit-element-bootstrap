
import { LitElement, html } from 'lit-element';
import { BsAccordionCss } from './bs-accordion.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class BsAccordion extends LitElement {

    static get properties() {
        return {
            multitab: {type: Boolean, reflect: true}
        };
    }

    static get styles() {
        return [
            BsContentRebootCss,
            BsAccordionCss
        ];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }

    constructor() {
        super();
        this.multitab = false;
    }

    firstUpdated() {
        this.addEventListener('bs-collapse-toggle', event => this._toggleCollapsable(event));
    }

    _toggleCollapsable(event) {

        const target = event.detail.target;

        if(!target) {
            return;
        }

        const collapsableElements = this._findAllCollapsableElements();

        if(this.multitab) {
            this._handleMultipleTabsOpen(collapsableElements, target);
        } else {
            this._handleSingleTabOpen(collapsableElements, target);
        }
    }

    _handleMultipleTabsOpen(collapsableElements, targetId) {

        for(let index = 0; index < collapsableElements.length; index++) {

            const collapsableElement = collapsableElements[index];

            if(this._isTargetCollapsableElement(collapsableElement, targetId)) {
                collapsableElement.toggle();
                return;
            }
        }
    }

    _handleSingleTabOpen(collapsableElements, target) {

        for(let index = 0; index < collapsableElements.length; index++) {

            const collapsableElement = collapsableElements[index];

            if(this._isTargetCollapsableElement(collapsableElement, target)) {
                collapsableElement.toggle();
            } else {
                collapsableElement.collapse();
            }
        }
    }

    _isTargetCollapsableElement(collapsableElement, target) {
        const collapsableElementId = collapsableElement.getAttribute('id');
        return collapsableElementId === target;
    }

    _findAllCollapsableElements() {

        const slotElement = this.shadowRoot.querySelector('slot');
        const slotNodes = slotElement.assignedNodes();

        const collapsableElements = [];

        for(let index = 0; index < slotNodes.length; index++) {

            const slotNode = slotNodes[index];
            const collapsableElement = this._findCollapsableElement(slotNode);

            if(collapsableElement) {
                collapsableElements.push(collapsableElement);
            }
        }

        return collapsableElements;
    }

    _findCollapsableElement(slotNode) {

        const slotChildren = slotNode.children;

        if(!slotChildren) {
            return;
        }

        for(let index = 0; index < slotChildren.length; index++) {

            const slotChild = slotChildren[index];

            if(this._isCollapsableElement(slotChild)) {
                return slotChild;
            }
        }
    }

    _isCollapsableElement(element) {
        return element.nodeType === Node.ELEMENT_NODE
                && (element.localName === 'bs-collapsable');
    }
};

if(!window.customElements.get("bs-accordion"))
    window.customElements.define('bs-accordion', BsAccordion);
