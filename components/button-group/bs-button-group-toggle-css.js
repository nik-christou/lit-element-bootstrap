
import { css } from 'lit-element';

// TODO: Delete this file if used nowhere

export const BsButtonGroupToggleCss = css`
    
    .btn-group-toggle > .btn,
    .btn-group-toggle > .btn-group > .btn {
        margin-bottom: 0;
    }

    .btn-group-toggle > .btn input[type="radio"],
    .btn-group-toggle > .btn input[type="checkbox"],
    .btn-group-toggle > .btn-group > .btn input[type="radio"],
    .btn-group-toggle > .btn-group > .btn input[type="checkbox"] {
        position: absolute;
        clip: rect(0, 0, 0, 0);
        pointer-events: none;
    }
`;