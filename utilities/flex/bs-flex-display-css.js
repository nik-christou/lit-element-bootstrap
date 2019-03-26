
import { css } from 'lit-element';

export const BsFlexDisplayCss = css`
    
    .d-flex {
        display: -ms-flexbox !important;
        display: flex !important;
    }

    .d-inline-flex {
        display: -ms-inline-flexbox !important;
        display: inline-flex !important;
    }

    @media (min-width: 576px) {

        .d-sm-flex {
            display: -ms-flexbox !important;
            display: flex !important;
        }

        .d-sm-inline-flex {
            display: -ms-inline-flexbox !important;
            display: inline-flex !important;
        }
    }

    @media (min-width: 768px) {

        .d-md-flex {
            display: -ms-flexbox !important;
            display: flex !important;
        }

        .d-md-inline-flex {
            display: -ms-inline-flexbox !important;
            display: inline-flex !important;
        }
    }

    @media (min-width: 992px) {

        .d-lg-flex {
            display: -ms-flexbox !important;
            display: flex !important;
        }

        .d-lg-inline-flex {
            display: -ms-inline-flexbox !important;
            display: inline-flex !important;
        }
    }

    @media (min-width: 1200px) {

        .d-xl-flex {
            display: -ms-flexbox !important;
            display: flex !important;
        }

        .d-xl-inline-flex {
            display: -ms-inline-flexbox !important;
            display: inline-flex !important;
        }
    }

    @media print {

        .d-print-flex {
            display: -ms-flexbox !important;
            display: flex !important;
        }

        .d-print-inline-flex {
            display: -ms-inline-flexbox !important;
            display: inline-flex !important;
        }
    }
`;