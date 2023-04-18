import pupeteer from 'puppeteer';
/**
 * Clase encargada de hacer scraping de una página web.
 * @class
 */
class Scraper {
  /**
   * Construye una instancia de la clase Scraper.
   * @constructor
   * @param {boolean} headless - Indica si el navegador ejecutado estará en modo headless o no.
   */
  constructor(headless = true) {
    this.browser = null;
    this.page = null;
    this.headless = headless;
  }
  
  /**
   * Inicializa el navegador para hacer el scraping.
   * @async
   */
  async init() {
    this.browser = await pupeteer.launch({ headless: this.headless});
    this.page = await this.browser.newPage();
  }

  /**
   * Hace el scraping de la página web indicada.
   * @async
   * @param {string} url - URL de la página web a hacer scraping.
   * @returns {string} - HTML de la página web.
   */
  async scrape(url) {
    await this.page.goto(url);
    const html = await this.page.content();
    return html;
  }

  /**
   * Cierra el navegador.
   * @async
   */
  async close() {
    await this.browser.close();
  }
}

export default Scraper;
