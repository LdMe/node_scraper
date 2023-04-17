import jsdom from 'jsdom';

class Parser {
    constructor(html) {
        this.html = html;
        this.loadDocument();

    }
    loadDocument() {
        const { JSDOM } = jsdom;
        const dom = new JSDOM(this.html);
        const { document } = dom.window;
        this.document = document;
    } 
    getLinks() {
        const links = this.document.querySelectorAll('a');
        const linksArray = Array.from(links);
        const hrefs = linksArray.map(link => link.href.replace(/\/$/, '')); // remove last slash
        return hrefs;
    }
    getImages() {
        const images = this.document.querySelectorAll('img');
        const imagesArray = Array.from(images);
        const srcs = imagesArray.map(image => image.src);
        return srcs;
    }
    

}

export default Parser;