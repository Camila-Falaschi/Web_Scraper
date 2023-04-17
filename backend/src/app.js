import express from "express";
import 'express-async-errors';
const cors = require('cors');
import routes from "./Routes/ScraperRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

export default app;
