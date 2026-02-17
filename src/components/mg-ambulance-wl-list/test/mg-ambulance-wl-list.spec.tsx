import { newSpecPage } from '@stencil/core/testing';
import { MgAmbulanceWlList } from '../mg-ambulance-wl-list';

describe('mg-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MgAmbulanceWlList],
      html: `<mg-ambulance-wl-list></mg-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <mg-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mg-ambulance-wl-list>
    `);
  });
});
