
import { css } from 'lit-element';

export const BsClearfixCss = css`
    
    .clearfix::after {
        display: block;
        clear: both;
        content: "";
    }
`;