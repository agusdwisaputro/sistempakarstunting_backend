import { itemadmin } from "../model/adminModels.js";

export const postAdmin = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new Error("Silahkan masukkan data login");
    }
    const userExist = await itemadmin.findOne({
      where: {
        username,
        password,
      },
    });
    if (!userExist) {
      throw new Error("Username atau password yang anda masukkan salah");
    }
    return res.status(200).send({ message: "Success login" });
  } catch (error) {
    next(error);
  }
};
