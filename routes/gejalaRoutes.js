import express from "express";
import {
  getGejalas,
  getGejala,
  postGejala,
  patchGejala,
  deleteGejala,
} from "../controllers/gejalaController.js";

const router = express.Router();

router.get("/", getGejalas);
router.get("/:id", getGejala);
router.post("/", postGejala);
router.patch("/:id", patchGejala);
router.delete("/:id", deleteGejala);

export default router;
