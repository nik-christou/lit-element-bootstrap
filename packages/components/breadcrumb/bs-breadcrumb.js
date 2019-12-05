import { LitElement, html } from "lit-element";
import { BsBreadcrumbItem } from "./bs-breadcrumb-item.js";
import { BsBreadcrumbCss } from "./css/bs-breadcrumb.css.js";
import { BsBreadcrumbRebootCss } from "./css/bs-breadcrumb-reboot.css.js";

/**
 * Breadcrumb Element
 *
 * @element bs-breadcrumb
 *
 * @slot Slot for breadcrub items content
 *
 * @cssproperty --breadcrumb-display - Display property. default: flex
 * @cssproperty --breadcrumb-flex-wrap - Flex-wrap. default: wrap
 * @cssproperty --breadcrumb-padding-top - Padding top. default: 0.75rem
 * @cssproperty --breadcrumb-padding-bottom - Padding bottom. default: 0.75rem
 * @cssproperty --breadcrumb-padding-right - Padding right. default: 1rem
 * @cssproperty --breadcrumb-padding-left - Padding left. default: 1rem
 * @cssproperty --breadcrumb-margin-bottom - Margin bottom. default: 1rem
 * @cssproperty --breadcrumb-bg-color - Background color. default: #e9ecef
 * @cssproperty --breadcrumb-border-radius - Border radius. default: 0.25rem
 */
export class BsBreadcrumb extends LitElement {
    static get styles() {
        return [BsBreadcrumbRebootCss, BsBreadcrumbCss];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }

    /**
     * When breadcrumb item is first updated:
     *   1) The aria label is added to the host element
     *   2) The first breadcrumb item style is changed
     *
     * @param   {Map}  _updatedProperties  the Map with updated properties
     *
     * @return  {void}
     */
    firstUpdated(_updatedProperties) {
        super.firstUpdated(_updatedProperties);
        this._addAriaLabel();
        this._removeDividerFromFirstBreadcrumItem();
    }

    /**
     * Adds an arial label attribute with value of 'breadcrumb'
     *
     * @return  {void}
     */
    _addAriaLabel() {
        this.setAttribute("aria-label", "breadcrumb");
    }

    /**
     * Reset the left padding and remove the ::before content for the first breadcrumb item
     *
     * @return  {void}
     */
    _removeDividerFromFirstBreadcrumItem() {
        const breadcrumbItemElement = this._findFirstBreadcrumbItem();

        if (!breadcrumbItemElement) {
            return;
        }

        /** @type {HTMLElement} */ (breadcrumbItemElement).style.setProperty(
            "--breadcrumb-item-padding-left",
            "0"
        );
        /** @type {HTMLElement} */ (breadcrumbItemElement).style.setProperty(
            "--breadcrumb-item-divider-content",
            "none"
        );
    }

    /**
     * Finds the first breadcrumb item element in the slotted content
     *
     * @return  {Node}  The first BsBreadcrumbItem <bs-breadcrumb-item> found
     */
    _findFirstBreadcrumbItem() {
        const slot = this.shadowRoot.querySelector("slot");
        const slottedElements = slot.assignedElements();

        return slottedElements.find(element =>
            this._isBreadcrumbItemElement(element)
        );
    }

    /**
     * Verify that the given element is an HTMLElement and it is an instance of BsBreadcrumbItem
     *
     * @param   {Element}  element  The node to verify
     *
     * @return  {Boolean}  true if the node is an HTMLElement and an instance of BsBreadcrumbItem
     */
    _isBreadcrumbItemElement(element) {
        return (
            element.nodeType === Node.ELEMENT_NODE &&
            (element.localName === "bs-breadcrumb-item" ||
                element instanceof BsBreadcrumbItem)
        );
    }
}

if (!window.customElements.get("bs-breadcrumb"))
    window.customElements.define("bs-breadcrumb", BsBreadcrumb);
