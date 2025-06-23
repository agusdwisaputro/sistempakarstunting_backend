import knowledgeBase from "../data/knowledgeBase.js";

// Fungsi menghitung CF berdasarkan gejala user dan gejala penyakit
const calculateCertaintyFactor = (symptoms, diseaseSymptoms) => {
  let combinedCF = 0;

  symptoms.forEach((userSymptom) => {
    const normalizedSymptom = userSymptom.toLowerCase().trim();

    const matchingSymptom = diseaseSymptoms.find(
      (dSymptom) => dSymptom.name.toLowerCase().trim() === normalizedSymptom
    );

    if (!matchingSymptom) {
      console.warn("❗ Gejala tidak ditemukan di knowledgeBase:", userSymptom);
      return;
    }

    const { mb, md } = matchingSymptom;

    if (
      typeof mb !== "number" ||
      typeof md !== "number" ||
      isNaN(mb) ||
      isNaN(md)
    ) {
      console.warn("❌ Nilai mb/md tidak valid:", userSymptom, matchingSymptom);
      return;
    }

    const cf = mb - md;
    combinedCF = combinedCF + cf * (1 - Math.abs(combinedCF));
  });

  return combinedCF;
};

// Endpoint utama untuk diagnosa
export const diagnoseDisease = (req, res) => {
  const { symptoms } = req.body;

  console.log("📥 Gejala dikirim dari frontend:", symptoms);

  if (!symptoms || !Array.isArray(symptoms) || symptoms.length === 0) {
    return res
      .status(400)
      .json({ message: "Tidak ada gejala yang diberikan." });
  }

  try {
    const diagnosisResults = knowledgeBase.diseases.map((disease) => {
      const cf = calculateCertaintyFactor(symptoms, disease.symptoms);

      let diagnosis = `Kemungkinan tidak ${disease.name}`;
      if (cf > 0.8) {
        diagnosis = `Kemungkinan besar ${disease.name}`;
      } else if (cf > 0.6) {
        diagnosis = `Indikasi ${disease.name}, disarankan konsultasi lebih lanjut`;
      }

      return {
        disease: disease.name,
        certaintyFactor: Number(cf.toFixed(6)),
        diagnosis,
      };
    });

    const validResults = diagnosisResults.filter(
      (r) => typeof r.certaintyFactor === "number" && !isNaN(r.certaintyFactor)
    );

    if (validResults.length === 0) {
      console.log("ℹ️ Semua hasil CF tidak valid (NaN atau undefined)");
      return res.status(200).json([]);
    }

    // Urutkan hasil dari CF tertinggi ke terendah
    validResults.sort((a, b) => b.certaintyFactor - a.certaintyFactor);

    // Untuk debugging terminal
    console.table(validResults);

    // Kirim semua hasil ke frontend
    return res.status(200).json(validResults);
  } catch (error) {
    console.error("❌ Error saat diagnosis:", error);
    return res.status(500).json({
      message: "Terjadi kesalahan pada server saat proses diagnosa.",
    });
  }
};
