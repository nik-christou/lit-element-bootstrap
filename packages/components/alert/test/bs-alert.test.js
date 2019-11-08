
import sinon from 'sinon/pkg/sinon-esm.js';
import { html, fixture, aTimeout } from '@open-wc/testing';

import '../src/bs-alert.js';

describe('bs-alert', () => {

    it('bs-alert_defaultRender_isAccessible', async () => {

        // given
        const alertTemplate = html`
            <bs-alert>
                <p>This is an alert message</p>
            </bs-alert>
        `;

        // when
        const bsAlert = await fixture(alertTemplate);

        // then
        chai.assert.isAccessible(bsAlert);
    });

    it('bs-alert_defaultRender_hasCorrectAriaRole', async () => {

        // given
        const alertTemplate = html`
            <bs-alert>
                <p>This is an alert message</p>
            </bs-alert>
        `;

        // when
        const bsAlert = await fixture(alertTemplate);

        // then
        chai.expect(bsAlert).to.have.attribute('role', 'alert');
    });

    it('dismissable_attributeNotPresent_propertyIsFalse', async () => {

        // given
        const alertTemplate = html`
            <bs-alert>
                <p>This is an alert message</p>
            </bs-alert>
        `;

        // when
        const bsAlert = await fixture(alertTemplate);

        // then
        chai.assert.equal(bsAlert.dismissable, false, 'Dismissable property is not false');
    });

    it('dismissable_attributePresent_propertyIsTrue', async () => {

        // given
        const alertTemplate = html`
            <bs-alert dismissable>
                <p>This is an alert message</p>
            </bs-alert>
        `;

        // when
        const bsAlert = await fixture(alertTemplate);

        // then
        chai.assert.equal(bsAlert.dismissable, true, 'Dismissable property is not true');
    });

    it('dismiss_attributeNotPresent_errorIsThrown', async () => {

        // given
        const alertTemplate = html`
            <bs-alert>
                <p>This is an alert message</p>
            </bs-alert>
        `;

        const bsAlert = await fixture(alertTemplate);

        const closeBsAlertSpy = sinon.spy();
        const closedBsAlertSpy = sinon.spy();

        bsAlert.addEventListener('close.bs.alert', closeBsAlertSpy);
        bsAlert.addEventListener('closed.bs.alert', closedBsAlertSpy);

        // when
        await bsAlert.dismiss();

        // then
        sinon.assert.notCalled(closeBsAlertSpy);
        sinon.assert.notCalled(closedBsAlertSpy);
    });

    it('dismiss_called_bothEventsAreFired', async () => {

        // given
        const alertTemplate = html`
            <bs-alert dismissable>
                <p>This is an alert message</p>
            </bs-alert>
        `;

        const bsAlert = await fixture(alertTemplate);

        const closeBsAlertSpy = sinon.spy();
        const closedBsAlertSpy = sinon.spy();

        bsAlert.addEventListener('close.bs.alert', closeBsAlertSpy);
        bsAlert.addEventListener('closed.bs.alert', closedBsAlertSpy);

        // when
        await bsAlert.dismiss();

        // then
        sinon.assert.calledOnce(closeBsAlertSpy);
        sinon.assert.calledOnce(closedBsAlertSpy);
    });

    it('dismiss_calledViaAnEvent_bothEventsAreFired', async () => {

        // given
        const alertTemplate = html`
            <bs-alert dismissable>
                <p>This is an alert message</p>
                <div id="dismissComponent" slot="dismiss"></div>
            </bs-alert>
        `;

        const bsAlert = await fixture(alertTemplate);

        const closeBsAlertSpy = sinon.spy();
        const closedBsAlertSpy = sinon.spy();

        bsAlert.addEventListener('close.bs.alert', closeBsAlertSpy);
        bsAlert.addEventListener('closed.bs.alert', closedBsAlertSpy);

        const dismissComponent = bsAlert.querySelector('#dismissComponent');
        const closeButtonClickEvent = new CustomEvent('close.button.click', {
            bubbles: true,
            composed: true
        });

        // when
        dismissComponent.dispatchEvent(closeButtonClickEvent);
        await aTimeout(500);

        // then
        sinon.assert.calledOnce(closeBsAlertSpy);
        sinon.assert.calledOnce(closedBsAlertSpy);
    });
});
