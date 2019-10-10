
import sinon from 'sinon/pkg/sinon-esm.js';
import { html, fixture, expect } from '@open-wc/testing';

import '../src/bs-form-input.js';

describe('bs-form-input', () => {
    it('type attribute is set by default to text', async () => {

        // given
        const typeDefaultValue = 'text';

        // when
        const bsFormInput = (await fixture('<bs-form-input></bs-form-input>'));

        // then
        expect(bsFormInput.type).to.equal(typeDefaultValue);
    });
});

describe('bs-form-input', () => {
    it('type attribute is set element is updated', async () => {

        // given
        const typeAttributeValue = 'number';

        // when
        const bsFormInput = (await fixture(html`
            <bs-form-input type="${typeAttributeValue}"></bs-form-input>`
        ));

        // then
        expect(bsFormInput.type).to.equal(typeAttributeValue);
    });
});

describe('bs-form-input', () => {
    it('type property is set element is updated', async () => {

        // given
        const typePropertyValue = 'number';

        // when
        const bsFormInput = (await fixture(html`
            <bs-form-input .type="${typePropertyValue}"></bs-form-input>`
        ));

        // then
        expect(bsFormInput.type).to.equal(typePropertyValue);
    });
});

describe('bs-form-input', () => {
    it('readonly attribute is set by default to false', async () => {

        // given
        const readonlyDefaultValue = false;

        // when
        const bsFormInput = (await fixture('<bs-form-input></bs-form-input>'));

        // then
        expect(bsFormInput.readonly).to.equal(readonlyDefaultValue);
    });
});

describe('bs-form-input', () => {
    it('name attribute is set by default to undefined', async () => {

        // given
        const nameDefaultValue = undefined;

        // when
        const bsFormInput = (await fixture('<bs-form-input></bs-form-input>'));

        // then
        expect(bsFormInput.name).to.equal(nameDefaultValue);
    });
});

describe('bs-form-input', () => {
    it('name attribute is set element is updated', async () => {

        // given
        const name = "new_name";

        // when
        const bsFormInput = (await fixture(html`
            <bs-form-input name="${name}"></bs-form-input>`
        ));

        // then
        expect(bsFormInput.name).to.equal(name);
    });
});

describe('bs-form-input', () => {
    it('name attribute is set getInputName is correct', async () => {

        // given
        const name = "new_name_via_function";

        // when
        const bsFormInput = (await fixture(html`
            <bs-form-input name="${name}"></bs-form-input>`
        ));

        // then
        expect(bsFormInput.getInputName()).to.equal(name);
    });
});

describe('bs-form-input', () => {
    it('value attribute is set by default to undefined', async () => {

        // given
        const valueDefaultValue = undefined;

        // when
        const bsFormInput = (await fixture('<bs-form-input></bs-form-input>'));

        // then
        expect(bsFormInput.value).to.equal(valueDefaultValue);
    });
});

describe('bs-form-input', () => {
    it('value attribute is set element is updated', async () => {

        // given
        const valueAttribute = 'new_attribute_value';

        // when
        const bsFormInput = (await fixture(html`
            <bs-form-input value="${valueAttribute}"></bs-form-input>`
        ));

        // then
        expect(bsFormInput.value).to.equal(valueAttribute);
    });
});

describe('bs-form-input', () => {
    it('value property is set element is updated', async () => {

        // given
        const valueProperty = 'new_property_value';

        // when
        const bsFormInput = (await fixture(html`
            <bs-form-input .value="${valueProperty}"></bs-form-input>`
        ));

        // then
        expect(bsFormInput.value).to.equal(valueProperty);
    });
});

describe('bs-form-input', () => {
    it('value attribute is set getInputValue returns same value', async () => {

        // given
        const valueAttribute = 'new_attribute_value';

        // when
        const bsFormInput = (await fixture(html`
            <bs-form-input value="${valueAttribute}"></bs-form-input>`
        ));

        // then
        expect(bsFormInput.getInputValue()).to.equal(valueAttribute);
    });
});

describe('bs-form-input', () => {
    it('required attribute is set by default to false', async () => {

        // given
        const requiredDefaultValue = false;

        // when
        const bsFormInput = (await fixture('<bs-form-input></bs-form-input>'));

        // then
        expect(bsFormInput.required).to.equal(requiredDefaultValue);
    });
});

describe('bs-form-input', () => {
    it('required attribute is set element is updated', async () => {

        // given
        const requiredValue = true;

        // when
        const bsFormInput = (await fixture(html`
            <bs-form-input required></bs-form-input>`
        ));

        // then
        expect(bsFormInput.required).to.equal(requiredValue);
    });
});

describe('bs-form-input', () => {
    it('placeholder attribute is set by default to undefined', async () => {

        // given
        const placeholderDefaultValue = undefined;

        // when
        const bsFormInput = (await fixture('<bs-form-input></bs-form-input>'));

        // then
        expect(bsFormInput.placeholder).to.equal(placeholderDefaultValue);
    });
});

describe('bs-form-input', () => {
    it('placeholder attribute is set element is updated', async () => {

        // given
        const placeholderValue = 'this is a placeholder';

        // when
        const bsFormInput = (await fixture(html`
            <bs-form-input placeholder="${placeholderValue}"></bs-form-input>`
        ));

        // then
        expect(bsFormInput.placeholder).to.equal(placeholderValue);
    });
});

describe('bs-form-input', () => {
    it('disabled attribute is set by default to false', async () => {

        // given
        const disabledDefaultValue = false;

        // when
        const bsFormInput = (await fixture('<bs-form-input></bs-form-input>'));

        // then
        expect(bsFormInput.disabled).to.equal(disabledDefaultValue);
    });
});

describe('bs-form-input', () => {
    it('disabled attribute is set element is updated', async () => {

        // given
        const disabledValue = true;

        // when
        const bsFormInput = (await fixture(html`
            <bs-form-input disabled></bs-form-input>`
        ));

        // then
        expect(bsFormInput.disabled).to.equal(disabledValue);
    });
});

describe('bs-form-input', () => {
    it('disabled attribute is set element isDisabled is correct', async () => {

        // given
        const disabledValue = true;

        // when
        const bsFormInput = (await fixture(html`
            <bs-form-input disabled></bs-form-input>`
        ));

        // then
        expect(bsFormInput.isDisabled()).to.equal(disabledValue);
    });
});

describe('bs-form-input', () => {
    it('focus is set element is focused', async () => {

        // given
        let focusEventFired = false;
        const bsFormInput = (await fixture(`<bs-form-input></bs-form-input>`));

        const focusEventListener = (event) => {
            focusEventFired = true;
        };

        bsFormInput.addEventListener('focus', focusEventListener);

        // when
        bsFormInput.setFocus();

        // then
        expect(focusEventFired).to.equal(true);
    });
});

describe('bs-form-input', () => {
    it('initial element shadowDom ', async () => {

        // given
        const intialShadowDom = `<input class="form-control" type="text"/>`;

        // when
        const bsFormInput = (await fixture('<bs-form-input></bs-form-input>'));

        // then
        expect(bsFormInput).shadowDom.to.equal(intialShadowDom);
    });
});

describe('bs-form-input', () => {
    it('valid attribute is set by default to false', async () => {

        // given
        const validDefaultValue = false;

        // when
        const bsFormInput = (await fixture('<bs-form-input></bs-form-input>'));

        // then
        expect(bsFormInput.valid).to.equal(validDefaultValue);
    });
});

describe('bs-form-input', () => {
    it('valid attribute is set element is updated', async () => {

        // given
        const validValue = true;

        // when
        const bsFormInput = (await fixture(html`
            <bs-form-input valid></bs-form-input>`
        ));

        // then
        expect(bsFormInput.valid).to.equal(validValue);
    });
});

describe('bs-form-input', () => {
    it('invalid attribute is set by default to false', async () => {

        // given
        const invalidDefaultValue = false;

        // when
        const bsFormInput = (await fixture('<bs-form-input></bs-form-input>'));

        // then
        expect(bsFormInput.invalid).to.equal(invalidDefaultValue);
    });
});

describe('bs-form-input', () => {
    it('invalid attribute is set element is updated', async () => {

        // given
        const invalidValue = true;

        // when
        const bsFormInput = (await fixture(html`
            <bs-form-input invalid></bs-form-input>`
        ));

        // then
        expect(bsFormInput.invalid).to.equal(invalidValue);
    });
});

describe('bs-form-input', () => {
    it('skipValidation attribute is set by default to false', async () => {

        // given
        const skipValidationDefaultValue = false;

        // when
        const bsFormInput = (await fixture(`<bs-form-input></bs-form-input>`));

        // then
        expect(bsFormInput.skipValidation).to.equal(skipValidationDefaultValue);
    });
});

describe('bs-form-input', () => {
    it('skipValidation attribute is set by default to false', async () => {

        // given
        const skipValidationDefaultValue = false;

        // when
        const bsFormInput = (await fixture(`<bs-form-input></bs-form-input>`));

        // then
        expect(bsFormInput.skipValidation).to.equal(skipValidationDefaultValue);
        expect(bsFormInput.isValidatable()).to.equal(true);
    });
});

describe('bs-form-input', () => {
    it('skipValidation attribute is set element is updated', async () => {

        // given
        const skipValidationValue = true;

        // when
        const bsFormInput = (await fixture(html`
            <bs-form-input skip-validation></bs-form-input>`
        ));

        // then
        expect(bsFormInput.skipValidation).to.equal(skipValidationValue);
        expect(bsFormInput.isValidatable()).to.equal(false);
    });
});

describe('bs-form-input', () => {
    it('browserValidation attribute is set by default to false', async () => {

        // given
        const browserValidationDefaultValue = false;

        // when
        const bsFormInput = (await fixture(`<bs-form-input></bs-form-input>`));

        // then
        expect(bsFormInput.browserValidation).to.equal(browserValidationDefaultValue);
    });
});

describe('bs-form-input', () => {
    it('browserValidation attribute is set element is updated', async () => {

        // given
        const browserValidationValue = true;

        // when
        const bsFormInput = (await fixture(html`
            <bs-form-input browser-validation></bs-form-input>
        `));

        // then
        expect(bsFormInput.browserValidation).to.equal(browserValidationValue);
    });
});

describe('bs-form-input', () => {
    it('browserMissingValueMsg attribute is set by default to empty', async () => {

        // given
        const browserMissingValueMsgDefaultValue = '';

        // when
        const bsFormInput = (await fixture(`<bs-form-input></bs-form-input>`));

        // then
        expect(bsFormInput.browserMissingValueMsg).to.equal(browserMissingValueMsgDefaultValue);
    });
});

describe('bs-form-input', () => {
    it('browserMissingValueMsg attribute is set element is updated', async () => {

        // given
        const browserMissingValueMsgValue = 'input value is missing';

        // when
        const bsFormInput = (await fixture(html`
            <bs-form-input browser-missing-value-msg="${browserMissingValueMsgValue}"></bs-form-input>
        `));

        // then
        expect(bsFormInput.browserMissingValueMsg).to.equal(browserMissingValueMsgValue);
    });
});

describe('bs-form-input', () => {
    it('browserMismatchValueMsg attribute is set by default to empty', async () => {

        // given
        const browserMismatchValueMsgDefaultValue = '';

        // when
        const bsFormInput = (await fixture(`<bs-form-input></bs-form-input>`));

        // then
        expect(bsFormInput.browserMismatchValueMsg).to.equal(browserMismatchValueMsgDefaultValue);
    });
});

describe('bs-form-input', () => {
    it('browserMismatchValueMsg attribute is set element is updated', async () => {

        // given
        const browserMismatchValueMsgValue = 'input value is mist-matching';

        // when
        const bsFormInput = (await fixture(html`
            <bs-form-input browser-mismatch-value-msg="${browserMismatchValueMsgValue}"></bs-form-input>
        `));

        // then
        expect(bsFormInput.browserMismatchValueMsg).to.equal(browserMismatchValueMsgValue);
    });
});

describe('bs-form-input', () => {
    it('browserPatternValueMsg attribute is set by default to empty', async () => {

        // given
        const browserPatternValueMsgDefaultValue = '';

        // when
        const bsFormInput = (await fixture(`<bs-form-input></bs-form-input>`));

        // then
        expect(bsFormInput.browserPatternValueMsg).to.equal(browserPatternValueMsgDefaultValue);
    });
});

describe('bs-form-input', () => {
    it('browserPatternValueMsg attribute is set element is updated', async () => {

        // given
        const browserPatternValueMsgValue = 'input value is noy matching the pattern';

        // when
        const bsFormInput = (await fixture(html`
            <bs-form-input browser-pattern-value-msg="${browserPatternValueMsgValue}"></bs-form-input>
        `));

        // then
        expect(bsFormInput.browserPatternValueMsg).to.equal(browserPatternValueMsgValue);
    });
});

describe('bs-form-input', () => {
    it('browserTooLongValueMsg attribute is set by default to empty', async () => {

        // given
        const browserTooLongValueMsgDefaultValue = '';

        // when
        const bsFormInput = (await fixture(`<bs-form-input></bs-form-input>`));

        // then
        expect(bsFormInput.browserTooLongValueMsg).to.equal(browserTooLongValueMsgDefaultValue);
    });
});

describe('bs-form-input', () => {
    it('browserTooLongValueMsg attribute is set element is updated', async () => {

        // given
        const browserTooLongValueMsgValue = 'input value is too long';

        // when
        const bsFormInput = (await fixture(html`
            <bs-form-input browser-too-long-value-msg="${browserTooLongValueMsgValue}"></bs-form-input>
        `));

        // then
        expect(bsFormInput.browserTooLongValueMsg).to.equal(browserTooLongValueMsgValue);
    });
});

describe('bs-form-input', () => {
    it('browserTooShortValueMsg attribute is set by default to empty', async () => {

        // given
        const browserTooShortValueMsgDefaultValue = '';

        // when
        const bsFormInput = (await fixture(`<bs-form-input></bs-form-input>`));

        // then
        expect(bsFormInput.browserTooShortValueMsg).to.equal(browserTooShortValueMsgDefaultValue);
    });
});

describe('bs-form-input', () => {
    it('browserTooShortValueMsg attribute is set element is updated', async () => {

        // given
        const browserTooShortValueMsgValue = 'input value is too short';

        // when
        const bsFormInput = (await fixture(html`
            <bs-form-input browser-too-short-value-msg="${browserTooShortValueMsgValue}"></bs-form-input>
        `));

        // then
        expect(bsFormInput.browserTooShortValueMsg).to.equal(browserTooShortValueMsgValue);
    });
});

describe('bs-form-input', () => {
    it('browserRangeUnderflowMsg attribute is set by default to empty', async () => {

        // given
        const browserRangeUnderflowMsgDefaultValue = '';

        // when
        const bsFormInput = (await fixture(`<bs-form-input></bs-form-input>`));

        // then
        expect(bsFormInput.browserRangeUnderflowMsg).to.equal(browserRangeUnderflowMsgDefaultValue);
    });
});

describe('bs-form-input', () => {
    it('browserRangeUnderflowMsg attribute is set element is updated', async () => {

        // given
        const browserRangeUnderflowMsgValue = 'input value range is underflow';

        // when
        const bsFormInput = (await fixture(html`
            <bs-form-input browser-range-underflow-msg="${browserRangeUnderflowMsgValue}"></bs-form-input>
        `));

        // then
        expect(bsFormInput.browserRangeUnderflowMsg).to.equal(browserRangeUnderflowMsgValue);
    });
});

describe('bs-form-input', () => {
    it('browserRangeOverflowMsg attribute is set by default to empty', async () => {

        // given
        const browserRangeOverflowMsgDefaultValue = '';

        // when
        const bsFormInput = (await fixture(`<bs-form-input></bs-form-input>`));

        // then
        expect(bsFormInput.browserRangeOverflowMsg).to.equal(browserRangeOverflowMsgDefaultValue);
    });
});

describe('bs-form-input', () => {
    it('browserRangeOverflowMsg attribute is set element is updated', async () => {

        // given
        const browserRangeOverflowMsgValue = 'input value range is overflowing';

        // when
        const bsFormInput = (await fixture(html`
            <bs-form-input browser-range-overflow-msg="${browserRangeOverflowMsgValue}"></bs-form-input>
        `));

        // then
        expect(bsFormInput.browserRangeOverflowMsg).to.equal(browserRangeOverflowMsgValue);
    });
});

describe('bs-form-input', () => {
    it('browserStepMismatchMsg attribute is set by default to empty', async () => {

        // given
        const browserStepMismatchMsgDefaultValue = '';

        // when
        const bsFormInput = (await fixture(`<bs-form-input></bs-form-input>`));

        // then
        expect(bsFormInput.browserStepMismatchMsg).to.equal(browserStepMismatchMsgDefaultValue);
    });
});

describe('bs-form-input', () => {
    it('browserStepMismatchMsg attribute is set element is updated', async () => {

        // given
        const browserStepMismatchMsgValue = 'input value step is mis-matching';

        // when
        const bsFormInput = (await fixture(html`
            <bs-form-input browser-step-mismatch-msg="${browserStepMismatchMsgValue}"></bs-form-input>
        `));

        // then
        expect(bsFormInput.browserStepMismatchMsg).to.equal(browserStepMismatchMsgValue);
    });
});

describe('bs-form-input', () => {
    it('browserBadInputValueMsg attribute is set by default to empty', async () => {

        // given
        const browserBadInputValueMsgDefaultValue = '';

        // when
        const bsFormInput = (await fixture(`<bs-form-input></bs-form-input>`));

        // then
        expect(bsFormInput.browserBadInputValueMsg).to.equal(browserBadInputValueMsgDefaultValue);
    });
});

describe('bs-form-input', () => {
    it('browserBadInputValueMsg attribute is set element is updated', async () => {

        // given
        const browserBadInputValueMsgValue = 'input value step is mis-matching';

        // when
        const bsFormInput = (await fixture(html`
            <bs-form-input browser-bad-input-value-msg="${browserBadInputValueMsgValue}"></bs-form-input>
        `));

        // then
        expect(bsFormInput.browserBadInputValueMsg).to.equal(browserBadInputValueMsgValue);
    });
});

describe('bs-form-input', () => {
    it('keyUp on input was fired validate function is called', async () => {

        // given
        const keyupEvent = new KeyboardEvent('keyup', {'key':'d'});
        const bsFormInput = (await fixture(html`<bs-form-input valid></bs-form-input>`));
        const inputElement = bsFormInput.shadowRoot.querySelector('input');
        const validateFunctionSpy = sinon.spy(bsFormInput, 'validate');

        // when
        inputElement.dispatchEvent(keyupEvent);

        // then
        expect(validateFunctionSpy.callCount).to.equal(1);
    });
});

describe('bs-form-input', () => {
    it('browser validation for required input no custom message', async () => {

        // given
        const bsFormInput = (await fixture(html`
            <bs-form-input required browser-validation value=""></bs-form-input>
        `));

        const inputElement = bsFormInput.shadowRoot.querySelector('input');

        // when
        bsFormInput.validate();

        // then
        expect(inputElement.checkValidity()).to.equal(false);
    });
});

describe('bs-form-input', () => {
    it('browser validation for required input and custom message', async () => {

        // given
        const missingValueMsg = 'Missing value !!!';

        const bsFormInput = (await fixture(html`
            <bs-form-input
                required
                browser-validation
                value=""
                browser-missing-value-msg=${missingValueMsg}>
            </bs-form-input>
        `));

        const inputElement = bsFormInput.shadowRoot.querySelector('input');

        // when
        bsFormInput.validate();

        // then
        expect(inputElement.checkValidity()).to.equal(false);
        expect(inputElement.validationMessage).to.equal(missingValueMsg);
    });
});

describe('bs-form-input', () => {
    it('browser validation for type mismatch input no custom message', async () => {

        // given
        const bsFormInput = (await fixture(html`
            <bs-form-input
                required
                browser-validation
                type="email"
                value="#$#$#$#@$">
            </bs-form-input>
        `));

        const inputElement = bsFormInput.shadowRoot.querySelector('input');

        // when
        bsFormInput.validate();

        // then
        expect(inputElement.checkValidity()).to.equal(false);
    });
});

describe('bs-form-input', () => {
    it('browser validation for type mismatch input and custom message', async () => {

        // given
        const typeMismatchMsg = "Value cannot match type email";

        const bsFormInput = (await fixture(html`
            <bs-form-input
                required
                browser-validation
                type="email"
                value="#$#$#$#@$"
                browser-mismatch-value-msg=${typeMismatchMsg}>
            </bs-form-input>
        `));

        const inputElement = bsFormInput.shadowRoot.querySelector('input');

        // when
        bsFormInput.validate();

        // then
        expect(inputElement.checkValidity()).to.equal(false);
        expect(inputElement.validationMessage).to.equal(typeMismatchMsg);
    });
});

describe('bs-form-input', () => {
    it('browser validation for type pattern mismatch input no custom message', async () => {

        // given
        const lowerAndUpperCaseLettersPattern = "[A-Za-z]+";

        const bsFormInput = (await fixture(html`
            <bs-form-input
                required
                browser-validation
                type="text"
                value="123456"
                pattern=${lowerAndUpperCaseLettersPattern}">
            </bs-form-input>
        `));

        const inputElement = bsFormInput.shadowRoot.querySelector('input');

        // when
        bsFormInput.validate();

        // then
        expect(inputElement.checkValidity()).to.equal(false);
    });
});

describe('bs-form-input', () => {
    it('browser validation for type pattern mismatch input with custom message', async () => {

        // given
        const lowerAndUpperCaseLettersPattern = "[A-Za-z]+";
        const patternMismatchMsg = "Only lower and upper case letters are allowed";

        const bsFormInput = (await fixture(html`
            <bs-form-input
                required
                browser-validation
                type="text"
                value="123456"
                pattern=${lowerAndUpperCaseLettersPattern}"
                browser-pattern-value-msg=${patternMismatchMsg}>
            </bs-form-input>
        `));

        const inputElement = bsFormInput.shadowRoot.querySelector('input');

        // when
        bsFormInput.validate();

        // then
        expect(inputElement.checkValidity()).to.equal(false);
        expect(inputElement.validationMessage).to.equal(patternMismatchMsg);
    });
});

describe('bs-form-input', () => {
    it('browser validation for max length input satisfied', async () => {

        // given

        // maxlength = ValidityState.tooLong
        // true if the value exceeds the specified maxlength
        // false if its length is less than or equal to the maximum length

        const bsFormInput = (await fixture(html`
            <bs-form-input
                required
                browser-validation
                type="text"
                value="asd"
                maxlength="3">
            </bs-form-input>
        `));

        const inputElement = bsFormInput.shadowRoot.querySelector('input');

        // when
        bsFormInput.validate();

        // then
        expect(inputElement.checkValidity()).to.equal(true);
    });
});

describe('bs-form-input', () => {
    it('browser validation for min length input satisfied', async () => {

        // given
        const bsFormInput = (await fixture(html`
            <bs-form-input
                required
                browser-validation
                type="text"
                value="123"
                minlength="3">
            </bs-form-input>
        `));

        const inputElement = bsFormInput.shadowRoot.querySelector('input');

        // when
        bsFormInput.validate();

        // then
        expect(inputElement.checkValidity()).to.equal(true);
    });
});

describe('bs-form-input', () => {
    it('browser validation for min input satisfied', async () => {

        // given
        const bsFormInput = (await fixture(html`
            <bs-form-input
                required
                browser-validation
                type="number"
                value="6"
                min="5">
            </bs-form-input>
        `));

        const inputElement = bsFormInput.shadowRoot.querySelector('input');

        // when
        bsFormInput.validate();

        // then

        // inputElement checkValidity()
        expect(inputElement.checkValidity()).to.equal(true);
    });
});

describe('bs-form-input', () => {
    it('browser validation for max input satisfied', async () => {

        // given
        const bsFormInput = (await fixture(html`
            <bs-form-input
                required
                browser-validation
                type="number"
                value="10"
                max="10">
            </bs-form-input>
        `));

        const inputElement = bsFormInput.shadowRoot.querySelector('input');

        // when
        bsFormInput.validate();

        // then
        expect(inputElement.checkValidity()).to.equal(true);
    });
});

describe('bs-form-input', () => {
    it('browser validation for step mismatch with custom message', async () => {

        // given
        const stepMismatchMsg = 'Value does not match defined stepping base';
        const bsFormInput = (await fixture(html`
            <bs-form-input
                required
                browser-validation
                type="number"
                value="5"
                step="2"
                browser-step-mismatch-msg=${stepMismatchMsg}>
            </bs-form-input>
        `));

        const inputElement = bsFormInput.shadowRoot.querySelector('input');

        // when
        bsFormInput.validate();

        // then
        expect(inputElement.checkValidity()).to.equal(false);
        expect(inputElement.validationMessage).to.equal(stepMismatchMsg);
    });
});
