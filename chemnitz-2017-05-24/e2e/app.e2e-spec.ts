import { ChemnitzPage } from './app.po';

describe('chemnitz App', () => {
  let page: ChemnitzPage;

  beforeEach(() => {
    page = new ChemnitzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
