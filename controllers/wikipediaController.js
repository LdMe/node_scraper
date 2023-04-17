import Scraper from "../utils/scraper.js";
import Parser from "../utils/parser.js";
import googleSearchController from "./googleSearchController.js";

const wikipediaController = {
    search: async (query) => {
        const fullQuery = "wikipedia " + query;
        const links = await googleSearchController.search(fullQuery);
        const link  = links.find((link)=> link.includes("wikipedia.org"));
        const scraper = new Scraper();
        await scraper.init();
        
        const html = await scraper.scrape(link);
        const parser = new Parser(html);
        const title = parser.getTitle();
        const images = parser.getImages();
        const paragraphs = parser.getParagraphs();
        const firstParagraph = paragraphs[0];
        scraper.close();
        return({title,firstParagraph,images});
    },
    searchLinks: async (query) => {
        const fullQuery = "wikipedia " + query;
        const linksToWikipedia = await googleSearchController.search(fullQuery);
        const link  = linksToWikipedia.find((link)=> link.includes("wikipedia.org"));
        const scraper = new Scraper();
        await scraper.init();
        
        const html = await scraper.scrape(link);
        const parser = new Parser(html);
        const links = parser.getLinks();
        scraper.close();
        return(links);
    }

    

};

export default wikipediaController;