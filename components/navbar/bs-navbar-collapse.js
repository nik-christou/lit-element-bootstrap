
import { LitElement, html, css } from 'lit-element';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query';
import { BsContentRebootCss } from '../../content';

export class BsNavbarCollapse extends LitElement {
    
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
                    display: var(--navbar-collapse-display);
                    -ms-flex-preferred-size: var(--navbar-collapse-ms-flex-preferred-size, 100%);
                    flex-basis: var(--navbar-collapse-flex-basis, 100%);
                    -ms-flex-positive: 1;
                    flex-grow: 1;
                    -ms-flex-align: center;
                    align-items: center;
                    height: auto;
                    transition: height 0.35s ease;
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
        this.expanded = true;
        this.collapsed = false;
        this.transitioning = false;
    }
    
    firstUpdated() {
        installMediaQueryWatcher('(min-width: 992px)', (matches) => this._minLargeDeviceLayoutChanged(matches));
        this.addEventListener('transitionend', event => this._afterCollapsingTransition(event));
    }
    
    _afterCollapsingTransition() {

        if(this.expanded) {
            this.shadowRoot.host.style.overflow = 'inherit';
            this.shadowRoot.host.style.height = 'auto';
        }

        this.transitioning = false;
    }
    
    _minLargeDeviceLayoutChanged(matches) {
        
        if(matches) {
            this.expanded = true;
            this.collapsed = false;
            this.transitioning = false;
            this.shadowRoot.host.style.overflow = 'inherit';
            this.shadowRoot.host.style.height = 'auto';
        }
    }
    
    toggle() {
        this.transitioning = true;

        if(this.expanded) {
            this._collapse();
        } else {
            this._expand();
        }
    }
    
    _expand() {
        this.expanded = true;
        this.collapsed = false;
        this.shadowRoot.host.style.height = this._getSlottedElementsHeight()+'px';
    }
    
    _collapse() {
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
            
            this.shadowRoot.host.style.transition = 'height 0.35s ease';
        }
    }
    
    _getSlottedElementsHeight() {
        
        const slotNode = this.shadowRoot.querySelector('slot');
        const slottedElements = slotNode.assignedNodes();

        let totalHeight = 0;

        for(let index = 0; index < slottedElements.length; index++) {

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

if(!window.customElements.get('bs-navbar-collapse')) window.customElements.define('bs-navbar-collapse', BsNavbarCollapse);