
import { LitElement, html } from 'lit-element';
import { BsFormSelectCss } from './bs-form-select.css.js';
import { BsFormControlCss } from './bs-form-control.css.js';
import { BsFormControlSizeCss } from './bs-form-control-size.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content';

export class BsFormSelect extends LitElement {

    static get properties() {
        return {
            arrayData: Array,
            jsonData: JSON,
            jsonId: {type: String, attribute: 'json-id'},
            jsonText: {type: String, attribute: 'json-text'},
            selected: Object,
            caption: String,
            multiple: {type: Boolean, reflect: true},
            disabled: {type: Boolean, reflect: true},
            valid: {type: Boolean, reflect: true},
            invalid: {type: Boolean, reflect: true},
            _currentSelected: Object
        };
    }

    static get styles() {
        return [
            BsContentRebootCss,
            BsFormControlCss,
            BsFormControlSizeCss,
            BsFormSelectCss
        ];
    }

    render() {
        return html`
            <select 
                class="form-control"
                ?multiple=${this.multiple}
                ?disabled=${this.disabled}>
            </select>
        `;
    }

    constructor() {
        super();
        this.arrayData = [];
        this.jsonId = '';
        this.jsonText = '';
        this.caption = '';
        this.multiple = false;
        this.disabled = false;
        this.valid = false;
        this.invalid = false;
    }

    firstUpdated() {
        const selectElement = this.shadowRoot.querySelector('select');
        this._generateOptions(selectElement);
        selectElement.addEventListener('change', event => this._handleSelection(event));
    }

    setFocus() {
        const selectElement = this.shadowRoot.querySelector('select');
        selectElement.focus();
    }

    validate() {
        const selectElement = this.shadowRoot.querySelector('select');
        return selectElement.checkValidity();
    }

    getValidity() {
        const selectElement = this.shadowRoot.querySelector('select');
        return selectElement.validity;
    }

    getValue() {
        return this._currentSelected;
    }

    _handleSelection(event) {
        this._currentSelected = event.target.value;
    }

    _generateOptions(selectElement) {

        if(this.caption) {
            const captionOptionItem = this._createCaptionOptionItem();
            selectElement.add(captionOptionItem);
        }

        if (this.arrayData && this.arrayData.length) {
            this._createOptionItemsFromArray(selectElement);
            return;
        }

        if(this.jsonData && this.jsonData.length && this.jsonId && this.jsonText) {
            this._createOptionItemsFromJsonData(selectElement);
            return;
        }
    }

    _createCaptionOptionItem() {

        let captionSelected = false;

        if(!this.selected) {
            captionSelected = true;
        }

        const captionOptionItem = new Option(this.caption, '', captionSelected, captionSelected);
        captionOptionItem.setAttribute('disabled', '');

        return captionOptionItem;
    }

    _createOptionItemsFromArray(selectElement) {

        for(let index = 0; index < this.arrayData.length; index++) {

            const item = this.arrayData[index];
            const selectedItem = (item.toString() === this.selected);
            const optionItem = new Option(item, item, selectedItem, selectedItem);

            selectElement.add(optionItem);
        }
    }

    _createOptionItemsFromJsonData(selectElement) {

        for(let index = 0; index < this.jsonData.length; index++) {

            const item = this.jsonData[index];
            const id = item[this.jsonId];
            const value = item[this.jsonText];
            const selectedItem = (value.toString() === this.selected);
            const optionItem = new Option(value, id, selectedItem, selectedItem);

            selectElement.add(optionItem);
        }
    }
};

if(!window.customElements.get('bs-form-select'))
    window.customElements.define('bs-form-select', BsFormSelect);
