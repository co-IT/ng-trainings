import { KarlsruhePage } from './app.po';

describe('karlsruhe App', () => {
  let page: KarlsruhePage;

  beforeEach(() => {
    page = new KarlsruhePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
