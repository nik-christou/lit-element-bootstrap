
import { css } from 'lit-element';

export const BsFloatCss = css`
    
    .float-left {
        float: left !important;
    }

    .float-right {
        float: right !important;
    }

    .float-none {
        float: none !important;
    }

    @media (min-width: 576px) {
        
        .float-sm-left {
            float: left !important;
        }
        
        .float-sm-right {
            float: right !important;
        }

        .float-sm-none {
            float: none !important;
        }
    }

    @media (min-width: 768px) {
      
        .float-md-left {
            float: left !important;
        }
        
        .float-md-right {
            float: right !important;
        }

        .float-md-none {
            float: none !important;
        }
    }

    @media (min-width: 992px) {
    
        .float-lg-left {
            float: left !important;
        }

        .float-lg-right {
            float: right !important;
        }
        
        .float-lg-none {
            float: none !important;
        }
    }

    @media (min-width: 1200px) {
    
        .float-xl-left {
            float: left !important;
        }

        .float-xl-right {
            float: right !important;
        }

        .float-xl-none {
            float: none !important;
        }
    }
`;