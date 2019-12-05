import { BsBreadcrumb } from './bs-breadcrumb';
import { BsBreadcrumbItem } from './bs-breadcrumb-item';

declare global {
    interface HTMLElementTagNameMap {
        "bs-breadcrumb": BsBreadcrumb
        "bs-breadcrumb-item": BsBreadcrumbItem
    }
}
