import { NeuhaussenPage } from './app.po';

describe('neuhaussen App', () => {
  let page: NeuhaussenPage;

  beforeEach(() => {
    page = new NeuhaussenPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
