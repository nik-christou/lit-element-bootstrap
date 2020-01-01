import { css } from "lit-element";

export const BsButtonGroupDirectionCss = css`
    :host([direction="horizontal"]) ::slotted(:not(:last-child)) {
        --btn-bd-top-right-radius: 0;
        --btn-bd-bottom-right-radius: 0;
    }

    :host([direction="horizontal"]) ::slotted(:not(:first-child)),
    :host([direction="horizontal"]) ::slotted(:not(:first-child)),
    :host([direction="horizontal"]) ::slotted(:not(:first-child)),
    :host([direction="horizontal"]) ::slotted(:not(:first-child)) {
        --btn-bd-top-left-radius: 0;
        --btn-bd-bottom-left-radius: 0;
    }

    :host([direction="vertical"]) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        --btn-width: 100%;
    }

    :host([direction="vertical"]) ::slotted(:not(:last-child)) {
        --btn-bd-bottom-left-radius: 0;
        --btn-bd-bottom-right-radius: 0;
    }

    :host([direction="vertical"]) ::slotted(:not(:first-child)) {
        --btn-bd-top-left-radius: 0;
        --btn-bd-top-right-radius: 0;
    }
`;
