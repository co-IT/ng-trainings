import { LeipzigPage } from './app.po';

describe('leipzig App', () => {
  let page: LeipzigPage;

  beforeEach(() => {
    page = new LeipzigPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
