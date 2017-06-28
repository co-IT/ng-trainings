import { NuernbergPage } from './app.po';

describe('nuernberg App', () => {
  let page: NuernbergPage;

  beforeEach(() => {
    page = new NuernbergPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
