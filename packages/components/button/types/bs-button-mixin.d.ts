export function BsButtonMixin(superclass: any): {
    new (): {
        [x: string]: any;
        /**
         * @param {Map} _updatedProperties
         */
        firstUpdated(_updatedProperties: Map<any, any>): void;
        _handleFocusOut(): void;
        active: any;
        _handleButtonClick(): void;
        _fireFocusOutEvent(): void;
        _fireButtonClickEvent(): void;
    };
    [x: string]: any;
};
