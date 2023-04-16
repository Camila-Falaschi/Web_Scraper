const { Router } = require("express");
const scraperController = require("../Controllers/ScraperController");

const routes = Router();

routes.get("/", scraperController.getProducts());

export default routes;
