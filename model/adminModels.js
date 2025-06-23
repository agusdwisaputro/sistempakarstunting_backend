import { DataTypes, Sequelize } from "sequelize";
import db from "../config/db.js";

export const itemadmin = db.define("itemadmin", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
});

(async () => await db.sync())();

export default itemadmin;
