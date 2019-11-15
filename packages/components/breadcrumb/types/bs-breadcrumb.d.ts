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
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
    /**
     * When breadcrumb item is first updated:
     *   1) The aria label is added to the host element
     *   2) The first breadcrumb item style is changed
     *
     * @param   {Map}  _updatedProperties  the Map with updated properties
     *
     * @return  {void}
     */
    firstUpdated(_updatedProperties: Map<any, any>): void;
    /**
     * Adds an arial label attribute with value of 'breadcrumb'
     *
     * @return  {void}
     */
    _addAriaLabel(): void;
    /**
     * Reset the left padding and remove the ::before content for the first breadcrumb item
     *
     * @return  {void}
     */
    _removeDividerFromFirstBreadcrumItem(): void;
    /**
     * Finds the first breadcrumb item element in the slotted content
     *
     * @return  {Node}  The first BsBreadcrumbItem <bs-breadcrumb-item> found
     */
    _findFirstBreadcrumbItem(): Node;
    /**
     * Verify that the given element is an HTMLElement and it is an instance of BsBreadcrumbItem
     *
     * @param   {Element}  element  The node to verify
     *
     * @return  {Boolean}  true if the node is an HTMLElement and an instance of BsBreadcrumbItem
     */
    _isBreadcrumbItemElement(element: Element): boolean;
}
import { LitElement } from "lit-element";

declare global {
    interface HTMLElementTagNameMap {
      "bs-breadcrumb": BsBreadcrumb
    }
}
