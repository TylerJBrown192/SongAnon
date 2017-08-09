import { SongAnonPage } from './app.po';

describe('song-anon App', () => {
  let page: SongAnonPage;

  beforeEach(() => {
    page = new SongAnonPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
