import { html, fixture } from '@open-wc/testing';

import '../src/bs-button-toolbar.js';

describe('<bs-button-toolbar>', () => {

    it('bs-button-toolbar_isAccessibleByDefault', async () => {

        // given
        const buttonToolbarTemplate = html`
            <bs-button-toolbar></bs-button-toolbar>
        `;

        // when
        const bsButtonToolbar = await fixture(buttonToolbarTemplate);

        // then
        chai.assert.isAccessible(bsButtonToolbar);
    });

    it('bs-button-toolbar_hasCorrectAriaRole', async () => {

        // given
        const buttonToolbarTemplate = html`
            <bs-button-toolbar></bs-button-toolbar>
        `;

        // when
        const bsButtonToolbar = await fixture(buttonToolbarTemplate);

        // then
        chai.expect(bsButtonToolbar).to.have.attribute('role', 'toolbar');
    });
});
