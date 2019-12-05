
import { css } from 'lit-element';

export const BsCarouselItemCss = css`

    :host {
        position: relative;
        display: none;
        align-items: center;
        width: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-perspective: 1000px;
        perspective: 1000px;
    }

    :host([active]),
    :host([next]),
    :host([prev]) {
        display: block;
        transition: -webkit-transform 0.6s ease;
        transition: transform 0.6s ease;
        transition: transform 0.6s ease, -webkit-transform 0.6s ease;
    }

    @media screen and (prefers-reduced-motion: reduce) {
        :host([active]),
        :host([next]),
        :host([prev]) {
            transition: none;
        }
    }

    :host([active]),
    :host([next]),
    :host([prev]) {
        display: block;
    }

    :host([next]),
    :host([prev]) {
        position: absolute;
        top: 0;
    }

    :host([next][left]),
    :host([prev][right]) {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }

    @supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {
        :host([next][left]),
        :host([prev][right]) {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    :host([next]),
    :host([active][right]) {
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
    }

    @supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {
        :host([next]),
        :host([active][right]) {
            -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
        }
    }

    :host([prev]),
    :host([active][left]) {
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
    }

    @supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {
        :host([prev]),
        :host([active][left]) {
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
        }
    }

    :host([fade]) {
        opacity: 0;
        transition-duration: .6s;
        transition-property: opacity;
    }

    :host([fade][active]),
    :host([fade][next][left]),
    :host([fade][next][right]) {
        opacity: 1;
    }

    :host([fade][left]),
    :host([fade][active][right]) {
        opacity: 0;
    }

    :host([fade][next]),
    :host([fade][prev]),
    :host([fade][active]),
    :host([fade][active][left]),
    :host([fade][active][prev]) {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }

    @supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {
        :host([fade][next]),
        :host([fade][prev]),
        :host([fade][active]),
        :host([fade][active][left]),
        :host([fade][active][prev]) {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }
`;
