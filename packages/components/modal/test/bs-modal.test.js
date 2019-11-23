import { html, fixture, expect, oneEvent } from '@open-wc/testing'
import '../src/index.js'

describe('<bs-modal>', () => {
    it('does not close when clicked', async () => {
        // given
        const modal = await fixture(html`
            <bs-modal>
                <bs-modal-body slot="body">
                </bs-modal-body>
            </bs-modal>`);
        modal.open();
        const body = modal.querySelector('bs-modal-body');

        // when
        body.click();

        // then
        expect(modal.opened).to.be.true
    });

    it('does not prevent click events from children', async () => {
        // given
        const modal = await fixture(html`
            <bs-modal>
                <bs-modal-body slot="body">
                    <button></button>
                </bs-modal-body>
            </bs-modal>`);
        const button = modal.querySelector('button');

        // when
        setTimeout(() => button.click());
        const ev = await oneEvent(modal, 'click');

        // then
        expect(ev).to.be.ok
    });
});
