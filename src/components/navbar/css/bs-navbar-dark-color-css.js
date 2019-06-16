
import { css } from 'lit-element';

export const BsNavbarDarkColorCss = css`
    
    :host([navbar-dark]) {
        
        --navbar-brand-color: #fff;
        --navbar-brand-link-hover-color: #fff;
        --navbar-brand-link-focus-color: #fff;
        
        --nav-link-color: rgba(255, 255, 255, 0.5);
        --nav-link-active-color: #fff;
        --nav-link-disabled-color: rgba(255, 255, 255, 0.25);
        --nav-link-hover-color: rgba(255, 255, 255, 0.75);
        --nav-link-focus-color: rgba(255, 255, 255, 0.75);

        --dropdown-nav-link-color: rgba(0,0,0, 0.5);
        --dropdown-nav-link-hover-border-color: transparent;
        --dropdown-nav-link-hover-color: rgba(0, 0, 0, 0.7);
        
        --navbar-toggler-color: rgba(255, 255, 255, 0.5);
        --navbar-toggler-border-color: rgba(255, 255, 255, 0.1);

        --navbar-toggler-icon-background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox=%270 0 30 30%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath stroke=%27rgba%28255, 255, 255, 0.5%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3E%3C/svg%3E");
        
        --navbar-text-color: rgba(255, 255, 255, 0.5);
        --navbar-text-link-color: #fff;
        --navbar-text-link-hover-color: color: #fff;
        --navbar-text-link-focus-color: color: #fff;
    }
`;