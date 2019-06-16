
import { css } from 'lit-element';

export const BsListGroupItemCommonCss = css`
                
    .list-group-item {
        position: relative;
        display: block;
        padding: 0.75rem 1.25rem;
        margin-bottom: -1px;
        background-color: #fff;

        border-bottom-right-radius: var(--list-group-item-border-radius-bottom-right);
        border-bottom-left-radius: var(--list-group-item-border-radius-bottom-left);
        border-top-left-radius: var(--list-group-item-border-radius-top-left);
        border-top-right-radius: var(--list-group-item-border-radius-top-right);

        border-top: var(--list-group-item-border-top, 1px solid rgba(0, 0, 0, 0.125));
        border-bottom: var(--list-group-item-border-bottom, 1px solid rgba(0, 0, 0, 0.125));
        border-right: var(--list-group-item-border-right, 1px solid rgba(0, 0, 0, 0.125));
        border-left: var(--list-group-item-border-left, 1px solid rgba(0, 0, 0, 0.125));
    }

    .list-group-item:hover, 
    .list-group-item:focus {
        z-index: 1;
        text-decoration: none;
    }

    :host([disabled]) .list-group-item, 
    :host([disabled]) .list-group-item:disabled {
        color: #6c757d;
        background-color: #fff;
    }

    :host([active]) .list-group-item {
        z-index: 2;
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
    }

    :host([primary]) .list-group-item {
        color: #004085;
        background-color: #b8daff;
    }

    :host([secondary]) .list-group-item {
        color: #383d41;
        background-color: #d6d8db;
    }

    :host([success]) .list-group-item {
        color: #155724;
        background-color: #c3e6cb;
    }

    :host([info]) .list-group-item {
        color: #0c5460;
        background-color: #bee5eb;
    }

    :host([warning]) .list-group-item {
        color: #856404;
        background-color: #ffeeba;
    }

    :host([danger]) .list-group-item {
        color: #721c24;
        background-color: #f5c6cb;
    }

    :host([light]) .list-group-item {
        color: #818182;
        background-color: #fdfdfe;
    }

    :host([dark]) .list-group-item {
        color: #1b1e21;
        background-color: #c6c8ca;
    }
`;