import itemuser from "./userModels.js";
import itemSave from "./saveModels.js";

itemuser.hasMany(itemSave, { foreignKey: "userId", as: "diagnoses" });
itemSave.belongsTo(itemuser, { foreignKey: "userId", as: "user" });

export { itemuser, itemSave };
