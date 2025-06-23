import express from "express";
import {
  getUsers,
  getUser,
  postUser,
  patchUser,
  deleteUser,
} from "../controllers/userController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const userRouter = express.Router();

userRouter.get("/", verifyToken, getUsers); // Hanya admin
userRouter.get("/:id", verifyToken, getUser); // Hanya user yang login
userRouter.post("/", postUser); // Registrasi user baru
userRouter.patch("/:id", verifyToken, patchUser); // Update data user
userRouter.delete("/:id", verifyToken, deleteUser); // Hapus user

export default userRouter;
