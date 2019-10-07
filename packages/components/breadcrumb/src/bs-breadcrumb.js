
import { LitElement, html } from 'lit-element';
import { BsBreadcrumbItem } from './bs-breadcrumb-item.js';
import { BsBreadcrumbCss } from './bs-breadcrumb.css.js';

export class BsBreadcrumb extends LitElement {

    static get styles() {
        return BsBreadcrumbCss;
    }

    render() {
        return html`
            <slot></slot>
        `;
    }

    firstUpdated() {
        this._adjustAdjacentBreadcrumbItemCss();
    }

    // :slotted can only accept simple selectors and not combinators
    // since the adjucent sibling selector cannot be used, we apply css via javascript

    _adjustAdjacentBreadcrumbItemCss() {

        const breadcrumbItems = this._retrieveBreadcrumbItems();

        breadcrumbItems.forEach(breadcrumbItemElement => {

            const previousSibling = breadcrumbItemElement.previousElementSibling;

            if(previousSibling) {
                breadcrumbItemElement.style.setProperty('--bs-breadcrumb-item-padding-left', '0.5rem');
                breadcrumbItemElement.style.setProperty('--bs-breadcrumb-item-display', 'inline-block');
                breadcrumbItemElement.style.setProperty('--bs-breadcrumb-item-padding-right', '0.3rem');
                breadcrumbItemElement.style.setProperty('--bs-breadcrumb-item-color', '#6c757d');
                breadcrumbItemElement.style.setProperty('--bs-breadcrumb-item-text-decoration', 'none');
                breadcrumbItemElement.style.setProperty('--bs-breadcrumb-item-divider', 'var(--divider)');
            } else {
                breadcrumbItemElement.style.setProperty('--bs-breadcrumb-item-text-decoration', 'underline');
            }
        });
    }

    _retrieveBreadcrumbItems() {

        const breadcrumbItems = [];

        const slot = this.shadowRoot.querySelector('slot');
        const slottedNodes = slot.assignedNodes();

        slottedNodes.forEach(slotElement => {

            if(this._isBreadcrumbItemElement(slotElement)) {
                breadcrumbItems.push(slotElement);
            }
        });

        return breadcrumbItems;
    }

    _isBreadcrumbItemElement(element) {
        return element.nodeType === Node.ELEMENT_NODE &&
            (element.localName === 'bs-breadcrumb-item' || element instanceof BsBreadcrumbItem);
    }
};

if (!window.customElements.get("bs-breadcrumb"))
    window.customElements.define('bs-breadcrumb', BsBreadcrumb);
