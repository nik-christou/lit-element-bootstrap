import { css } from "lit-element";

export const BsButtonCommonCss = css`
    @media screen and (prefers-reduced-motion: reduce) {
        .btn {
            transition: none;
        }
    }

    :host {
        display: inline-block;
        width: var(--btn-width);
        z-index: var(--btn-z-index-focus);
    }

    .btn {
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        color: var(--btn-text-color);
        background-color: var(--btn-bg-color);
        border-width: var(--btn-bd-width, 1px);
        border-style: var(--btn-bd-style, solid);
        border-color: var(--btn-bd-color, transparent);
        border-top-left-radius: var(--btn-bd-top-left-radius, 0.25rem);
        border-top-right-radius: var(--btn-bd-top-right-radius, 0.25rem);
        border-bottom-right-radius: var(--btn-bd-bottom-right-radius, 0.25rem);
        border-bottom-left-radius: var(--btn-bd-bottom-left-radius, 0.25rem);
        display: var(--btn-display, inline-block);
        font-weight: var(--btn-font-weight, 400);
        text-align: var(--btn-text-align, center);
        white-space: var(--btn-white-space, nowrap);
        vertical-align: var(--btn-vertical-align, middle);
        width: var(--btn-width);
        height: var(--btn-height);
        flex: var(--btn-flex);
        padding-top: var(--btn-pd-top, 0.375rem);
        padding-bottom: var(--btn-pd-bottom, 0.375rem);
        padding-left: var(--btn-pd-left, 0.75rem);
        padding-right: var(--btn-pd-right, 0.75rem);
        font-size: var(--btn-font-size, 1rem);
        line-height: var(--btn-line-height, 1.5);
        position: var(--btn-position);
        margin-top: var(--btn-mg-top);
        margin-top: var(--btn-mg-right);
        margin-left: var(--btn-mg-left);
        margin-bottom: var(--btn-mg-bottom);
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
            border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    .btn::after {
        display: var(--btn-display-after);
        width: var(--btn-width-after);
        height: var(--btn-height-after);
        margin-left: var(--btn-margin-left-after);
        vertical-align: var(--btn-vertical-align-after);
        content: var(--btn-content-after);
        border-top: var(--btn-border-top-after);
        border-right: var(--btn-border-right-after);
        border-bottom: var(--btn-border-bottom-after);
        border-left: var(--btn-border-left-after);
    }

    .btn:empty::after {
        margin-left: var(--btn-margin-left-empty-after);
    }

    .btn::before {
        display: var(--btn-display-before);
        width: var(--btn-width-before);
        height: var(--btn-height-before);
        margin-left: var(--btn-margin-left-before);
        vertical-align: var(--btn-vertical-align-before);
        content: var(--btn-content-before);
        border-top: var(--btn-border-top-before);
        border-right: var(--btn-border-right-before);
        border-bottom: var(--btn-border-bottom-before);
        border-left: var(--btn-border-left-before);
    }

    .btn:hover {
        z-index: var(--btn-z-index-hover);
        color: var(--btn-text-color-hover);
        border-color: var(--btn-bd-color-hover);
        box-shadow: var(--btn-box-shadow-hover);
        background-color: var(--btn-bg-color-hover);
        text-decoration: var(--btn-text-decoration-hover, none);
    }

    .btn:focus,
    .btn.focus {
        outline: 0;
        z-index: var(--btn-z-index-focus);
        color: var(--btn-text-color-focus);
        background-color: var(--btn-bg-color-focus);
        border-color: var(--btn-bd-color-focus);
        text-decoration: var(--btn-text-decoration-focus, none);
        box-shadow: var(
            --btn-box-shadow-focus,
            0 0 0 0.2rem rgba(0, 123, 255, 0.25)
        );
    }

    .btn.disabled,
    .btn:disabled {
        color: var(--btn-text-color-disabled);
        background-color: var(--btn-bg-color-disabled);
        border-color: var(--btn-bd-color-disabled);
    }

    :host([disabled]) .btn {
        opacity: var(--btn-opacity-disabled, 0.65);
        pointer-events: var(--btn-pointer-events-disabled, none);
    }

    .btn:not(:disabled):not(.disabled):active,
    .btn:not(:disabled):not(.disabled).active {
        color: var(--btn-text-color-active);
        background-color: var(--btn-bg-color-active);
        border-color: var(--btn-bd-color-active);
    }

    .btn:not(:disabled):not(.disabled):active:focus,
    .btn:not(:disabled):not(.disabled).active:focus {
        box-shadow: var(--btn-box-shadow-active-focus);
    }

    :host(:not(:disabled):not(.disabled)) .btn {
        cursor: pointer;
        z-index: var(--btn-z-index-active);
    }
`;
