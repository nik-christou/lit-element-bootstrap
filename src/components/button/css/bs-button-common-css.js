
import { css } from 'lit-element';

export const BsButtonsCommonCss = css`


    :host {
        display: inline-block;
        width: var(--bs-button-width);
        z-index: var(--bs-button-focus-z-index);
    }

    .btn {
        display: var(--bs-button-display, inline-block);
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        height: var(--bs-button-height);
        color: var(--bs-button-color);
        border-width: var(--bs-button-border-width, 1px);
        border-style: var(--bs-button-border-style, solid);
        border-color: var(--bs-button-border-color, transparent);
        padding-top: var(--bs-button-padding-top, 0.375rem);
        padding-bottom: var(--bs-button-padding-bottom, 0.375rem);
        padding-left: var(--bs-button-padding-left, 0.75rem);
        padding-right: var(--bs-button-padding-right, 0.75rem);
        font-size: var(--bs-button-font-size, 1rem);
        line-height: var(--bs-button-line-height, 1.5);
        width: var(--bs-button-width);
        position: var(--bs-button-position);
        flex: var(--bs-button-flex);
        margin-top: var(--bs-button-margin-top);
        margin-left: var(--bs-button-margin-left);
        margin-bottom: var(--bs-button-margin-bottom);
        background-color: var(--bs-button-background-color);
        border-top-left-radius: var(--bs-button-border-top-left-radius, 0.25rem);
        border-top-right-radius: var(--bs-button-border-top-right-radius, 0.25rem);
        border-bottom-right-radius: var(--bs-button-border-bottom-right-radius, 0.25rem);
        border-bottom-left-radius: var(--bs-button-border-bottom-left-radius, 0.25rem);
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
    
    .btn::after {
        display: var(--bs-button-after-display);
        width: var(--bs-button-after-width);
        height: var(--bs-button-after-height);
        margin-left: var(--bs-button-after-margin-left);
        vertical-align: var(--bs-button-after-vertical-align);
        content: var(--bs-button-after-content);
        border-top: var(--bs-button-after-border-top);
        border-right: var(--bs-button-after-border-right);
        border-bottom: var(--bs-button-after-border-bottom);
        border-left: var(--bs-button-after-border-left);
    }
    
    .btn:empty::after {
        margin-left: var(--bs-button-empty-after-margin-left);
    }

    .btn::before {
        display: var(--bs-button-before-display);
        width: var(--bs-button-before-width);
        height: var(--bs-button-before-height);
        margin-left: var(--bs-button-before-margin-left);
        vertical-align: var(--bs-button-before-vertical-align);
        content: var(--bs-button-before-content);
        border-top: var(--bs-button-before-border-top);
        border-right: var(--bs-button-before-border-right);
        border-bottom: var(--bs-button-before-border-bottom);
        border-left: var(--bs-button-before-border-left);
    }
    
    @media screen and (prefers-reduced-motion: reduce) {
        .btn {
            transition: none;
        }
    }
    
    .btn:hover {
        text-decoration: none;
        color: var(--bs-button-color-hover);
        box-shadow: var(--bs-button-box-shadow-hover);
        z-index: var(--bs-button-hover-z-index);
        border-color: var(--bs-button-border-color-hover);
    }
    
    .btn:focus,
    .btn.focus {
        outline: 0;
        text-decoration: none;
        color: var(--bs-button-color-focus);
        box-shadow: var(--bs-button-box-shadow-focus, 0 0 0 0.2rem rgba(0, 123, 255, 0.25));
        z-index: var(--bs-button-focus-z-index);
        border-color: var(--bs-button-border-color-focus);
    }

    :host([disabled]) .btn {
        opacity: 0.65;
        pointer-events: none;
    }
    
    :host(:not(:disabled):not(.disabled)) .btn {
        cursor: pointer;
        z-index: var(--bs-button-active-z-index);
    }
`;