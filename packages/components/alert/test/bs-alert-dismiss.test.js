import sinon from 'sinon/pkg/sinon-esm.js';
import { html, fixture, aTimeout } from '@open-wc/testing';

import '../src/bs-alert-dismiss.js';

describe('bs-alert-dismiss', () => {

    it('button_clickOccured_eventIsFired', async () => {

        // given
        const alertDismissTemplate = html`
            <bs-alert-dismiss></bs-alert-dismiss>
        `;

        const bsAlertDismiss = await fixture(alertDismissTemplate);
        const buttonElement = bsAlertDismiss.shadowRoot.querySelector('button');

        const closeButtonClickSpy = sinon.spy();
        bsAlertDismiss.addEventListener('close.button.click', closeButtonClickSpy);

        // when
        buttonElement.click();
        await aTimeout(500);

        // then
        sinon.assert.calledOnce(closeButtonClickSpy);
    });
});
