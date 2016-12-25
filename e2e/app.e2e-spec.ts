import { K30AdminPage } from './app.po';

describe('k30-admin App', function() {
  let page: K30AdminPage;

  beforeEach(() => {
    page = new K30AdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
