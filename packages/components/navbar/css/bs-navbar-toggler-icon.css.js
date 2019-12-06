
import { css } from 'lit-element';

export const BsNavbarTogglerIconCss = css`

    :host {
        display: inline-block;
        width: 1.5em;
        height: 1.5em;
        vertical-align: middle;
        content: "";
        background: no-repeat center center;
        background-size: 100% 100%;
        background-image: var(--navbar-toggler-icon-background-image);
        font-size: 1.25rem;
        line-height: 1;
        color: rgba(0,0,0,0.5);
    }
`;
