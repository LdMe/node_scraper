import wikipediaController from "../controllers/wikipediaController.js";

describe("Wikipedia Controller", () => {

    it("Debería obtener correctamente el título de una página de wikipedia", async () => {
        const {title,firstParagraph,images} = await wikipediaController.search("lorem ipsum");
        expect(title).toContain("Lorem ipsum");
        expect(images[0]).toContain("//upload.wikimedia.org/wikipedia/commons/thumb/8/86/Lorem_ipsum_design.svg/200px-Lorem_ipsum_design.svg.png");
        expect(firstParagraph).toContain("Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final");
    });

    it("Debería obtener correctamente los links de una página de wikipedia", async () => {
        const links = await wikipediaController.searchLinks("wikipedia");
        expect(links).toContain("/wiki/Enciclopedia");
    }, 15000);
});