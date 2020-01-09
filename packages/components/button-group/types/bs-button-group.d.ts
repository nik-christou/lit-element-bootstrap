export class BsButtonGroup extends LitElement {
    static get properties(): {
        direction: {
            type: StringConstructor;
            reflect: boolean;
        };
    };
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
    direction: string;
    /**
     * The aria role is added to the host element
     *
     * @param   {Map}  _updatedProperties  the Map with updated properties
     * @return  {void}
     */
    firstUpdated(_updatedProperties: Map<any, any>): void;
    /**
     * Adds an arial role attribute with value of 'group'
     *
     * @return  {void}
     */
    _addAriaRole(): void;
}
import { LitElement } from "lit-element";

declare global {
    interface HTMLElementTagNameMap {
      "bs-button-group": BsButtonGroup
    }
}
