
import { css } from 'lit-element';

export const BsCarouselIndicatorCss = css`

    :host {
        position: relative;
        flex: 0 1 auto;
        width: 30px;
        height: 3px;
        margin-right: 3px;
        margin-left: 3px;
        text-indent: -999px;
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.5);
    }

    :host([active]) {
        background-color: #fff;
    }

    :host::before {
        position: absolute;
        top: -10px;
        left: 0;
        display: inline-block;
        width: 100%;
        height: 10px;
        content: "";
    }

    :host::after {
        position: absolute;
        bottom: -10px;
        left: 0;
        display: inline-block;
        width: 100%;
        height: 10px;
        content: "";
    }
`;
