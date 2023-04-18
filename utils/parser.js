import jsdom from 'jsdom';

/**
 * Clase encargada de hacer el parseo del HTML de una página web.
 * @class
 */
class Parser {
    /**
     * Construye una instancia de la clase Parser.
     * @constructor
     * @param {string} html - HTML de la página web a parsear.
     */
    constructor(html) {
        /** @private */
        this.html = html;
        this.loadDocument();

    }
    /**
   * Carga el documento HTML de la página web a parsear.
   * @private
   */
    loadDocument() {
        const { JSDOM } = jsdom;
        const dom = new JSDOM(this.html);
        const { document } = dom.window;
        this.document = document;
    } 
    /**
   * Obtiene el título de la página web parseada.
   * @returns {string} - Título de la página web.
   */
    getTitle() {
        const title = this.document.querySelector('title');
        return title.textContent;
    }
    /**
   * Obtiene los enlaces de la página web parseada.
   * @returns {string[]} - Array con los enlaces de la página web.
   */
    getLinks() {
        const links = this.document.querySelectorAll('a');
        const linksArray = Array.from(links);
        const hrefs = linksArray.map(link => link.href.replace(/\/$/, '')); // remove last slash
        return hrefs;
    }
    /**
   * Obtiene las imágenes de la página web parseada.
   * @returns {string[]} - Array con las URLs de las imágenes de la página web.
   */
    getImages() {
        const images = this.document.querySelectorAll('img');
        const imagesArray = Array.from(images);
        const srcs = imagesArray.map(image => image.src);
        return srcs;
    }
    /**
   * Obtiene los párrafos de la página web parseada.
   * @returns {string[]} - Array con los textos de los párrafos de la página web.
   */
    getParagraphs() {
        const paragraphs = this.document.querySelectorAll('p');
        const paragraphsArray = Array.from(paragraphs);
        const text = paragraphsArray.map(paragraph => paragraph.textContent);
        return text;
    }
    

}

export default Parser;