import itemuser from "../model/userModels.js";

export const postUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Silakan masukkan username dan password." });
    }

    // Cari user berdasarkan username dan password (tanpa hashing)
    const userExist = await itemuser.findOne({
      where: { username, password },
    });

    if (!userExist) {
      return res.status(401).json({ message: "Username atau password salah." });
    }

    // Kirimkan userId dan username untuk disimpan di localStorage
    return res.status(200).json({
      message: "Login berhasil!",
      userId: userExist.id,
      username: userExist.username,
      role: userExist.role, // bisa dipakai untuk redirect role admin/user
    });
  } catch (error) {
    console.error("❌ Error saat login:", error);
    return res.status(500).json({ message: "Terjadi kesalahan saat login." });
  }
};
