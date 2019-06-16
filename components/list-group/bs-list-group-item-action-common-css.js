
import { css } from 'lit-element';

export const BsListGroupItemActionCommonCss = css`

    .list-group-item-action {
        width: 100%;
        color: #495057;
        text-align: inherit;
    }

    .list-group-item-action:hover, 
    .list-group-item-action:focus {
        color: #495057;
        text-decoration: none;
        background-color: #f8f9fa;
    }

    :host([active]) .list-group-item-action {
        color: #212529;
        background-color: #e9ecef;
    }

    :host([primary]) .list-group-item-action:hover, 
    :host([primary]) .list-group-item-action:focus {
        color: #004085;
        background-color: #9fcdff;
    }

    :host([primary][active]) .list-group-item-action {
        color: #fff;
        background-color: #004085;
        border-color: #004085;
    }

    :host([secondary]) .list-group-item-action:hover, 
    :host([secondary]) .list-group-item-action:focus {
        color: #383d41;
        background-color: #c8cbcf;
    }

    :host([secondary][active]) .list-group-item-action {
        color: #fff;
        background-color: #383d41;
        border-color: #383d41;
    }

    :host([success]) .list-group-item-action:hover, 
    :host([success]) .list-group-item-action:focus {
        color: #155724;
        background-color: #b1dfbb;
    }

    :host([success][active]) .list-group-item-action {
        color: #fff;
        background-color: #155724;
        border-color: #155724;
    }

    :host([info]) .list-group-item-action:hover, 
    :host([info]) .list-group-item-action:focus {
        color: #0c5460;
        background-color: #abdde5;
    }

    :host([info][active]) .list-group-item-action {
        color: #fff;
        background-color: #0c5460;
        border-color: #0c5460;
    }

    :host([warning]) .list-group-item-action:hover, 
    :host([warning]) .list-group-item-action:focus {
        color: #856404;
        background-color: #ffe8a1;
    }

    :host([warning][active]) .list-group-item-action {
        color: #fff;
        background-color: #856404;
        border-color: #856404;
    }

    :host([danger]) .list-group-item-action:hover, 
    :host([danger]) .list-group-item-action:focus {
        color: #721c24;
        background-color: #f1b0b7;
    }

    :host([danger][active]) .list-group-item-action {
        color: #fff;
        background-color: #721c24;
        border-color: #721c24;
    }

    :host([light]) .list-group-item-action:hover, 
    :host([light]) .list-group-item-action:focus {
        color: #818182;
        background-color: #ececf6;
    }

    :host([light][active]) .list-group-item-action {
        color: #fff;
        background-color: #818182;
        border-color: #818182;
    }

    :host([dark]) .list-group-item-action:hover, 
    :host([dark]) .list-group-item-action:focus {
        color: #1b1e21;
        background-color: #b9bbbe;
    }

    :host([dark][active]) .list-group-item-action {
        color: #fff;
        background-color: #1b1e21;
        border-color: #1b1e21;
    }
`;