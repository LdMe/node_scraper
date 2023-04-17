import Parser from '../utils/parser.js';

describe('Parser', () => {
  let parser;

  beforeEach(() => {
    const html = `
    <html>
     <body>
      <a href="https://www.google.com"></a>
      <a href="https://www.facebook.com"></a>
      <img src="https://www.example.com/image1.jpg"></img>
      <img src="https://www.example.com/image2.jpg"></img>
     </body>
    </html>`;
    parser = new Parser(html);
  });

  it('Debería obtener correctamente una array de links', () => {
    const links = parser.getLinks();
    expect(links).toEqual(['https://www.google.com', 'https://www.facebook.com']);
  });

  it('Debería obtener correctamente una array de imágenes', () => {
    const images = parser.getImages();
    expect(images).toEqual(['https://www.example.com/image1.jpg', 'https://www.example.com/image2.jpg']);
  });


});