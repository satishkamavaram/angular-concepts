import { MyFirstAngularjs2Page } from './app.po';

describe('my-first-angularjs2 App', () => {
  let page: MyFirstAngularjs2Page;

  beforeEach(() => {
    page = new MyFirstAngularjs2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
