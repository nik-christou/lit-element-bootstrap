import { css } from 'lit-element';

export const BsModalHeaderCss = css`

    .modal-header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding: 1rem;
        border-bottom: 1px solid #e9ecef;
        border-top-left-radius: 0.3rem;
        border-top-right-radius: 0.3rem;
    }

    bs-close-button {
        --bs-close-button-padding: 1rem;
        --bs-close-button-margin: -1rem -1rem -1rem auto;
    }

    .modal-title {
        margin-bottom: 0;
        line-height: 1.5;
    }
`;
