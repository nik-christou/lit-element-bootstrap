/**
 * Alert dismiss component
 *
 * @element bs-alert-dismiss
 *
 * @fires close.button.click - Fired when the button is clicked
 */
export class BsAlertDismiss extends LitElement {
    static get styles(): import("lit-element").CSSResult;
    render(): import("lit-element").TemplateResult;
    firstUpdated(): void;
    _handleClick(): void;
}
import { LitElement } from "lit-element";

declare global {
    interface HTMLElementTagNameMap {
      "bs-alert-dismiss": BsAlertDismiss
    }
}