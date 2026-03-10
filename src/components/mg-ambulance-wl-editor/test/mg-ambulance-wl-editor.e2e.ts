import { newE2EPage } from '@stencil/core/testing';

describe('mg-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mg-ambulance-wl-editor></mg-ambulance-wl-editor>');

    const element = await page.find('mg-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
