import express from "express";
import {
  getAdmins,
  getAdmin,
  postAdmin,
  patchAdmin,
  deleteAdmin,
} from "../controllers/adminController.js";

const adminRouter = express.Router();

adminRouter.get("/", getAdmins);
adminRouter.get("/:id", getAdmin);
adminRouter.post("/", postAdmin);

adminRouter.patch("/:id", patchAdmin);
adminRouter.delete("/:id", deleteAdmin);

export default adminRouter;
