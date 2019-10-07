
import { css } from 'lit-element';

export const BsBreadcrumbCss = css`

    :host {
        display: flex;
        flex-wrap: wrap;
        padding: 0.75rem 1rem;
        margin-bottom: 1rem;
        list-style: none;
        background-color: #e9ecef;
        border-radius: 0.25rem;
        --divider: var(--breadcrumb-divider, "/");
    }
`;
