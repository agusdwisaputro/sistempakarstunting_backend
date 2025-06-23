const knowledgeBase = {
  diseases: [
    {
      name: "Kwashiorkor",
      saran:
        "Berikan makanan tinggi protein, hindari infeksi sekunder, dan dapatkan penanganan medis segera di fasilitas kesehatan ( WHO, Kemenkes RI ).",
      rujukan: "Puskesmas, RS Rujukan Gizi Buruk, atau Dokter Gizi Anak",
      symptoms: [
        { name: "Pertumbuhan tulang terhambat", mb: 1.0, md: 0.2, category: "Fisik" },
        { name: "Pertumbuhan gigi terhambat", mb: 0.8, md: 0.2, category: "Fisik" },
        { name: "Keletihan akut", mb: 0.8, md: 0.2, category: "Yang Dirasakan" },
        { name: "Diare kronis", mb: 1.0, md: 0.4, category: "Yang Dirasakan" },
        { name: "Mudah menangis", mb: 0.8, md: 0.2, category: "Perilaku Anak" },
        { name: "Otot otot melemah", mb: 0.8, md: 0.2, category: "Fisik" },
        { name: "Kulit terlihat keriput", mb: 0.8, md: 0.2, category: "Fisik" },
        { name: "Pembengkakan pada tungkai,kaki,tangan,beserta muka", mb: 1.0, md: 0.2, category: "Fisik" },
        { name: "Bintik dan bersisik pada kulit", mb: 0.8, md: 0.2, category: "Fisik" },
        { name: "Perut makin mengembung", mb: 0.8, md: 0.2, category: "Fisik" },
        { name: "Infeksi yang lebih sering dan pasrah disebabkan sistem", mb: 0.8, md: 0.2, category: "Yang Dirasakan" },
        { name: "Tanda jari yang membekas dikulit saat disentuh", mb: 1.0, md: 0.2, category: "Fisik" },
      ],
    },
    {
      name: "Marasmus",
      saran:
        "Segera berikan makanan tinggi energi dan protein, penanganan medis darurat, serta konsultasi ke dokter anak ( WHO, Kemenkes RI ).",
      rujukan: "RSUD bagian anak, Dokter Spesialis Gizi Klinik, atau Dokter Anak",
      symptoms: [
        { name: "Pertumbuhan tulang terhambat", mb: 1.0, md: 0.2, category: "Fisik" },
        { name: "Pertumbuhan gigi terhambat", mb: 0.8, md: 0.2, category: "Fisik" },
        { name: "Kulit dan rambut kering", mb: 0.8, md: 0.2, category: "Fisik" },
        { name: "Kehilangan lemak dan massa otot tubuh", mb: 1.0, md: 0.2, category: "Fisik" },
        { name: "Diare kronis", mb: 1.0, md: 0.4, category: "Yang Dirasakan" },
        { name: "Mudah marah", mb: 0.6, md: 0.2, category: "Perilaku Anak" },
        { name: "Rambut rangup dan gampang tanggal", mb: 0.8, md: 0.2, category: "Fisik" },
        { name: "Menurunnya perkembangan kognitif", mb: 1.0, md: 0.2, category: "Fisik" },
        { name: "Terhalangnya pertumbuhan psikis kecerdasan", mb: 1.0, md: 0.2, category: "Fisik" },
        { name: "Sakit kepala", mb: 0.6, md: 0.4, category: "Yang Dirasakan" },
        { name: "Selalu lapar", mb: 0.8, md: 0.4, category: "Yang Dirasakan" },
        { name: "Badan tampak semakin ramping", mb: 0.8, md: 0.2, category: "Fisik" },
        { name: "Muka terlihat tua", mb: 1.0, md: 0.2, category: "Fisik" },
        { name: "Berat badan menurun", mb: 0.8, md: 0.2, category: "Yang Dirasakan" },
        { name: "Mudah menangis", mb: 0.8, md: 0.2, category: "Perilaku Anak" },
      ],
    },
    {
      name: "Gizi lebih",
      saran:
        "Perbanyak konsumsi zat besi, vitamin B12, dan asam folat. Konsultasi dengan dokter untuk suplemen tambahan ( WHO, Kemenkes RI )",
      rujukan: "Dokter Anak atau Spesialis Hematologi Anak",
      symptoms: [
        { name: "Kelebihan berat badan", mb: 1.0, md: 0.2, category: "Fisik" },
        { name: "obesitas", mb: 0.8, md: 0.2, category: "Fisik" },
        { name: "Badan gemuk", mb: 0.8, md: 0.2, category: "Fisik" },
      ],
    },
    {
      name: "Gizi kurang",
      saran:
        "Perbanyak konsumsi zat besi, vitamin B12, dan asam folat. Konsultasi dengan dokter untuk suplemen tambahan ( WHO, Kemenkes RI )",
      rujukan: "Dokter Anak atau Spesialis Hematologi Anak",
      symptoms: [
        { name: "Wajah tampak lebih muda dari anak seusianya", mb: 0.8, md: 0.2, category: "Fisik" },
        { name: "Memori belajar yang kurang baik", mb: 0.8, md: 0.4, category: "Perilaku Anak" },
        { name: "Nafsu makan rendah", mb: 1.0, md: 0.2, category: "Yang Dirasakan" },
        { name: "Skala tubuh cenderung normal terlihat lebih muda", mb: 0.8, md: 0.2, category: "Fisik" },
        { name: "Sering sakit dan memerlukan waktu yang lama untuk pulih", mb: 0.8, md: 0.2, category: "Yang Dirasakan" },
        { name: "Keletihan akut", mb: 0.8, md: 0.2, category: "Yang Dirasakan" },
        { name: "Sanitasi yang buruk", mb: 0.8, md: 0.4, category: "Fisik" },
        { name: "Kulit dan rambut kering", mb: 1.0, md: 0.2, category: "Fisik" },
      ],
    },
    {
      name: "Stunting",
      saran:
        "Berikan makanan bergizi tinggi, pantau pertumbuhan secara berkala, dan lakukan pemeriksaan ke posyandu atau puskesmas ( WHO, Kemenkes RI )",
      rujukan: "Kementerian Kesehatan RI, Posyandu, atau Puskesmas terdekat",
      symptoms: [
        { name: "Jika dibandingkan dengan anak seusianya tinggi badannya paling pendek", mb: 1.0, md: 0.4, category: "Fisik" },
        { name: "Pertumbuhan tulang terhambat", mb: 1.0, md: 0.4, category: "Fisik" },
        { name: "Terserang berbagai penyakit infeksi", mb: 0.6, md: 0.2, category: "Yang Dirasakan" },
        { name: "Wajah tampak lebih muda dari anak seusianya", mb: 0.8, md: 0.4, category: "Fisik" },
        { name: "Pertumbuhan gigi terhambat", mb: 0.6, md: 0.4, category: "Fisik" },
        { name: "Memori belajar yang kurang baik", mb: 0.8, md: 0.4, category: "Perilaku Anak" },
        { name: "Anak jadi lebih pendiam", mb: 0.8, md: 0.4, category: "Perilaku Anak" },
        { name: "pubertas terlambat", mb: 0.6, md: 0.4, category: "Yang Dirasakan" },
      ],
    },
  ],
};

export default knowledgeBase;
