
import { LitElement, html } from 'lit-element';
import { BsNavbarCollapseCss } from './bs-navbar-collapse.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class BsNavbarCollapse extends LitElement {

    static get properties() {
        return {
            expanded: {type: Boolean, reflect: true},
            transitioning: {type: Boolean, reflect: true}
        };
    }

    static get styles() {
        return [
            BsContentRebootCss,
            BsNavbarCollapseCss
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
        this.transitioning = false;
    }

    firstUpdated() {
        this.addEventListener('transitionend', event => this._afterCollapsingTransition(event));
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
            this._collapse();
        } else {
            this._expand();
        }
    }

    _expand() {
        this.expanded = true;
        this.shadowRoot.host.style.height = this._getSlottedElementsHeight()+'px';
    }

    _collapse() {
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

if(!window.customElements.get('bs-navbar-collapse'))
    window.customElements.define('bs-navbar-collapse', BsNavbarCollapse);
