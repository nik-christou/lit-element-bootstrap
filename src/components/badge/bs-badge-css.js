
import { css } from 'lit-element';

export const BsBadgeCss = css`
                
    .badge {
        display: inline-block;
        padding: 0.25em 0.4em;
        font-size: 75%;
        font-weight: 700;
        line-height: 1;
        text-align: center;
        white-space: nowrap;
        vertical-align: baseline;
        border-radius: 0.25rem;
    }

    .badge:empty {
        display: none;
    }

    :host-context(.btn) .badge {
        position: relative;
        top: -1px;
    }

    :host([pill]) .badge {
        padding-right: 0.6em;
        padding-left: 0.6em;
        border-radius: 10rem;
    }

    :host([primary]) .badge {
        color: #fff;
        background-color: #007bff;
    }

    :host([secondary]) .badge {
        color: #fff;
        background-color: #6c757d;
    }

    :host([success]) .badge {
        color: #fff;
        background-color: #28a745;
    }

    :host([info]) .badge {
        color: #fff;
        background-color: #17a2b8;
    }

    :host([warning]) .badge {
        color: #212529;
        background-color: #ffc107;
    }

    :host([danger]) .badge {
        color: #fff;
        background-color: #dc3545;
    }

    :host([light]) .badge {
        color: #212529;
        background-color: #f8f9fa;
    }

    :host([dark]) .badge {
        color: #fff;
        background-color: #343a40;
    }
`;