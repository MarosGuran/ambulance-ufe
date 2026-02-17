import { newE2EPage } from '@stencil/core/testing';

describe('mg-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mg-ambulance-wl-list></mg-ambulance-wl-list>');

    const element = await page.find('mg-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
