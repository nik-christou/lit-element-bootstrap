
import { css } from 'lit-element';

export const BsNavbarExpandLargeCss = css`
    
    @media (max-width: 991.98px) {
        
        :host([expand-lg]) ::slotted(bs-container) {
            padding-right: 0;
            padding-left: 0;
        }
    }

    :host([expand-lg]) {
        --nav-link-padding-left: 0;
        --nav-link-padding-right: 0;
        --nav-link-active-hover-color: rgba(0,0,0, 0.9);
        
        --dropdown-nav-link-padding-top: 0.5rem;
        --dropdown-nav-link-padding-bottom: 0.5rem;
        --dropdown-nav-link-padding-left: 0;
        --dropdown-nav-link-padding-right: 0;
        
        --dropdown-display: block;
        --dropdown-menu-position: static;
        --dropdown-menu-float: none;
        --dropdown-menu-display: none;
    }

    @media (min-width: 992px) {
        
        :host([expand-lg]) {
            flex-flow: row nowrap;
            justify-content: flex-start;
            
            --navbar-nav-flex-direction: row;
            --nav-link-padding-left: 0.5rem;
            --nav-link-padding-right: 0.5rem;
            --nav-link-active-hover-color: rgba(0,0,0, 0.9);
            
            --dropdown-nav-link-padding-left: 0.5rem;
            --dropdown-nav-link-padding-right: 0.5rem;

            --navbar-collapse-flex-basis: auto;
            --navbar-collapse-ms-flex-preferred-size: auto;
            --navbar-collapse-display: flex !important;

            --dropdown-display: flex;
            --dropdown-menu-position: absolute;
            --dropdown-menu-float: left;
            --dropdown-menu-display: block;
        }
        
        :host([expand-lg]) ::slotted(bs-container) {
            flex-wrap: nowrap;
        }
        
        :host([expand-lg]) ::slotted(bs-navbar-toggler) {
            display: none;
        }
    }
`;