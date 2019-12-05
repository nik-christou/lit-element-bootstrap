import { BsBadge } from './bs-badge';
import { BsBadgeLink } from './bs-badge-link';

declare global {
    interface HTMLElementTagNameMap {
        "bs-badge": BsBadge
        "bs-badge-link": BsBadgeLink
    }
}
