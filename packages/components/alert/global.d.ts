import { BsAlert } from './bs-alert';
import { BsAlertDismiss } from './bs-alert-dismiss';
import { BsAlertHr } from './bs-alert-hr';
import { BsAlertLink } from './bs-alert-link';

declare global {
    interface HTMLElementTagNameMap {
        "bs-alert": BsAlert
        "bs-alert-dismiss": BsAlertDismiss
        "bs-alert-hr": BsAlertHr
        "bs-alert-link": BsAlertLink
    }
}
