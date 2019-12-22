export function BsButtonMixin(superclass: any): {
    new (...args: any[]): {
        [x: string]: any;
        active: any;
        toggle: boolean;
        disabled: boolean;
        dropdownToggle: boolean;
        /**
         * @param {Map} _updatedProperties
         */
        firstUpdated(_updatedProperties: Map<any, any>): void;
        /**
         * @param {Map} _changedProperties
         */
        updated(_changedProperties: Map<any, any>): void;
        activate(): Promise<void>;
        deactivate(): Promise<void>;
        disable(): Promise<void>;
        enable(): Promise<void>;
        _addAriaRole(): void;
        _toggleAriaDisabledState(): void;
        _toggleAriaPressedState(): void;
        _handleFocusOut(): Promise<void>;
        /**
         * @param {MouseEvent} event
         */
        _handleButtonClick(event: MouseEvent): Promise<void>;
        _fireFocusOutEvent(): void;
        _fireButtonClickEvent(): void;
    };
    [x: string]: any;
    readonly properties: {
        toggle: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        active: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        dropdownToggle: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
    };
    readonly styles: import("lit-element").CSSResult[];
};
