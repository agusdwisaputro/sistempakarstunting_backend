import { DataTypes, Sequelize } from "sequelize";
import db from "../config/db.js";

const itemGejala = db.define("itemgejala", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  kategori: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gejala: {
    type: DataTypes.STRING,
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

export default itemGejala;
