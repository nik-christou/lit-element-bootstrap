import { css } from 'lit-element';

export const BsModalFooterCss = css`

    .modal-footer {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 1rem;
        border-top: 1px solid #e9ecef;
    }

    :host ::slotted(:not(:first-child)) {
        margin-left: .25rem;
    }

    :host ::slotted(:not(:last-child)) {
        margin-right: .25rem;
    }
`;
