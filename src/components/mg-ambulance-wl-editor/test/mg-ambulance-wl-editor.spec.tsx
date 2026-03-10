import { newSpecPage } from '@stencil/core/testing';
import { MgAmbulanceWlEditor } from '../mg-ambulance-wl-editor';

describe('mg-ambulance-wl-editor', () => {
  it('buttons shall be of different type', async () => {
    const page = await newSpecPage({
      components: [MgAmbulanceWlEditor],
      html: `<mg-ambulance-wl-editor entry-id="@new"></mg-ambulance-wl-editor>`,
    });
    let items: any = await page.root.shadowRoot.querySelectorAll("md-filled-button");
    expect(items.length).toEqual(1);
    items = await page.root.shadowRoot.querySelectorAll("md-outlined-button");
    expect(items.length).toEqual(1);

    items = await page.root.shadowRoot.querySelectorAll("md-filled-tonal-button");
    expect(items.length).toEqual(1);
  });
});
