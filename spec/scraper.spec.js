import Scraper from '../utils/scraper.js';

describe("Scraper", () => {
  let scraper;

  beforeAll(async () => {
    scraper = new Scraper();
    await scraper.init();
  });

  afterAll(async () => {
    await scraper.close();
  });

  it("Debería scrapear correctamente un sitio web", async () => {
    const html = await scraper.scrape("https://www.google.com");
    expect(html).toContain("Google");
  });

});
