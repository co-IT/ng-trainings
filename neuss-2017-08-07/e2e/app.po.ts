import { browser, by, element } from 'protractor';

export class NgSeedPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ws-root h1')).getText();
  }
}
