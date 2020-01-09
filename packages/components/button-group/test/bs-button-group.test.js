import { html, fixture } from '@open-wc/testing';

import '../src/bs-button-group.js';

describe('<bs-button-group>', () => {

    it('bs-button-group_isAccessibleByDefault', async () => {

        // given
        const buttonGroupTemplate = html`
            <bs-button-group></bs-button-group>
        `;

        // when
        const bsButtonGroup = await fixture(buttonGroupTemplate);

        // then
        chai.assert.isAccessible(bsButtonGroup);
    });

    it('bs-button-group_hasCorrectAriaRole', async () => {

        // given
        const buttonGroupTemplate = html`
            <bs-button-group></bs-button-group>
        `;

        // when
        const bsButtonGroup = await fixture(buttonGroupTemplate);

        // then
        chai.expect(bsButtonGroup).to.have.attribute('role', 'group');
    });
});
