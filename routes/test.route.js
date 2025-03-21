import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { submitTest,getTestResult, saveFeedBack } from "../controllers/test.controller.js";

const route = express.Router();

route.post("/submit", isAuthenticated, submitTest);

route.get("/result", isAuthenticated, getTestResult);

route.post("/feedback/:testId", isAuthenticated, saveFeedBack);

export default route;
