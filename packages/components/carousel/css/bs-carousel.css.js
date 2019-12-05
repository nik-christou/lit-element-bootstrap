
import { css } from 'lit-element';

export const BsCarouselCss = css`

    :host {
        display: block;
        position: relative;
    }

    :host(:hover),
    :host(:focus) {
        color: #fff;
        text-decoration: none;
        outline: 0;
    }

    .carousel-inner {
        position: relative;
        width: 100%;
        overflow: hidden;
    }
`;
