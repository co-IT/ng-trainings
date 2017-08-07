import { NgSeedPage } from './app.po';

describe('ng-seed App', () => {
  let page: NgSeedPage;

  beforeEach(() => {
    page = new NgSeedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to ws!');
  });
});
