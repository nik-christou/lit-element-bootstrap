import { css } from "lit-element";

export const BsBadgeLinkCss = css`
    :host([pill]) {
        --badge-link-pd-right: var(--badge-link-pill-pd-top, 0.6em);
        --badge-link-pd-left: var(--badge-link-pill-pd-left, 0.6em);
        --badge-link-bd-radius: var(--badge-link-pill-bd-radius, 10rem);
    }

    :host([context="primary"]) a {
        --badge-link-color: var(--badge-link-primary-color, #fff);
        --badge-link-bg-color: var(--badge-link-primary-bg-color, #007bff);
        --badge-link-text-decoration: var(
            --badge-link-primary-text-decoration,
            none
        );
    }

    :host([context="primary"]) a:hover {
        --badge-link-color: var(--badge-link-primary-hover-color, #fff);
        --badge-link-bg-color: var(
            --badge-link-primary-hover-bg-color,
            #0062cc
        );
    }

    :host([context="primary"]) a:focus :host([context="primary"]) a.focus {
        --badge-link-color: var(--badge-link-primary-focus-color, #fff);
        --badge-link-bg-color: var(
            --badge-link-primary-focus-bg-color,
            #0062cc
        );
        --badge-link-outline: var(--badge-link-primary-link-outline, 0);
        --badge-link-box-shadow: var(
            --badge-link-primary-link-box-shadow,
            0 0 0 0.2rem rgba(0, 123, 255, 0.5)
        );
    }

    :host([context="secondary"]) a {
        --badge-link-color: var(--badge-link-secondary-color, #fff);
        --badge-link-bg-color: var(--badge-link-secondary-bg-color, #6c757d);
        --badge-link-text-decoration: var(
            --badge-link-secondary-text-decoration,
            none
        );
    }

    :host([context="secondary"]) a:hover {
        --badge-link-color: var(--badge-link-secondary-hover-color, #fff);
        --badge-link-bg-color: var(
            --badge-link-secondary-hover-bg-color,
            #545b62
        );
    }

    :host([context="secondary"]) a:focus :host([context="secondary"]) a.focus {
        --badge-link-color: var(--badge-link-secondary-focus-color, #fff);
        --badge-link-bg-color: var(
            --badge-link-secondary-focus-bg-color,
            #545b62
        );
        --badge-link-outline: var(--badge-link-secondary-link-outline, 0);
        --badge-link-box-shadow: var(
            --badge-link-secondary-link-box-shadow,
            0 0 0 0.2rem rgba(108, 117, 125, 0.5)
        );
    }

    :host([context="success"]) a {
        --badge-link-color: var(--badge-link-success-color, #fff);
        --badge-link-bg-color: var(--badge-link-success-bg-color, #28a745);
        --badge-link-text-decoration: var(
            --badge-link-success-text-decoration,
            none
        );
    }

    :host([context="success"]) a:hover {
        --badge-link-color: var(--badge-link-success-hover-color, #fff);
        --badge-link-bg-color: var(
            --badge-link-success-hover-bg-color,
            #1e7e34
        );
    }

    :host([context="success"]) a:focus :host([context="success"]) a.focus {
        --badge-link-color: var(--badge-link-success-focus-color, #fff);
        --badge-link-bg-color: var(
            --badge-link-success-focus-bg-color,
            #1e7e34
        );
        --badge-link-outline: var(--badge-link-success-link-outline, 0);
        --badge-link-box-shadow: var(
            --badge-link-success-link-box-shadow,
            0 0 0 0.2rem rgba(40, 167, 69, 0.5)
        );
    }

    :host([context="info"]) a {
        --badge-link-color: var(--badge-link-info-color, #fff);
        --badge-link-bg-color: var(--badge-link-info-bg-color, #17a2b8);
        --badge-link-text-decoration: var(
            --badge-link-info-text-decoration,
            none
        );
    }

    :host([context="info"]) a:hover {
        --badge-link-color: var(--badge-link-info-hover-color, #fff);
        --badge-link-bg-color: var(--badge-link-info-hover-bg-color, #117a8b);
    }

    :host([context="info"]) a:focus :host([context="info"]) a.focus {
        --badge-link-color: var(--badge-link-info-focus-color, #fff);
        --badge-link-bg-color: var(--badge-link-info-focus-bg-color, #117a8b);
        --badge-link-outline: var(--badge-link-info-link-outline, 0);
        --badge-link-box-shadow: var(
            --badge-link-info-link-box-shadow,
            0 0 0 0.2rem rgba(23, 162, 184, 0.5)
        );
    }

    :host([context="warning"]) a {
        --badge-link-color: var(--badge-link-warning-color, #212529);
        --badge-link-bg-color: var(--badge-link-warning-bg-color, #ffc107);
        --badge-link-text-decoration: var(
            --badge-link-warning-text-decoration,
            none
        );
    }

    :host([context="warning"]) a:hover {
        --badge-link-color: var(--badge-link-warning-hover-color, #212529);
        --badge-link-bg-color: var(
            --badge-link-warning-hover-bg-color,
            #d39e00
        );
    }

    :host([context="warning"]) a:focus :host([context="warning"]) a.focus {
        --badge-link-color: var(--badge-link-warning-focus-color, #212529);
        --badge-link-bg-color: var(
            --badge-link-warning-focus-bg-color,
            #d39e00
        );
        --badge-link-outline: var(--badge-link-warning-link-outline, 0);
        --badge-link-box-shadow: var(
            --badge-link-warning-link-box-shadow,
            0 0 0 0.2rem rgba(255, 193, 7, 0.5)
        );
    }

    :host([context="danger"]) a {
        --badge-link-color: var(--badge-link-danger-color, #fff);
        --badge-link-bg-color: var(--badge-link-danger-bg-color, #dc3545);
        --badge-link-text-decoration: var(
            --badge-link-danger-text-decoration,
            none
        );
    }

    :host([context="danger"]) a:hover {
        --badge-link-color: var(--badge-link-danger-hover-color, #fff);
        --badge-link-bg-color: var(--badge-link-danger-hover-bg-color, #bd2130);
    }

    :host([context="danger"]) a:focus :host([context="danger"]) a.focus {
        --badge-link-color: var(--badge-link-danger-focus-color, #fff);
        --badge-link-bg-color: var(--badge-link-danger-focus-bg-color, #bd2130);
        --badge-link-outline: var(--badge-link-danger-link-outline, 0);
        --badge-link-box-shadow: var(
            --badge-link-danger-link-box-shadow,
            0 0 0 0.2rem rgba(220, 53, 69, 0.5)
        );
    }

    :host([context="light"]) a {
        --badge-link-color: var(--badge-link-light-color, #212529);
        --badge-link-bg-color: var(--badge-link-light-bg-color, #f8f9fa);
        --badge-link-text-decoration: var(
            --badge-link-light-text-decoration,
            none
        );
    }

    :host([context="light"]) a:hover {
        --badge-link-color: var(--badge-link-light-hover-color, #212529);
        --badge-link-bg-color: var(--badge-link-light-hover-bg-color, #dae0e5);
    }

    :host([context="light"]) a:focus :host([context="light"]) a.focus {
        --badge-link-color: var(--badge-link-light-focus-color, #212529);
        --badge-link-bg-color: var(--badge-link-light-focus-bg-color, #dae0e5);
        --badge-link-outline: var(--badge-link-light-link-outline, 0);
        --badge-link-box-shadow: var(
            --badge-link-light-link-box-shadow,
            0 0 0 0.2rem rgba(248, 249, 250, 0.5)
        );
    }

    :host([context="dark"]) a {
        --badge-link-color: var(--badge-dark-color, #fff);
        --badge-link-bg-color: var(--badge-dark-bg-color, #343a40);
        --badge-link-text-decoration: var(
            --badge-link-dark-text-decoration,
            none
        );
    }

    :host([context="dark"]) a:hover {
        --badge-link-color: var(--badge-link-dark-hover-color, #fff);
        --badge-link-bg-color: var(--badge-link-dark-hover-bg-color, #1d2124);
    }

    :host([context="dark"]) a:focus :host([context="dark"]) a.focus {
        --badge-link-color: var(--badge-link-dark-focus-color, #212529);
        --badge-link-bg-color: var(--badge-link-dark-focus-bg-color, #dae0e5);
        --badge-link-outline: var(--badge-link-dark-link-outline, 0);
        --badge-link-box-shadow: var(
            --badge-link-dark-link-box-shadow,
            0 0 0 0.2rem rgba(52, 58, 64, 0.5)
        );
    }

    a {
        display: inline-block;
        padding-top: var(--badge-link-pd-top, 0.25em);
        padding-bottom: var(--badge-link-pd-bottom, 0.25em);
        padding-left: var(--badge-link-pd-left, 0.4em);
        padding-right: var(--badge-link-pd-right, 0.4em);
        font-size: var(--badge-link-font-size, 75%);
        font-weight: var(--badge-link-font-wg, 700);
        line-height: var(--badge-link-line-hg, 1);
        text-align: var(--badge-link-text-align, center);
        white-space: nowrap;
        vertical-align: baseline;
        border-radius: var(--badge-link-bd-radius, 0.25rem);
        color: var(--badge-link-color, #007bff);
        background-color: var(--badge-link-bg-color, transparent);
        outline: var(--badge-link-outline);
        box-shadow: var(--badge-link-box-shadow);
        text-decoration: var(--badge-link-text-decoration, none);
        -webkit-text-decoration-skip: objects;
    }

    a:hover {
        text-decoration: var(--badge-link-hover-text-decoration, none);
    }

    a:focus {
        text-decoration: var(--badge-link-focus-text-decoration, none);
    }

    @media (prefers-reduced-motion: reduce) {
        a {
            transition: none;
        }
    }

    a:empty {
        display: none;
    }

    a:not([href]):not([tabindex]) {
        color: inherit;
        text-decoration: none;
    }

    a:not([href]):not([tabindex]):hover,
    a:not([href]):not([tabindex]):focus {
        color: inherit;
        text-decoration: none;
    }

    a:not([href]):not([tabindex]):focus {
        outline: 0;
    }
`;
