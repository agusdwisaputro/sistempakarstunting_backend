import express from "express";
import { postUser } from "../controllers/loginuserController.js";

const loginuserRouter = express.Router();

loginuserRouter.post("/", postUser);

export default loginuserRouter;
