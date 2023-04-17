import Scraper from "../utils/scraper.js";
import Parser from "../utils/parser.js";
import googleSearchController from "./googleSearchController.js";

const wikipediaController = {
    search: async (query) => {
        const links = await googleSearchController.search(query);
        const scraper = new Scraper();
        await scraper.init();
        const html = await scraper.scrape(links[0]);
        const parser = new Parser(html);
        const images = parser.getImages();
        return(images);
    }
};
