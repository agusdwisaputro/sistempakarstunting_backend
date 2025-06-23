import { DataTypes, Sequelize } from "sequelize";
import db from "../config/db.js";

const itemPenyakit = db.define("itempenyakit", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nama_penyakit: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
});

// Sinkronisasi database
(async () => await db.sync({ alter: true }))(); // ⬅️ alter: true agar update struktur tabel

export default itemPenyakit;
