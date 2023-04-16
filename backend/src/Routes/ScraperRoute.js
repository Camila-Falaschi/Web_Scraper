import validateFields from "../Middleware/Validation.js";
import { Router } from "express";
import scraperController from "../Controllers/ScraperController.js";

const routes = Router();

routes.get("/", validateFields, scraperController);

export default routes;
