
import { css } from 'lit-element';

export const BsCardImgCss = css`

    :host {
        display: block;
        width: 100%;
    }

    :host ::slotted(img), :host ::slotted(svg) {
        width: var(--bs-img-width, 100%);
        height: var(--bs-img-height);
        display: block;
    }

    :host([position="top"]) ::slotted(img),
    :host([position="top"]) ::slotted(svg) {
        border-top-left-radius: var(--card-img-top-left-border-radius, calc(0.25rem - 1px));
        border-top-right-radius: var(--card-img-top-right-border-radius, calc(0.25rem - 1px));
    }

    :host([position="bottom"]) ::slotted(img),
    :host([position="bottom"]) ::slotted(svg) {
        border-bottom-left-radius: var(--card-img-bottom-left-border-radius, calc(0.25rem - 1px));
        border-bottom-right-radius: var(--card-img-bottom-right-border-radius, calc(0.25rem - 1px));
    }

    :host([position="overlay"]) :slotted(img),
    :host([position="overlay"]) :slotted(svg) {
        border-radius: calc(0.25rem - 1px);
    }

    :host(:not([position="top"]):not([position="bottom"]):not([position="overlay"])) :slotted(img),
    :host(:not([position="top"]):not([position="bottom"]):not([position="overlay"])) :slotted(svg) {
        border-radius: calc(0.25rem - 1px);
    }
`;
