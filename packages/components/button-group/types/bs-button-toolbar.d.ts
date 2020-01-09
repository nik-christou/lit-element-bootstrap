export class BsButtonToolbar extends LitElement {
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
    /**
     * The aria role is added to the host element
     *
     * @param   {Map}  _updatedProperties  the Map with updated properties
     * @return  {void}
     */
    firstUpdated(_updatedProperties: Map<any, any>): void;
    /**
     * Adds an arial role attribute with value of 'toolbar'
     *
     * @return  {void}
     */
    _addAriaRole(): void;
}
import { LitElement } from "lit-element";

declare global {
    interface HTMLElementTagNameMap {
      "bs-button-toolbar": BsButtonToolbar
    }
}
