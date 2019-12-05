
import { LitElement, html, css } from 'lit-element';
import { BsCarouselCss } from './css/bs-carousel.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

const Direction = {
    NEXT: 'next',
    PREV: 'prev',
    LEFT: 'left',
    RIGHT: 'right'
};

export class BsCarousel extends LitElement {

    static get properties() {
        return {
            interval: { type: Number, reflect: true },
            keyboard: { type: Boolean, reflect: true },
            pause: { type: Boolean, reflect: true },
            ride: { type: String, reflect: true },
            wrap: { type: Boolean, reflect: true },
            slide: { type: Boolean, reflect: true },
            fade: { type: Boolean, reflect: true },
            _isSliding: Boolean,
            _isPaused: Boolean,
            _intervalId: Number,
            _touchTimeoutId: Number
        };
    }

    static get styles() {
        return [
            BsContentRebootCss,
            BsCarouselCss
        ];
    }

    render() {
        return html`
            <slot name="indicators"></slot>
            <div class="carousel-inner">
                <slot id="items"></slot>
                <slot name="control-prev"></slot>
                <slot name="control-next"></slot>
            </div>
        `;
    }

    constructor() {
        super();
        this.interval = 5000;
        this.keyboard = true;
        this.pause = 'hover';
        this.ride = 'carousel';
        this.wrap = true;
        this.slide = 'next';
        this.fade = false;
        this._isSliding = false;
        this._isPaused = false;
    }

    firstUpdated() {

        this.addEventListener('bs-carousel-control-prev-click', () => this._prev());
        this.addEventListener('bs-carousel-control-next-click', () => this._next());
        this.addEventListener('bs-carousel-indicator-click', event => this._handleIndicatorClick(event));

        if(this.fade) {
            this._setCarouselItemsToFade();
        }

        if(this.keyboard) {
            this.setAttribute('tabIndex', '1');
            this.addEventListener('keydown', event => this._handleArrowKeys(event));
        }

        if(this.pause === 'hover') {
            this.addEventListener('mouseenter', event => this._handlePauseOnMouseEnter(event));
            this.addEventListener('mouseleave', event => this._handleResumeOnMouseLeave(event));

            if ('ontouchstart' in document.documentElement) {
                this.addEventListener('touchend', event => this._handlePauseOnTouch(event));
            }
        }

        if(this.interval) {
            this._cycle();
        }
    }

    _handlePauseOnMouseEnter(event) {
        this._pause(event);
    }

    _handleResumeOnMouseLeave(event) {
        this._cycle(event);
    }

    _handlePauseOnTouch(event) {
        this._pause(event);

        if(this._touchTimeoutId) {
            clearTimeout(this._touchTimeoutId);
        }

        const TOUCHEVENT_COMPAT_WAIT = 500;

        const resumeFunction = this._resumeFunction.bind(this);
        const resumeTimeout = this.interval + TOUCHEVENT_COMPAT_WAIT;
        this._touchTimeoutId = setTimeout(resumeFunction, resumeTimeout);
    }

    _resumeFunction(event) {
        return this._cycle(event);
    }

    _handleArrowKeys(event) {

        const targetTagName = event.target.tagName;

        if(targetTagName === 'INPUT' || targetTagName === 'TEXTAREA') {
            return;
        }

        const ARROW_LEFT_KEYCODE = 37;
        const ARROW_RIGHT_KEYCODE = 39;

        switch (event.which) {

            case ARROW_LEFT_KEYCODE:
                event.preventDefault();
                this._prev();
                break;

            case ARROW_RIGHT_KEYCODE:
                event.preventDefault();
                this._next();
                break;

            default: break;
        }
    }

    _handleIndicatorClick(event) {

        const slideIndex = event.detail.index;

        if(slideIndex >= 0) {
            this._to(slideIndex);
        }
    }

    _prev() {
        if (!this._isSliding) {
            this._slide(Direction.PREV);
        }
    }

    _next() {
        if (!this._isSliding) {
            this._slide(Direction.NEXT);
        }
    }

    _nextWhenVisible() {

        const documentIsHidden = document.hidden;
        const hostVisible = window.getComputedStyle(this.shadowRoot.host, ':visible');
        const hostVisibility = window.getComputedStyle(this.shadowRoot.host).getPropertyValue('visibility');

        // Don't call next if:
        // - the page isn't visible
        // - the carousel isn't visible
        // - the parent node isn't visible
        if (!documentIsHidden && hostVisible && hostVisibility !== 'hidden') {
            this._next();
        }
    }

    _pause(event) {

        if (!event) {
            this._isPaused = true;
        }

        const carouselItemHaveNextOrPrev = this._carouselItemsHaveNextOrPrev();

        if (carouselItemHaveNextOrPrev) {
            this._isSliding = false;
            this._cycle(true);
        }

        clearInterval(this._intervalId);
        this._intervalId = null;
    }

    _cycle(event) {

        if (!event) {
            this._isPaused = false;
        }

        if (this._intervalId) {
            clearInterval(this._intervalId);
            this._intervalId = null;
        }

        if (this.interval && !this._isPaused) {
            const nextFunction = this._cycleFunction.bind(this);
            this._intervalId = setInterval(nextFunction, this.interval);
        }
    }

    _cycleFunction() {
        if(document.visibilityState) {
            return this._nextWhenVisible();
        } else {
            return this._next();
        }
    }

    _to(index) {

        const carouselItems = this._retrieveCarouselItems();

        const activeElement = this._extractActiveCarouseItem(carouselItems);
        const activeElementIndex = this._getCarouselItemIndex(carouselItems, activeElement);

        if (activeElementIndex > carouselItems.length - 1 || activeElementIndex < 0) {
            return;
        }

        if (this._isSliding) {
            activeElement.addEventListener('bs-carousel-slide', () => this._to(index), {once : true});
            return;
        }

        if (activeElementIndex === index) {
            this.pause();
            this.cycle();

            return;
        }

        const direction = index > activeElementIndex ? Direction.NEXT : Direction.PREV;
        const targetElement = carouselItems[index];

        this._slide(direction, targetElement);
    }

    _slide(direction, targetElement) {

        const carouselItems = this._retrieveCarouselItems();

        const activeElement = this._extractActiveCarouseItem(carouselItems);
        const activeElementIndex = this._getCarouselItemIndex(carouselItems, activeElement);

        let nextElement;
        let nextElementIndex;

        if(targetElement) {
            nextElement = targetElement;
            nextElementIndex = this._getCarouselItemIndex(carouselItems, targetElement);
        } else {
            nextElement = this._getNextItemByDirection(direction, activeElement, carouselItems);
            nextElementIndex = this._getCarouselItemIndex(carouselItems, nextElement);
        }

        const isCycling = Boolean(this._intervalId);

        let directionalClassName;
        let orderClassName;
        let eventDirectionName;

        if (direction === Direction.NEXT) {
            directionalClassName = 'left';
            orderClassName = 'next';
            eventDirectionName = Direction.LEFT;
        } else {
            directionalClassName = 'right';
            orderClassName = 'prev';
            eventDirectionName = Direction.RIGHT;
        }

        if (nextElement && nextElement.hasAttribute('active')) {
            this._isSliding = false;
            return;
        }

        const slideEventResult = this._triggerSlideEvent(
            activeElementIndex,
            nextElement,
            nextElementIndex,
            eventDirectionName);

        if (!slideEventResult) {
            return;
        }

        if (!activeElement || !nextElement) {
            return;
        }

        this._isSliding = true;

        if (isCycling) {
            this._pause();
        }

        this._setActiveIndicatorElement(nextElementIndex);

        const slideTransitionCompleteEvent = new CustomEvent('bs-carousel-slide-before-transition', {
            bubbles: true,
            composed: true,
            detail: {
                relatedTarget: nextElement,
                direction: eventDirectionName,
                from: activeElementIndex,
                to: nextElementIndex
            }
        });

        if (this.slide) {

            nextElement.setAttribute(orderClassName, '');
            nextElement.offsetHeight;

            activeElement.setAttribute(directionalClassName, '');
            nextElement.setAttribute(directionalClassName, '');

            activeElement.addEventListener('transitionend',
                () => {

                    nextElement.removeAttribute(directionalClassName);
                    nextElement.removeAttribute(orderClassName);
                    nextElement.setAttribute('active', '');

                    activeElement.removeAttribute('active');
                    activeElement.removeAttribute(orderClassName);
                    activeElement.removeAttribute(directionalClassName);

                    this._isSliding = false;
                    this.dispatchEvent(slideTransitionCompleteEvent);

                }, {once : true});

        } else {

            activeElement.removeAttribute('active');
            nextElement.setAttribute('active', '');

            this._isSliding = false;
            this.dispatchEvent(slideTransitionCompleteEvent);
        }

        if (isCycling) {
            this._cycle();
        }
    }

    _getTransitionDurationFromElement(element) {

        if (!element) {
            return 0;
        }

        let transitionDuration = window.getComputedStyle(element)
            .getPropertyValue('transition-duration');

        const floatTransitionDuration = parseFloat(transitionDuration);

        if (!floatTransitionDuration) {
            return 0;
        }

        transitionDuration = transitionDuration.split(',')[0];

        return parseFloat(transitionDuration) * 1000;
    }

    _triggerSlideEvent(activeElementIndex, nextElement, nextElementIndex, eventDirectionName) {

        const slideEvent = new CustomEvent('bs-carousel-slide', {
            bubbles: true,
            composed: true,
            detail: {
                relatedTarget: nextElement,
                direction: eventDirectionName,
                from: activeElementIndex,
                to: nextElementIndex
            }
        });

        return this.dispatchEvent(slideEvent);
    }

    _setActiveIndicatorElement(nextElementIndex) {

        const indicatorsSlot = this.shadowRoot.querySelector('slot[name="indicators"]');

        if (indicatorsSlot) {

            const indicatorsSlotNodes = indicatorsSlot.assignedNodes();
            const carouselIndicatorsElement = this._extractOnlyCarouselIndicators(indicatorsSlotNodes);

            if (carouselIndicatorsElement) {
                carouselIndicatorsElement.updateActiveIndicatorElement(nextElementIndex);
            }
        }
    }

    _getNextItemByDirection(direction, activeItem, carouselItems) {

        const isNextDirection = direction === Direction.NEXT;
        const isPrevDirection = direction === Direction.PREV;

        const activeItemIndex = this._getCarouselItemIndex(carouselItems, activeItem);
        const lastItemIndex = carouselItems.length - 1;

        const isGoingToWrap = (isPrevDirection && activeItemIndex === 0) ||
                (isNextDirection && activeItemIndex === lastItemIndex);

        if (isGoingToWrap && !this.wrap) {
            return activeItem;
        }

        const delta = direction === Direction.PREV ? -1 : 1;
        const itemIndex = (activeItemIndex + delta) % carouselItems.length;

        if (itemIndex === -1) {
            return carouselItems[carouselItems.length - 1];
        }

        return carouselItems[itemIndex];
    }

    _retrieveCarouselItems() {

        const slotNode = this.shadowRoot.querySelector('slot#items');
        const slotNodes = slotNode.assignedNodes();
        const carouselItems = this._extractOnlyCarouselItems(slotNodes);

        return carouselItems;
    }

    _setCarouselItemsToFade() {

        const carouselItems = this._retrieveCarouselItems();

        for(let index = 0; index < carouselItems.length; index++) {
            const carouselItem = carouselItems[index];
            if (this._isCarouselItemElement(carouselItem)) {
                carouselItem.setAttribute('fade', '');
            }
        }
    }

    _carouselItemsHaveNextOrPrev() {

        const carouselItems = this._retrieveCarouselItems();

        for (let index = 0; index < carouselItems.length; index++) {
            const carouselItem = carouselItems[index];
            if (this._isCarouselItemElement(carouselItem)) {
                if (carouselItem.hasAttribute(Direction.NEXT) ||
                        carouselItem.hasAttribute(Direction.PREV)) {

                    return true;
                }
            }
        }

        return false;
    }

    _getCarouselItemIndex(carouselItems, carouselItem) {
        return carouselItems.indexOf(carouselItem);
    }

    _extractActiveCarouseItem(carouselItems) {

        for (let index = 0; index < carouselItems.length; index++) {
            const carouselItem = carouselItems[index];
            if (this._isCarouselItemActive(carouselItem)) {
                return carouselItem;
            }
        }
    }

    _extractOnlyCarouselIndicators(slotNodes) {

        for (let index = 0; index < slotNodes.length; index++) {

            const slotItem = slotNodes[index];

            if (this._isCarouselIndicatorsElement(slotItem)) {
                return slotItem;
            }
        }
    }

    _extractOnlyCarouselItems(slotNodes) {

        const elementNodes = [];

        for (let index = 0; index < slotNodes.length; index++) {
            const slotItem = slotNodes[index];
            if (this._isCarouselItemElement(slotItem)) {
                elementNodes.push(slotItem);
            }
        }

        return elementNodes;
    }

    _isCarouselItemActive(carouselItem) {
        return carouselItem.hasAttribute('active');
    }

    _isCarouselItemElement(element) {
        return element.nodeType === Node.ELEMENT_NODE
                && (element.localName === 'bs-carousel-item');
    }

    _isCarouselIndicatorsElement(element) {
        return element.nodeType === Node.ELEMENT_NODE
                && (element.localName === 'bs-carousel-indicators');
    }
};

if (!window.customElements.get("bs-carousel"))
    window.customElements.define('bs-carousel', BsCarousel);
