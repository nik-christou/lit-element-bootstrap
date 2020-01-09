import { css } from "lit-element";

export const BsButtonGroupDirectionCss = css`
    :host([direction="horizontal"]) ::slotted(:not(:last-child)) {
        --btn-bd-top-right-radius: var(
            --btn-group-btn-bd-top-right-radius-h,
            0
        );
        --btn-bd-bottom-right-radius: var(
            --btn-group-btn-bd-bottom-right-radius-h,
            0
        );
    }

    :host([direction="horizontal"]) ::slotted(:not(:first-child)) {
        --btn-bd-top-left-radius: var(--btn-group-btn-bd-top-left-radius-h, 0);
        --btn-bd-bottom-left-radius: var(
            --btn-group-btn-bd-botom-left-radius-h,
            0
        );
    }

    :host([direction="vertical"]) {
        flex-direction: var(--btn-group-flex-direction-v, column);
        align-items: var(--btn-group-align-items-v, flex-start);
        justify-content: var(--btn-group-justify-content-v, center);
        --btn-width: var(--btn-group-btn-width-v, 100%);
    }

    :host([direction="vertical"]) ::slotted(:not(:last-child)) {
        --btn-bd-bottom-left-radius: var(
            --btn-group-btn-bd-bottom-left-radius-v,
            0
        );
        --btn-bd-bottom-right-radius: var(
            --btn-group-btn-bd-bottom-right-radius-v,
            0
        );
    }

    :host([direction="vertical"]) ::slotted(:not(:first-child)) {
        --btn-bd-top-left-radius: var(--btn-group-btn-bd-top-left-radius-v, 0);
        --btn-bd-top-right-radius: var(
            --btn-group-btn-bd-top-right-radius-v,
            0
        );
    }
`;
