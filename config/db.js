import { Sequelize } from "sequelize";

export const db = new Sequelize("sistem_pakar", "root", "agus123", {
  host: "localhost",
  port: "3306",
  dialect: "mysql",
});

export default db;
