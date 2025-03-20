import express from "express";
import {
  fetchQuestions,
  addNewQuestion,
} from "../controllers/question.controller.js";

const route = express.Router();

route.get("/", fetchQuestions);

route.post("/add", addNewQuestion);

export default route;
