// controllers/saveController.js

import itemSave from "../model/saveModels.js";

// Ambil semua hasil diagnosis (tidak difilter per user)
export const getDiagnosis = async (req, res) => {
  try {
    const diagnoses = await itemSave.findAll({
      order: [["diagnosis_date", "DESC"]],
    });

    return res.status(200).json({
      message: "Berhasil mengambil semua data diagnosis",
      data: diagnoses,
    });
  } catch (error) {
    console.error("❌ Gagal ambil data diagnosis:", error.message);
    return res.status(500).json({
      message: "Terjadi kesalahan pada server saat mengambil data diagnosis",
    });
  }
};

// Simpan satu record berisi semua penyakit hasil diagnosa
export const saveDiagnosis = async (req, res) => {
  try {
    const {
      name,
      gender,
      age,
      diagnosisDate,
      diseases, // array of hasil diagnosa
      selected_symptoms,
    } = req.body;

    if (!Array.isArray(diseases) || diseases.length === 0) {
      return res.status(400).json({ message: "Data diagnosis tidak ditemukan." });
    }

    const topDiagnosis = diseases[0];

    const result = await itemSave.create({
      name,
      gender,
      age,
      diagnosis_date: diagnosisDate,
      disease: topDiagnosis.disease,
      certainty_factor: topDiagnosis.certainty_factor || topDiagnosis.certaintyFactor,
      detailed_diagnosis: topDiagnosis.detailed_diagnosis || topDiagnosis.diagnosis,
      selected_symptoms,
      diseases,
      saran: topDiagnosis.saran || "-",
      rujukan: topDiagnosis.rujukan || "-",
    });

    return res.status(200).json({
      message: "Diagnosis berhasil disimpan.",
      data: result,
    });
  } catch (error) {
    console.error("❌ Gagal simpan hasil diagnosa:", error.message);
    return res.status(500).json({
      message: "Terjadi kesalahan saat menyimpan hasil diagnosa.",
    });
  }
};

// Hapus diagnosis berdasarkan id
export const deleteDiagnosis = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await itemSave.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ message: "Data tidak ditemukan." });
    }

    return res.status(200).json({ message: "Data berhasil dihapus." });
  } catch (error) {
    console.error("❌ Gagal menghapus data:", error.message);
    return res.status(500).json({ message: "Terjadi kesalahan saat menghapus data." });
  }
};
