// routes/knowledgeBaseRoutes.js
import express from "express";
import knowledgeBase from "../data/knowledgeBase.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(knowledgeBase);
});

export default router;
