
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';

export class BsCollapsable extends LitElement {
    
    static get properties() {
        return {
            expanded: {type: Boolean, reflect: true},
            collapsed: {type: Boolean, reflect: true},
            transitioning: {type: Boolean, reflect: true}
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    display: block;
                    height: auto;
                    transition-property: var(--bs-collapsable-transition-property, height);
                    transition-duration: var(--bs-collapsable-transition-duration, 0.35s);
                    transition-timing-function: var(--bs-collapsable-transition-timing-function, ease);
                }
                
                :host([transitioning]) {
                    position: relative;
                }
                
                @media screen and (prefers-reduced-motion: reduce) {
                    :host {
                        transition: none;
                    }
                }
            `
        ];
    }
    
    render() {
        return html`
            <slot></slot>
        `;
    }
    
    constructor() {
        super();
        this.expanded = false;
        this.collapsed = false;
        this.transitioning = false;
    }
    
    firstUpdated() {
        this.addEventListener('transitionend', event => this._afterCollapsingTransition(event));
        
        if(this.collapsed) {
            this._collapseCollapsable();
        }
    }
    
    _afterCollapsingTransition() {

        if(this.expanded) {
            this.shadowRoot.host.style.overflow = 'inherit';
            this.shadowRoot.host.style.height = 'auto';
        }

        this.transitioning = false;
    }
    
    toggle() {
        this.transitioning = true;

        if(this.expanded) {
            this._collapseCollapsable();
        } else {
            this._expandCollapsable();
        }
    }
    
    expand() {
        this._expandCollapsable();
    }
    
    collapse() {
        this._collapseCollapsable();
    }
    
    isExpanded() {
        return this.expanded;
    }
    
    _expandCollapsable() {
        this.expanded = true;
        this.collapsed = false;
        this.shadowRoot.host.style.height = this._getSlottedElementsHeight()+'px';
    }
    
    _collapseCollapsable() {
        this.collapsed = true;
        this.expanded = false;
        this._updateHeightBeforeCollapse();
        this.shadowRoot.host.style.overflow = 'hidden';
        this.shadowRoot.host.style.height = '0';
    }

    _updateHeightBeforeCollapse() {

        const existingHeight = this.shadowRoot.host.style.height;
        
        if(!existingHeight || existingHeight === 'auto') {
            
            this.shadowRoot.host.style.transition = 'none';
            this.shadowRoot.host.style.height = window.getComputedStyle(this.shadowRoot.host).height;
            
            //force browser to repaint after we change the height
            window.getComputedStyle(this.shadowRoot.host).height;
            
            this.shadowRoot.host.style.transitionProperty = this._getTransitionProperty();
            this.shadowRoot.host.style.transitionDuration = this._getTransitionDuration();
            this.shadowRoot.host.style.transitionTimingFunction = this._getTransitionTimingFunction();
        }
    }

    _getTransitionTimingFunction() {

        const transitionTimingFunction =  getComputedStyle(this.shadowRoot.host).getPropertyValue('--bs-collapsable-transition-timing-function');

        if(!transitionTimingFunction) {
            return 'ease';
        }

        return transitionTimingFunction;
    }

    _getTransitionDuration() {

        const transitionDuration = getComputedStyle(this.shadowRoot.host).getPropertyValue('--bs-collapsable-transition-duration');

        if(!transitionDuration) {
            return '0.35s';
        }

        return transitionDuration;
    }

    _getTransitionProperty() {

        const transitionProperty = getComputedStyle(this.shadowRoot.host).getPropertyValue('--bs-collapsable-transition-property');

        if(!transitionProperty) {
            return 'height';
        }

        return transitionProperty;
    }
    
    _getSlottedElementsHeight() {
        
        const slotNode = this.shadowRoot.querySelector('slot');
        const slottedElements = slotNode.assignedNodes();

        let totalHeight = 0;

        for(let index = 0; index <slottedElements.length; index++) {

            const slotElement = slottedElements[index];
            
            if(slotElement.nodeType === Node.ELEMENT_NODE) {
                
                const slotElementHeight = slotElement.offsetHeight;
                
                const marginTopValue = window.getComputedStyle(slotElement).marginTop;
                const marginBottomValue = window.getComputedStyle(slotElement).marginBottom;
                
                const marginTop = new Number(marginTopValue.slice(0, marginTopValue.length-2));
                const marginBottom = new Number(marginBottomValue.slice(0, marginBottomValue.length-2));
                
                totalHeight += (slotElementHeight+marginTop+marginBottom);
            }
        }

        return totalHeight;
    }
};

window.customElements.define('bs-collapsable', BsCollapsable);