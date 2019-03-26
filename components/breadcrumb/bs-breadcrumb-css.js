
import { css } from 'lit-element';

// TODO replace the below css with javascript so
// that the user of this component should not 
// know or care to include this styles as well

export const BsBreadcrumbCss = css`
    
    bs-breadcrumb-item + bs-breadcrumb-item {
        padding-left: 0.5rem;
    }

    bs-breadcrumb-item + bs-breadcrumb-item::before {
        display: inline-block;
        padding-right: 0.3rem;
        color: #6c757d;
        content: var(--breadcrumb-divider, "/");
    }

    bs-breadcrumb-item + .bs-breadcrumb-item:hover::before {
        text-decoration: underline;
    }

    bs-breadcrumb-item + bs-breadcrumb-item:hover::before {
        text-decoration: none;
    }
`;