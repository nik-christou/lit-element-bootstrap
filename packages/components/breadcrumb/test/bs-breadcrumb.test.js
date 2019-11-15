import { html, fixture } from '@open-wc/testing';

import '../src/bs-breadcrumb.js';
import '../src/bs-breadcrumb-item.js';

describe('bs-breadcrumb', () => {

    it('bs-breadcrumb_defaultRender_isAccessible', async () => {

        // given
        const breadcrumbTemplate = html`
            <bs-breadcrumb></bs-breadcrumb>
        `;

        // when
        const bsBreadcrumb = await fixture(breadcrumbTemplate);

        // then
        chai.assert.isAccessible(bsBreadcrumb);
    });

    it('bs-breadcrumb_defaultRender_hasCorrectAriaRole', async () => {

        // given
        const breadcrumbTemplate = html`
            <bs-breadcrumb></bs-breadcrumb>
        `;

        // when
        const bsBreadcrumb = await fixture(breadcrumbTemplate);

        // then
        chai.expect(bsBreadcrumb).to.have.attribute('aria-label', 'breadcrumb');
    });

    it('bs-breadcrumb_singleItem_itemDoesNotHaveBeforeContent', async () => {

        // given
        const breadcrumbTemplate = html`
            <bs-breadcrumb>
                <bs-breadcrumb-item title="Home" href="/home" active></bs-breadcrumb-item>
            </bs-breadcrumb>
        `;

        // when
        const bsBreadcrumb = await fixture(breadcrumbTemplate);

        // then
        const breadcrumbItem = bsBreadcrumb.querySelector('bs-breadcrumb-item');
        
        const paddingStyle = getComputedStyle(breadcrumbItem).getPropertyValue('--breadcrumb-item-padding-left');
        const beforeContent = getComputedStyle(breadcrumbItem).getPropertyValue('--breadcrumb-item-divider-content');

        chai.assert.equal('0', paddingStyle);
        chai.assert.equal('none', beforeContent);
    });
});