
import { DataTypes } from "sequelize";
import db from "../config/db.js";

const itemSave = db.define("itemsave", {
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
    allowNull: false,
  },
  selected_symptoms: {
    type: DataTypes.TEXT,
    allowNull: false,
    get() {
      const rawValue = this.getDataValue("selected_symptoms");
      return rawValue ? JSON.parse(rawValue) : [];
    },
    set(val) {
      this.setDataValue("selected_symptoms", JSON.stringify(val));
    },
  },
  diseases: {
  type: DataTypes.TEXT,
  allowNull: true,
  get() {
    const raw = this.getDataValue("diseases");
    return raw ? JSON.parse(raw) : [];
  },
  set(val) {
    this.setDataValue("diseases", JSON.stringify(val));
  },
},

  saran: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  rujukan: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

(async () => await db.sync({ alter: true }))();

export default itemSave;
