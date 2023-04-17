import Scraper from "../utils/scraper.js";
import Parser from "../utils/parser.js";



const googleSearchController = {
    search: async (query) => {
        const scraper = new Scraper();
        await scraper.init();
        const url = `https://www.google.com/search?q=${query}`;
        const html = await scraper.scrape(url);

        const parser = new Parser(html);
        const links = parser.getLinks();
        return(links);
    }
};

export default googleSearchController;