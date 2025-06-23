import itemuser from "../model/userModels.js";

// Get all users
export const getUsers = async (req, res, next) => {
  try {
    const response = await itemuser.findAll();

    if (!response || response.length === 0) {
      throw new Error("Belum ada data!");
    }

    return res.status(200).json({
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

// Get user by ID
export const getUser = async (req, res, next) => {
  try {
    const userId = Number(req.params.id);
    const response = await itemuser.findOne({
      where: {
        id: userId,
      },
    });

    if (!response) {
      throw new Error("User tidak ditemukan!");
    }

    return res.status(200).json({
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

//get data dari user
export const getUserDiagnosis = async (req, res) => {
  const { username } = req.params;

  try {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }

    return res
      .status(200)
      .json({ message: "Data ditemukan", hasil: user.hasil });
  } catch (error) {
    console.error("Error fetching user diagnosis:", error);
    return res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};

// Create new user (tanpa enkripsi)
export const postUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Data tidak lengkap!" });
    }

    // Cek apakah user sudah ada
    const exist = await itemuser.findOne({
      where: {
        username,
      },
    });

    if (exist) {
      return res.status(400).json({ message: "User sudah ada!" });
    }

    // Simpan password sebagai teks biasa
    const response = await itemuser.create({
      username,
      password, // Simpan password dalam bentuk plain text tanpa hashing
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return res.status(201).json({
      message: "User berhasil dibuat",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

// Update user by ID
export const patchUser = async (req, res, next) => {
  try {
    const userId = Number(req.params.id);
    const { username, password } = req.body;

    if (!username && !password) {
      throw new Error("Tidak ada data yang diinput untuk diperbarui");
    }

    const exist = await itemuser.findOne({
      where: {
        id: userId,
      },
    });

    if (!exist) {
      throw new Error(`User dengan ID=${userId} tidak ditemukan`);
    }

    await itemuser.update(
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

    return res.status(200).json({
      message: "User berhasil diperbarui",
    });
  } catch (error) {
    next(error);
  }
};

// Delete user
export const deleteUser = async (req, res, next) => {
  try {
    const userId = Number(req.params.id);

    const exist = await itemuser.findOne({
      where: {
        id: userId,
      },
    });

    if (!exist) {
      throw new Error("User yang akan dihapus tidak ditemukan");
    }

    await itemuser.destroy({
      where: {
        id: userId,
      },
    });

    return res.status(200).json({
      message: `User ${exist.fullName} berhasil dihapus`,
    });
  } catch (error) {
    next(error);
  }
};
