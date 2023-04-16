import express from "express";
import 'express-async-errors';
import routes from "./Routes/ScraperRoute.js";

const app = express();

app.use(express.json());
app.use(routes);

export default app;
