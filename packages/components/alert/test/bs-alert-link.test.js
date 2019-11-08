
import { html, fixture } from '@open-wc/testing';

import '../src/bs-alert-link.js';

describe('bs-alert-link', () => {

    it('bs-alert-link_defaultTarget_targetIsSelf', async () => {

        // given
        const alertLinkTemplate = html`
            <bs-alert-link info>This is an example link.</bs-alert-link>
        `;

        // when
        const bsAlertLink = await fixture(alertLinkTemplate);

        // then
        chai.assert.propertyVal(bsAlertLink, 'target', '_self');
    });

    it('bs-alert-link_defaultHref_hrefIsEmpty', async () => {

        // given
        const alertLinkTemplate = html`
            <bs-alert-link info>This is an example link.</bs-alert-link>
        `;

        // when
        const bsAlertLink = await fixture(alertLinkTemplate);

        // then
        chai.assert.propertyVal(bsAlertLink, 'href', '');
    });

    it('bs-alert-link_setTarget_newTargetIsSet', async () => {

        // given
        const anchorTarget = '_blank';
        const linkText = 'This is an example link.';

        const alertLinkTemplate = html`
            <bs-alert-link info target=${anchorTarget}>${linkText}</bs-alert-link>
        `;

        const expectedShadowDom = `
            <a href="" target="${anchorTarget}">
                <slot></slot>
            </a>
        `;

        // when
        const bsAlertLink = await fixture(alertLinkTemplate);

        // then
        chai.expect(bsAlertLink).to.have.attribute('target', anchorTarget);
        chai.assert.propertyVal(bsAlertLink, 'target', anchorTarget);
        chai.assert.lightDom.equal(bsAlertLink, linkText);
        chai.assert.shadowDom.equal(bsAlertLink, expectedShadowDom);
    });

    it('bs-alert-link_setHref_newHrefIsSet', async () => {

        // given
        const anchorHref = '#something';
        const linkText = 'This is an example link.';

        const alertLinkTemplate = html`
            <bs-alert-link info href="${anchorHref}">${linkText}</bs-alert-link>
        `;

        const expectedShadowDom = `
        <a href="${anchorHref}" target="_self">
            <slot></slot>
        </a>
        `;

        // when
        const bsAlertLink = await fixture(alertLinkTemplate);

        // then
        chai.expect(bsAlertLink).to.have.attribute('href', anchorHref);
        chai.assert.propertyVal(bsAlertLink, 'href', anchorHref);
        chai.assert.lightDom.equal(bsAlertLink, linkText);
        chai.assert.shadowDom.equal(bsAlertLink, expectedShadowDom);
    });
});
