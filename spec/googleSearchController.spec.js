import googleSearchController from "../controllers/googleSearchController.js";

describe("Google Search Controller", () => {
    it("Debería obtener correctamente los links de una búsqueda", async () => {
        const links = await googleSearchController.search("wikipedia");
        expect(links).toContain("https://www.wikipedia.org");
    });
    }
);