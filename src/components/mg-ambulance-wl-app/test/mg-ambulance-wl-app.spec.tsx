import { newSpecPage } from '@stencil/core/testing';
import { MgAmbulanceWlApp } from '../mg-ambulance-wl-app';

describe('mg-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [MgAmbulanceWlApp],
      html: `<mg-ambulance-wl-app base-path="/"></mg-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("mg-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [MgAmbulanceWlApp],
      html: `<mg-ambulance-wl-app base-path="/ambulance-wl/"></mg-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("mg-ambulance-wl-list");
  });
});
