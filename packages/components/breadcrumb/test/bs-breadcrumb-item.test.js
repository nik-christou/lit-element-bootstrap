import { html, fixture } from '@open-wc/testing';

import '../src/bs-breadcrumb.js';

describe('bs-breadcrumb-item', () => {

    it('bs-breadcrum-item_notActive_renderedAsLink', async () => {

        // given
        const title = 'Home';
        const href = '/home';

        const breadcrumbItemTemplate = html`
            <bs-breadcrumb-item title="${title}" href="${href}"></bs-breadcrumb-item>
        `;

        // when
        const bsBreadcrumbItem = await fixture(breadcrumbItemTemplate);

        // then
        chai.assert.shadowDom.equal(bsBreadcrumbItem, `<a href="${href}">${title}</a>`);
    });

    it('bs-breadcrum-item_isActive_renderedAsText', async () => {

        // given
        const title = 'Home';

        const breadcrumbItemTemplate = html`
            <bs-breadcrumb-item title="${title}" active></bs-breadcrumb-item>
        `;

        // when
        const bsBreadcrumbItem = await fixture(breadcrumbItemTemplate);

        // then
        chai.assert.shadowDom.equal(bsBreadcrumbItem, `<span>${title}</span>`);
    });
});