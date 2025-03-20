import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { submitTest } from "../controllers/test.controller.js";

const route = express.Router();

route.post("/submit", isAuthenticated, submitTest);

export default route;
