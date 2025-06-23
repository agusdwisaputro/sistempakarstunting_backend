import { DataTypes } from "sequelize";
import db from "../config/database.js";
import User from "./userModel.js"; // Pastikan model User sudah diimport

const Diagnosis = db.define(
  "Diagnosis",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
      onDelete: "CASCADE",
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    diagnosis_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    disease: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    certainty_factor: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    detailed_diagnosis: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "diagnoses",
    timestamps: false,
  }
);

// Hubungkan Diagnosis dengan User (Relasi One-to-Many)
User.hasMany(Diagnosis, { foreignKey: "userId" });
Diagnosis.belongsTo(User, { foreignKey: "userId" });

export default Diagnosis;
