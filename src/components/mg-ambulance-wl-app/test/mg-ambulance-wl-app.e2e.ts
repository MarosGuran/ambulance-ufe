import { newE2EPage } from '@stencil/core/testing';

describe('mg-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mg-ambulance-wl-app></mg-ambulance-wl-app>');

    const element = await page.find('mg-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
