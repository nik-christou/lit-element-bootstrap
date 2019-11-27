
import { LitElement, html } from 'lit-element';
import { BsCarouselIndicatorsCss } from './bs-carousel-indicators.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class BsCarouselIndicators extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsCarouselIndicatorsCss
        ];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }

    updateActiveIndicatorElement(nextElementIndex) {

        const slotNode = this.shadowRoot.querySelector('slot');
        const slotNodes = slotNode.assignedNodes();
        const indicatorItems = this._extractOnlyIndicatorItems(slotNodes);
        const activeIndicator = this._extractActiveIndicatorItem(indicatorItems);

        if(activeIndicator) {
            activeIndicator.removeAttribute('active');
        }

        const nextIndicator = indicatorItems[nextElementIndex];

        if (nextIndicator) {
            nextIndicator.setAttribute('active', '');
        }
    }

    _extractActiveIndicatorItem(indicatorItems) {

        for(let index=0; index < indicatorItems.length; index++) {

            const indicatorItem = indicatorItems[index];

            if(this._isIndicatorItemActive(indicatorItem)) {
                return indicatorItem;
            }
        }
    }

    _isIndicatorItemActive(indicatorItem) {
        return indicatorItem.hasAttribute('active');
    }

    _extractOnlyIndicatorItems(slotNodes) {

        const elementNodes = [];

        for (let index = 0; index < slotNodes.length; index++) {

            const slotItem = slotNodes[index];

            if (this._isCarouselIndicatorElement(slotItem)) {
                elementNodes.push(slotItem);
            }
        }

        return elementNodes;
    }

    _isCarouselIndicatorElement(element) {
        return element.nodeType === Node.ELEMENT_NODE
                && (element.localName === 'bs-carousel-indicator');
    }
};

if (!window.customElements.get("bs-carousel-indicators"))
    window.customElements.define('bs-carousel-indicators', BsCarouselIndicators);
