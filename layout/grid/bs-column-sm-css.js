
import { css } from 'lit-element';

export const BsColumnSmallCss = css`
    
    :host([sm]), 
    :host([sm-1]), 
    :host([sm-2]), 
    :host([sm-3]), 
    :host([sm-4]), 
    :host([sm-5]), 
    :host([sm-6]), 
    :host([sm-7]), 
    :host([sm-8]), 
    :host([sm-9]), 
    :host([sm-10]), 
    :host([sm-11]), 
    :host([sm-12]), 
    :host([sm-auto]) {
        display: block;
        position: relative;
        width: 100%;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
    }
    
    @media (min-width: 576px) {
        
        :host([sm-auto]) {
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            width: auto;
            max-width: none;
        }
        
        :host([sm]) {
            -ms-flex-preferred-size: 0;
            flex-basis: 0;
            -ms-flex-positive: 1;
            flex-grow: 1;
            max-width: 100%;
        }
        
        :host([sm-1]) {
            -ms-flex: 0 0 8.333333%;
            flex: 0 0 8.333333%;
            max-width: 8.333333%;
        }

        :host([sm-2]) {
            -ms-flex: 0 0 16.666667%;
            flex: 0 0 16.666667%;
            max-width: 16.666667%;
        }
        
        :host([sm-3]) {
            -ms-flex: 0 0 25%;
            flex: 0 0 25%;
            max-width: 25%;
        }

        :host([sm-4]) {
            -ms-flex: 0 0 33.333333%;
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
        }

        :host([sm-5]) {
            -ms-flex: 0 0 41.666667%;
            flex: 0 0 41.666667%;
            max-width: 41.666667%;
        }
        
        :host([sm-6]) {
            -ms-flex: 0 0 50%;
            flex: 0 0 50%;
            max-width: 50%;
        }

        :host([sm-7]) {
            -ms-flex: 0 0 58.333333%;
            flex: 0 0 58.333333%;
            max-width: 58.333333%;
        }

        :host([sm-8]) {
            -ms-flex: 0 0 66.666667%;
            flex: 0 0 66.666667%;
            max-width: 66.666667%;
        }
        
        :host([sm-9]) {
            -ms-flex: 0 0 75%;
            flex: 0 0 75%;
            max-width: 75%;
        }

        :host([sm-10]) {
            -ms-flex: 0 0 83.333333%;
            flex: 0 0 83.333333%;
            max-width: 83.333333%;
        }
        
        :host([sm-11]) {
            -ms-flex: 0 0 91.666667%;
            flex: 0 0 91.666667%;
            max-width: 91.666667%;
        }

        :host([sm-12]) {
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            max-width: 100%;
        }
        
        :host([order-sm-first]) {
            -ms-flex-order: -1;
            order: -1;
        }

        :host([order-sm-last]) {
            -ms-flex-order: 13;
            order: 13;
        }
        
        :host([order-sm-0]) {
            -ms-flex-order: 0;
            order: 0;
        }

        :host([order-sm-1]) {
            -ms-flex-order: 1;
            order: 1;
        }

        :host([order-sm-2]) {
            -ms-flex-order: 2;
            order: 2;
        }

        :host([order-sm-3]) {
            -ms-flex-order: 3;
            order: 3;
        }

        :host([order-sm-4]) {
            -ms-flex-order: 4;
            order: 4;
        }

        :host([order-sm-5]) {
            -ms-flex-order: 5;
            order: 5;
        }

        :host([order-sm-6]) {
            -ms-flex-order: 6;
            order: 6;
        }

        :host([order-sm-7]) {
            -ms-flex-order: 7;
            order: 7;
        }

        :host([order-sm-8]) {
            -ms-flex-order: 8;
            order: 8;
        }

        :host([order-sm-9]) {
            -ms-flex-order: 9;
            order: 9;
        }

        :host([order-sm-10]) {
            -ms-flex-order: 10;
            order: 10;
        }

        :host([order-sm-11]) {
            -ms-flex-order: 11;
            order: 11;
        }

        :host([order-sm-12]) {
            -ms-flex-order: 12;
            order: 12;
        }

        :host([offset-sm-0]) {
            margin-left: 0;
        }

        :host([offset-sm-1]) {
            margin-left: 8.333333%;
        }

        :host([offset-sm-2]) {
            margin-left: 16.666667%;
        }
        
        :host([offset-sm-3]) {
            margin-left: 25%;
        }
        
        :host([offset-sm-4]) {
            margin-left: 33.333333%;
        }

        :host([offset-sm-5]) {
            margin-left: 41.666667%;
        }

        :host([offset-sm-6]) {
            margin-left: 50%;
        }

        :host([offset-sm-7]) {
            margin-left: 58.333333%;
        }

        :host([offset-sm-8]) {
            margin-left: 66.666667%;
        }

        :host([offset-sm-9]) {
            margin-left: 75%;
        }

        :host([offset-sm-10]) {
            margin-left: 83.333333%;
        }

        :host([offset-sm-11]) {
            margin-left: 91.666667%;
        }
    }
`;