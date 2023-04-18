/**
 * Controlador de búsqueda en Google.
 * @namespace GoogleSearchController
 */
import Scraper from "../utils/scraper.js";
import Parser from "../utils/parser.js";

const googleSearchController = {
    /**
     * Busca en Google y devuelve los enlaces obtenidos.
     * @memberof GoogleSearchController
     * @async
     * @function search
     * @param {string} query - Término de búsqueda en Google.
     * @returns {string[]} - Array con los enlaces obtenidos en la búsqueda en Google.
     * @example
     * const links = await googleSearchController.search("wikipedia");
     * console.log(links);
     * // [ 'https://www.google.com/', 'https://www.google.com/intl/es-419/gmail/about/', 'https://www.google.com/intl/es-419/about/products?tab=wh'... ]
     * 
     **/

    search: async (query) => {
        const scraper = new Scraper();
        await scraper.init();
        const url = `https://www.google.com/search?q=${query}`;
        const html = await scraper.scrape(url);
        const parser = new Parser(html);
        const links = parser.getLinks();
        scraper.close();
        return(links);
    }
};

export default googleSearchController;