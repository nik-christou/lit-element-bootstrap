
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '../../content';

export class BsCarouselIndicators extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            css`
                :host {
                    position: absolute;
                    right: 0;
                    bottom: 10px;
                    left: 0;
                    z-index: 15;
                    display: flex;
                    justify-content: center;
                    padding-left: 0;
                    margin-right: 15%;
                    margin-left: 15%;
                    margin-bottom: 1rem;
                }
            `
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

window.customElements.define('bs-carousel-indicators', BsCarouselIndicators);