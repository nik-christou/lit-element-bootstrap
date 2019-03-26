
import { css } from 'lit-element';

export const BsNavbarLightColorCss = css`
    
    :host([navbar-light]) {
        
        --navbar-brand-color: rgba(0, 0, 0, 0.9);
        --navbar-brand-link-hover-color: rgba(0, 0, 0, 0.9);
        --navbar-brand-link-focus-color: rgba(0, 0, 0, 0.9);
        
        --nav-link-active-color: rgba(0,0,0, 0.9);
        --nav-link-color: rgba(0,0,0, 0.5);
        --nav-link-disabled-color: rgba(0, 0, 0, 0.3);
        --nav-link-hover-color: rgba(0, 0, 0, 0.7);

        --dropdown-nav-link-color: rgba(0,0,0, 0.5);
        --dropdown-nav-link-hover-border-color: transparent;
        --dropdown-nav-link-hover-color: rgba(0, 0, 0, 0.7);
        
        --navbar-toggler-color: rgba(0, 0, 0, 0.5);
        --navbar-toggler-border-color: rgba(0, 0, 0, 0.1);

        --navbar-toggler-icon-background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox=%270 0 30 30%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath stroke=%27rgba%280,0,0,0.5%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3E%3C/svg%3E");
        
        --navbar-text-color: rgba(0, 0, 0, 0.5);
        --navbar-text-link-color: rgba(0, 0, 0, 0.9);
        --navbar-text-link-hover-color: rgba(0, 0, 0, 0.9);
        --navbar-text-link-focus-color: rgba(0, 0, 0, 0.9);
    }
`;