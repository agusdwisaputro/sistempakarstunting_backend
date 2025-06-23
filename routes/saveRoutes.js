import express from "express";
import { saveDiagnosis, getDiagnosis, deleteDiagnosis} from "../controllers/saveController.js";

const router = express.Router();

router.get("/", getDiagnosis);
router.post("/", saveDiagnosis);
router.delete("/:id", deleteDiagnosis);


export default router;
