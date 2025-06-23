import express from "express";
import {
  getPenyakits,
  getPenyakit,
  postPenyakit,
  patchPenyakit,
  deletePenyakit,
} from "../controllers/penyakitController.js";

const penyakitRouter = express.Router();

penyakitRouter.get("/", getPenyakits);
penyakitRouter.get("/:id", getPenyakit);
penyakitRouter.post("/", postPenyakit);
penyakitRouter.patch("/:id", patchPenyakit);
penyakitRouter.delete("/:id", deletePenyakit);

export default penyakitRouter;
