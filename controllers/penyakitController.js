import itemPenyakit from "../model/penyakitModels.js";

// ✅ GET semua penyakit
export const getPenyakits = async (req, res, next) => {
  try {
    const response = await itemPenyakit.findAll({
      order: [["createdAt", "DESC"]],
    });
    return res.status(200).json({ data: response });
  } catch (error) {
    next(error);
  }
};

// ✅ GET penyakit by ID
export const getPenyakit = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const response = await itemPenyakit.findByPk(id);

    if (!response) {
      return res.status(404).json({ message: "Penyakit tidak ditemukan" });
    }

    // Bungkus dengan properti 'data'
    return res.status(200).json({
      message: "Penyakit ditemukan",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

// ✅ POST tambah penyakit
export const postPenyakit = async (req, res, next) => {
  try {
    const {  nama_penyakit } = req.body;

    if (!nama_penyakit) {
      return res.status(400).json({ message: "Semua data wajib diisi!" });
    }

    const exist = await itemPenyakit.findOne({ where: { nama_penyakit } });
    if (exist) {
      return res
        .status(400)
        .json({ message: "Kode penyakit sudah digunakan!" });
    }

    const response = await itemPenyakit.create({
      nama_penyakit,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return res.status(201).json({
      message: "Penyakit berhasil ditambahkan",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

// ✅ PATCH update penyakit
export const patchPenyakit = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const { nama_penyakit} = req.body;

    const exist = await itemPenyakit.findByPk(id);
    if (!exist) {
      return res.status(404).json({ message: "Penyakit tidak ditemukan" });
    }

    await itemPenyakit.update(
      {
        nama_penyakit: nama_penyakit || exist.nama_penyakit,
        updatedAt: new Date(),
      },
      { where: { id } }
    );

    return res.status(200).json({ message: "Penyakit berhasil diupdate" });
  } catch (error) {
    next(error);
  }
};

// ✅ DELETE penyakit
export const deletePenyakit = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const exist = await itemPenyakit.findByPk(id);

    if (!exist) {
      return res.status(404).json({ message: "Penyakit tidak ditemukan" });
    }

    await itemPenyakit.destroy({ where: { id } });

    return res.status(200).json({
      message: `Sukses menghapus penyakit ${exist.nama_penyakit}`,
    });
  } catch (error) {
    next(error);
  }
};
