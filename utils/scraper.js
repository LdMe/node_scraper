import pupeteer from 'puppeteer';

class Scraper {
  constructor(headless = true) {
    this.browser = null;
    this.page = null;
    this.headless = headless;
  }

  async init() {
    this.browser = await pupeteer.launch({ headless: this.headless});
    this.page = await this.browser.newPage();
  }

  async scrape(url) {
    await this.page.goto(url);
    const html = await this.page.content();
    return html;
  }

  async close() {
    await this.browser.close();
  }
}

export default Scraper;
