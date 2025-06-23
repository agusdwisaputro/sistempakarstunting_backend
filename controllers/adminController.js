import { Sequelize, Op } from "sequelize";
import itemadmin from "../model/adminModels.js";

// Get all user
export const getAdmins = async (req, res, next) => {
  try {
    const response = await itemadmin.findAll();

    if (!response) {
      throw new Error("Belum ada data!");

      // return res.status(200).send({
      //   message: "Belum ada data!",
      // });
    }

    return res.status(200).send({
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

// Get single admin by ID
export const getAdmin = async (req, res, next) => {
  try {
    const userId = Number(req.params.id);
    const response = await itemadmin.findOne({
      where: {
        id: userId,
      },
    });

    if (!response) {
      throw new Error("User tidak di temukan!");

      // return res.status(200).send({
      //   message: "Barang tidak di temukan!",
      // });
    }

    return res.status(200).send({
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

// Create new USER
export const postAdmin = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new Error("Data gagal disimpan!");
    }

    const exist = await itemadmin.findOne({
      where: {
        [Op.or]: [{ username }, { password }],
      },
    });

    if (exist) {
      throw new Error("user sudah ada!");
    }

    const response = await itemadmin.create({
      username,
      password,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return res.status(200).send({
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

// Update existing user
export const patchAdmin = async (req, res, next) => {
  try {
    const userId = Number(req.params.id);
    const { username, password } = req.body;
    if (!username && !password) {
      throw new Error("Tidak bisa mengupdate data tanpa ada inputan");
    }

    const exist = await itemadmin.findOne({
      where: {
        id: userId,
      },
    });

    if (!exist) {
      throw new Error(`user dengan id=${userId} tidak ada`);
    }

    await itemadmin.update(
      {
        username: username || exist.username,
        password: password || exist.password,
      },
      {
        where: {
          id: userId,
        },
      }
    );

    return res.status(200).send({
      message: "Sukses mengupdate user",
    });
  } catch (error) {
    next(error);
  }
};

// Delete user
export const deleteAdmin = async (req, res, next) => {
  try {
    const userId = Number(req.params.id);
    const exist = await itemadmin.findOne({
      where: {
        id: userId,
      },
    });
    if (!exist) {
      throw new Error("User yang akan dihapus tidak tersedia");
    }
    await itemadmin.destroy({
      where: {
        id: userId,
      },
    });
    return res.status(200).send({
      message: `Sukses menghapus user ${exist.namabarang}`,
    });
  } catch (error) {
    next(error);
  }
};
