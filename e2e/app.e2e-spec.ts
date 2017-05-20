import { AhdbnePage } from './app.po';

describe('ahdbne App', () => {
  let page: AhdbnePage;

  beforeEach(() => {
    page = new AhdbnePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
