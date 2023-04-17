import { Router } from "express";
import scraper from "../controllers/scraper.js";
const router = Router();

router.get("/", async (req, res) => {
    const url = "https://stackoverflow.com/questions/930397/how-do-i-get-the-last-element-of-a-list"
    const result = await scraper.scrape(url);
    res.setHeader("Content-Type", "text/html")
    res.send(result.join("\n----------------\n"));
});


export default router;
