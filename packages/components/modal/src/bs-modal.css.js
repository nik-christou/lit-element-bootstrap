import { css } from 'lit-element';

export const BsModalCss = css`

    .modal {
        position: var(--bs-modal-position, fixed);
        top: var(--bs-modal-top, 0);
        right: var(--bs-modal-right, 0);
        bottom: var(--bs-modal-bottom, 0);
        left: var(--bs-modal-left, 0);
        z-index: var(--bs-modal-z-index, 1050);
        display: var(--bs-modal-display, none);
        overflow: hidden;
        outline: 0;
        opacity: var(--bs-modal-opacity, 0);
        transition: opacity 0.15s linear;
    }

    :host([opened]) .modal {
        overflow-x: hidden;
        overflow-y: auto;
    }

    .modal-dialog {
        position: relative;
        width: auto;
        left: var(--bs-modal-dialog-left);
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        margin-right: 0.5rem;
        margin-left: 0.5rem;
        pointer-events: none;
        transition: -webkit-transform 0.3s ease-out;
        transition: transform 0.3s ease-out;
        transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
        -webkit-transform: translate(0, -25%);
        transform: translate(0, -25%);
    }

    :host([opened]) .modal-dialog {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
    }

    @media screen and (prefers-reduced-motion: reduce) {
        .modal-dialog {
            transition: none;
        }
    }

    :host([centered]) .modal-dialog {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        min-height: calc(100% - (0.5rem * 2));
    }

    :host([centered]) .modal-dialog::before {
        display: block;
        height: calc(100vh - (0.5rem * 2));
        content: "";
    }

    .modal-content {
        position: relative;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        width: 100%;
        pointer-events: auto;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 0.3rem;
        outline: 0;
    }

    .modal-backdrop {
        opacity: 0;
    }

    .modal-backdrop.show {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1040;
        background-color: #000;
        transition: opacity 0.15s linear;
    }

    .modal-scrollbar-measure {
        position: absolute;
        top: -9999px;
        width: 50px;
        height: 50px;
        overflow: scroll;
    }

    @media (min-width: 576px) {

        .modal-dialog {
            max-width: 500px;
            margin: 1.75rem auto;
        }

        :host([centered]) .modal-dialog {
            min-height: calc(100% - (1.75rem * 2));
        }

        :host([centered]) .modal-dialog::before {
            height: calc(100vh - (1.75rem * 2));
        }

        :host([small]) .modal-dialog {
            max-width: 300px;
        }
    }

    @media (min-width: 992px) {

        :host([large]) .modal-dialog {
            max-width: 800px;
        }
    }
`;
