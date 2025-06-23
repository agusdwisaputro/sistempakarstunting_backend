import express from "express";
import { diagnoseDisease } from "../controllers/diagnosisController.js";

const router = express.Router();

router.post("/", diagnoseDisease);

export default router;
