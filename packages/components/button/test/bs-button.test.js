import sinon from 'sinon/pkg/sinon-esm.js';
import { html, fixture, aTimeout, oneEvent } from '@open-wc/testing';

import '../src/bs-button.js';

describe('<bs-button> accessibility', () => {

    it('is accessible', async () => {

        // given
        const buttonTemplate = html`
            <bs-button>Button</bs-button>
        `;

        // when
        const bsButton = await fixture(buttonTemplate);

        // then
        chai.assert.isAccessible(bsButton);
    });

    it('has correct aria role', async () => {

        // given
        const buttonTemplate = html`
            <bs-button>Button</bs-button>
        `;

        // when
        const bsButton = await fixture(buttonTemplate);

        // then
        chai.expect(bsButton).to.have.attribute('role', 'button');
    });

    it('has correct aria disable state', async () => {

        // given
        const buttonTemplate = html`
            <bs-button disabled>Button</bs-button>
        `;

        // when
        const bsButton = await fixture(buttonTemplate);

        // then
        chai.expect(bsButton).to.have.attribute('tabindex', '-1');
        chai.expect(bsButton).to.have.attribute('aria-disabled', 'true');
    });

    it('has correct aria active state', async () => {

        // given
        const buttonTemplate = html`
            <bs-button active>Button</bs-button>
        `;

        // when
        const bsButton = await fixture(buttonTemplate);

        // then
        chai.expect(bsButton).to.have.attribute('aria-pressed', 'true');
    });
});

describe('<bs-button> property state', () => {

    it('active attribute is set', async () => {

        // given
        const buttonTemplate = html`
            <bs-button active>Button</bs-button>
        `;

        const expectShadowDom = `
            <button
                type="button"
                class="btn active">
                <slot></slot>
            </button>
        `;

        // when
        const bsButton = await fixture(buttonTemplate);

        // then
        chai.assert.equal(bsButton.active, true, 'active property is false');
        chai.assert.shadowDom.equal(bsButton, expectShadowDom);
    });

    it('activate method called', async () => {

        // given
        const buttonTemplate = html`
            <bs-button>Button</bs-button>
        `;

        const expectShadowDom = `
            <button
                type="button"
                class="btn active">
                <slot></slot>
            </button>
        `;

        const bsButton = await fixture(buttonTemplate);

        // when
        await bsButton.activate();

        // then
        chai.assert.equal(bsButton.getAttribute('active'), '', 'active attribute is not present');
        chai.assert.shadowDom.equal(bsButton, expectShadowDom);
    });

    it('deactivate method called', async () => {

        // given
        const buttonTemplate = html`
            <bs-button active>Button</bs-button>
        `;

        const expectShadowDom = `
            <button
                type="button"
                class="btn">
                <slot></slot>
            </button>
        `;

        const bsButton = await fixture(buttonTemplate);

        // when
        await bsButton.deactivate();

        // then
        chai.assert.equal(bsButton.getAttribute('active'), null, 'active attribute is present');
        chai.assert.shadowDom.equal(bsButton, expectShadowDom);
    });

    it('disabled attribute is set', async () => {

        // given
        const buttonTemplate = html`
            <bs-button disabled>Button</bs-button>
        `;

        const expectShadowDom = `
            <button
                type="button"
                disabled
                class="btn">
                <slot></slot>
            </button>
        `;

        // when
        const bsButton = await fixture(buttonTemplate);

        // then
        chai.assert.equal(bsButton.disabled, true, 'disabled property is false');
        chai.assert.shadowDom.equal(bsButton, expectShadowDom);
    });

    it('disable method called', async () => {

        // given
        const buttonTemplate = html`
            <bs-button>Button</bs-button>
        `;

        const expectShadowDom = `
            <button
                type="button"
                disabled
                class="btn">
                <slot></slot>
            </button>
        `;

        const bsButton = await fixture(buttonTemplate);

        // when
        await bsButton.disable();

        // then
        chai.assert.equal(bsButton.getAttribute('disabled'), '', 'disabled attribute is not present');
        chai.assert.shadowDom.equal(bsButton, expectShadowDom);
    });

    it('enable method called', async () => {

        // given
        const buttonTemplate = html`
            <bs-button disabled>Button</bs-button>
        `;

        const expectShadowDom = `
            <button
                type="button"
                class="btn">
                <slot></slot>
            </button>
        `;

        const bsButton = await fixture(buttonTemplate);

        // when
        await bsButton.enable();

        // then
        chai.assert.equal(bsButton.getAttribute('disabled'), null, 'disabled attribute is present');
        chai.assert.shadowDom.equal(bsButton, expectShadowDom);
    });
});

describe('<bs-button> events', () => {

    it('click event', async () => {

        // given
        const buttonTemplate = html`
            <bs-button>Button</bs-button>
        `;

        const bsButton = await fixture(buttonTemplate);
        const button = bsButton.shadowRoot.querySelector(".btn");

        // when
        setTimeout(() => button.click());

        // then
        const { detail } = await oneEvent(bsButton, 'bs-button-click');

        chai.assert.equal(detail.active, false, 'event.detail.active value is true');
        chai.assert.equal(detail.toggle, false, 'event.detail.toggle value is true');
        chai.assert.equal(detail.dropdown, false, 'event.detail.dropdown value is true');

        // verify element has focus
        chai.assert.shadowDom.equal(bsButton, bsButton.shadowRoot.activeElement);
    });

    it('togglable is active after click event', async () => {

        // given
        const buttonTemplate = html`
            <bs-button toggle>Button</bs-button>
        `;

        const bsButton = await fixture(buttonTemplate);
        const button = bsButton.shadowRoot.querySelector(".btn");

        // when
        setTimeout(() => button.click());

        // then
        const { detail } = await oneEvent(bsButton, 'bs-button-click');

        chai.assert.equal(detail.active, true, 'event.detail.active value is false');
        chai.assert.equal(detail.toggle, true, 'event.detail.toggle value is false');
        chai.assert.equal(detail.dropdown, false, 'event.detail.dropdown value is true');

        // verify element has focus
        chai.assert.shadowDom.equal(bsButton, bsButton.shadowRoot.activeElement);
    });

    it('dropdownToggle is active after click event', async () => {

        // given
        const buttonTemplate = html`
            <bs-button dropdown-toggle>Button</bs-button>
        `;

        const bsButton = await fixture(buttonTemplate);
        const button = bsButton.shadowRoot.querySelector(".btn");

        // when
        setTimeout(() => button.click());

        // then
        const { detail } = await oneEvent(bsButton, 'bs-button-click');

        chai.assert.equal(detail.active, true, 'event.detail.active value is false');
        chai.assert.equal(detail.toggle, false, 'event.detail.toggle value is true');
        chai.assert.equal(detail.dropdown, true, 'event.detail.dropdown value is false');

        // verify element has focus
        chai.assert.shadowDom.equal(bsButton, bsButton.shadowRoot.activeElement);
    });

    it('disabled button no click event fired', async () => {

        // given
        const buttonTemplate = html`
            <bs-button disabled>Button</bs-button>
        `;

        const bsButton = await fixture(buttonTemplate);
        const button = bsButton.shadowRoot.querySelector(".btn");

        const bsButtonClickSpy = sinon.spy();
        bsButton.addEventListener('bs-button-click', bsButtonClickSpy);

        // when
        setTimeout(() => button.click());
        await aTimeout(500);

        // then
        sinon.assert.notCalled(bsButtonClickSpy);
    });

    it('focusout event', async () => {

        // given
        const buttonTemplate = html`
            <bs-button>Button</bs-button>
        `;

        const bsButton = await fixture(buttonTemplate);
        const button = bsButton.shadowRoot.querySelector(".btn");

        const bsButtonClickSpy = sinon.spy();
        bsButton.addEventListener('bs-button-focusout', bsButtonClickSpy);

        button.focus();

        // when
        button.blur();
        await aTimeout(500);

        // then
        sinon.assert.calledOnce(bsButtonClickSpy);
    });

    it('disabled button no focusout event', async () => {

        // given
        const buttonTemplate = html`
            <bs-button disabled>Button</bs-button>
        `;

        const bsButton = await fixture(buttonTemplate);
        const button = bsButton.shadowRoot.querySelector(".btn");

        const bsButtonClickSpy = sinon.spy();
        bsButton.addEventListener('bs-button-focusout', bsButtonClickSpy);

        button.focus();

        // when
        button.blur();
        await aTimeout(500);

        // then
        sinon.assert.notCalled(bsButtonClickSpy);
    });

    it('active & dropdownToggle button is not active after focusout event', async () => {

        // given
        const buttonTemplate = html`
            <bs-button active dropdown-toggle>Button</bs-button>
        `;

        const bsButton = await fixture(buttonTemplate);
        const button = bsButton.shadowRoot.querySelector(".btn");

        button.focus();
        await aTimeout(500);

        // when
        button.blur();
        await aTimeout(500);

        // then
        chai.assert.equal(bsButton.active, false, 'bsButton.active value is true');
    });
});
