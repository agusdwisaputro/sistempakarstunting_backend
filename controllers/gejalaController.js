import { Sequelize, Op } from "sequelize";
import itemGejala from "../model/gejalaModels.js";

// Ambil semua data gejala
export const getGejalas = async (req, res, next) => {
  try {
    const data = await itemGejala.findAll({ order: [["id", "ASC"]] });
    return res.status(200).json({ data });
  } catch (error) {
    console.error("❌ Gagal ambil gejala:", error.message);
    return res.status(500).json({ message: "Gagal mengambil data gejala" });
  }
};

// Ambil satu gejala berdasarkan ID
export const getGejala = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const data = await itemGejala.findOne({ where: { id } });

    if (!data) {
      return res.status(404).json({ message: "Gejala tidak ditemukan" });
    }

    return res.status(200).json({ data });
  } catch (error) {
    console.error("❌ Gagal ambil satu gejala:", error.message);
    return res.status(500).json({ message: "Gagal mengambil data gejala" });
  }
};

// Tambah data gejala baru
export const postGejala = async (req, res, next) => {
  try {
    const { kategori, gejala } = req.body;

    if (!kategori || !gejala) {
      return res.status(400).json({ message: "Semua kolom harus diisi" });
    }

    // Cek duplikat
    const exist = await itemGejala.findOne({
      where: {
        [Op.or]: [{ gejala }],
      },
    });

    if (exist) {
      return res.status(400).json({ message: "Kode atau gejala sudah ada" });
    }

    const result = await itemGejala.create({
      kategori,
      gejala,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return res
      .status(201)
      .json({ message: "Gejala berhasil ditambahkan", data: result });
  } catch (error) {
    console.error("❌ Gagal tambah gejala:", error.message);
    return res.status(500).json({ message: "Gagal menambahkan gejala" });
  }
};

// Update gejala berdasarkan ID
export const patchGejala = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const { kategori, gejala } = req.body;

    const existing = await itemGejala.findByPk(id);
    if (!existing) {
      return res.status(404).json({ message: "Gejala tidak ditemukan" });
    }

    await itemGejala.update(
      {
        kategori: kategori || existing.kode,
        gejala: gejala || existing.gejala,
        updatedAt: new Date(),
      },
      { where: { id } }
    );

    return res.status(200).json({ message: "Gejala berhasil diperbarui" });
  } catch (error) {
    console.error("❌ Gagal update gejala:", error.message);
    return res.status(500).json({ message: "Gagal mengupdate gejala" });
  }
};

// Hapus gejala berdasarkan ID
export const deleteGejala = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const existing = await itemGejala.findByPk(id);

    if (!existing) {
      return res.status(404).json({ message: "Gejala tidak ditemukan" });
    }

    await itemGejala.destroy({ where: { id } });

    return res.status(200).json({ message: "Gejala berhasil dihapus" });
  } catch (error) {
    console.error("❌ Gagal hapus gejala:", error.message);
    return res.status(500).json({ message: "Gagal menghapus gejala" });
  }
};
