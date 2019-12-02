import { css } from "lit-element";

export const BsButtonDarkCss = css`
    :host {
        --dark-color: var(--dark, #343a40);
    }

    :host([context="dark"]) {
        --btn-text-color: var(--btn-dark-text-color, #fff);
        --btn-bg-color: var(--btn-dark-bg-color, var(--dark-color));
        --btn-bd-color: var(--btn-dark-bd-color, var(--dark-color));
        --btn-text-color-hover: var(--btn-dark-text-color-hover, #fff);
        --btn-bg-color-hover: var(--btn-dark-bg-color-hover, #23272b);
        --btn-bd-color-hover: var(--btn-dark-bd-color-hover, #1d2124);
        --btn-bd-color-focus: var(--btn-dark-bd-color-focus, #1d2124);
        --btn-box-shadow-focus: var(
            --btn-dark-box-shadow-focus,
            0 0 0 0.2rem rgba(52, 58, 64, 0.5)
        );
        --btn-text-color-disabled: var(--btn-dark-text-color-disabled, #fff);
        --btn-bg-color-disabled: var(
            --btn-dark-bg-color-disabled,
            var(--dark-color)
        );
        --btn-bd-color-disabled: var(
            --btn-dark-bd-color-disabled,
            var(--dark-color)
        );
        --btn-text-color-active: var(--btn-dark-text-color-active, #fff);
        --btn-bg-color-active: var(--btn-dark-bg-color-active, #1d2124);
        --btn-bd-color-active: var(--btn-dark-bd-color-active, #171a1d);
        --btn-box-shadow-active-focus: var(
            --btn-dark-box-shadow-active-focus,
            0 0 0 0.2rem rgba(52, 58, 64, 0.5)
        );
    }

    :host([context="dark"][outline]) {
        --btn-text-color: var(--btn-outline-dark-text-color, var(--dark-color));
        --btn-bg-color: var(--btn-outline-dark-bg-color, transparent);
        --btn-bd-color: var(--btn-outline-dark-bd-color, var(--dark-color));
        --btn-text-color-hover: var(--btn-outline-dark-text-color-hover, #fff);
        --btn-bg-color-hover: var(
            --btn-outline-dark-bg-color-hover,
            var(--dark-color)
        );
        --btn-bd-color-hover: var(
            --btn-outline-dark-bd-color-hover,
            var(--dark-color)
        );
        --btn-box-shadow-focus: var(
            --btn-outline-dark-box-shadow-focus,
            0 0 0 0.2rem rgba(52, 58, 64, 0.5)
        );
        --btn-text-color-disabled: var(
            --btn-outline-dark-text-color-disabled,
            var(--dark-color)
        );
        --btn-bg-color-disabled: var(
            --btn-outline-dark-bg-color-disabled,
            #transparent
        );
        --btn-text-color-active: var(
            --btn-outline-dark-text-color-active,
            #fff
        );
        --btn-bg-color-active: var(
            --btn-outline-dark-bg-color-active,
            var(--dark-color)
        );
        --btn-bd-color-active: var(
            --btn-outline-dark-bd-color-active,
            var(--dark-color)
        );
        --btn-box-shadow-active-focus: var(
            --btn-outline-dark-box-shadow-active-focus,
            0 0 0 0.2rem rgba(52, 58, 64, 0.5)
        );
    }
`;
