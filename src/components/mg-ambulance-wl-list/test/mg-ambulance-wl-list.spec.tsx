import { newSpecPage } from '@stencil/core/testing';
import { MgAmbulanceWlList } from '../mg-ambulance-wl-list';

describe('mg-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MgAmbulanceWlList],
      html: `<mg-ambulance-wl-list></mg-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as MgAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
