
import { css } from 'lit-element';

export const BsContentTypographyCss = css`
    
    h1, h2, h3, h4, h5, h6,
    .h1, .h2, .h3, .h4, .h5, .h6 {
        margin-bottom: 0.5rem;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.2;
        color: inherit;
    }
    
    h1, .h1 {
        font-size: 2.5rem;
    }
    
    h2, .h2 {
        font-size: 2rem;
    }
    
    h3, .h3 {
        font-size: 1.75rem;
    }
    
    h4, .h4 {
        font-size: 1.5rem;
    }
    
    h5, .h5 {
        font-size: 1.25rem;
    }
    
    h6, .h6 {
        font-size: 1rem;
    }
    
    .lead {
        font-size: 1.25rem;
        font-weight: 300;
    }
    
    .display-1 {
        font-size: 6rem;
        font-weight: 300;
        line-height: 1.2;
    }
    
    .display-2 {
        font-size: 5.5rem;
        font-weight: 300;
        line-height: 1.2;
    }
    
    .display-3 {
        font-size: 4.5rem;
        font-weight: 300;
        line-height: 1.2;
    }
    
    .display-4 {
        font-size: 3.5rem;
        font-weight: 300;
        line-height: 1.2;
    }
    
    hr {
        margin-top: 1rem;
        margin-bottom: 1rem;
        border: 0;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
    
    small, .small {
        font-size: 80%;
        font-weight: 400;
    }
    
    mark, .mark {
        padding: 0.2em;
        background-color: #fcf8e3;
    }
    
    .list-unstyled {
        padding-left: 0;
        list-style: none;
    }
    
    .list-inline {
        padding-left: 0;
        list-style: none;
    }
    
    .list-inline-item {
        display: inline-block;
    }

    .list-inline-item:not(:last-child) {
        margin-right: 0.5rem;
    }
    
    .initialism {
        font-size: 90%;
        text-transform: uppercase;
    }
    
    .blockquote {
        margin-bottom: 1rem;
        font-size: 1.25rem;
    }
    
    .blockquote-footer {
        display: block;
        font-size: 80%;
        color: #6c757d;
    }
    
    .blockquote-footer::before {
        content: "\\2014 \\00A0";
    }
`;