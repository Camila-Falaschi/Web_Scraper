import validateFields from "../Middleware/Validation";

const { Router } = require("express");
const scraperController = require("../Controllers/ScraperController");

const routes = Router();

routes.use(validateFields);
routes.get("/", scraperController.getProducts());

export default routes;
