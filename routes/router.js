import { Router } from "express";
import wikipediaController from "../controllers/wikipediaController.js";
const router = Router();

router.get("/", async (req, res) => {
    const query = req.query.q || "Lorem ipsum";
    console.log(query);
    res.send(await wikipediaController.search(query));
});


export default router;
