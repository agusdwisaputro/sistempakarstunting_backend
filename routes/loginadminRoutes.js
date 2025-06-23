import express from "express";
import { postAdmin } from "../controllers/loginadminController.js";

const loginadminRouter = express.Router();

loginadminRouter.post("/", postAdmin);

export default loginadminRouter;
