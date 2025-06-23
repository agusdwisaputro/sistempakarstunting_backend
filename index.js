// index.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import diagnosaRoutes from "./routes/diagnosisRoutes.js";
import penyakitRoutes from "./routes/penyakitRoutes.js";
import gejalaRoutes from "./routes/gejalaRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import loginuserRoutes from "./routes/loginuserRoutes.js";
import loginadminRoutes from "./routes/loginadminRoutes.js";
import saveRoutes from "./routes/saveRoutes.js";
import knowledgeBaseRoutes from "./routes/knowledgeBaseRoutes.js"

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes Middleware
app.use("/itempenyakit", penyakitRoutes);
app.use("/itemgejala", gejalaRoutes);
app.use("/itemuser", userRoutes);
app.use("/itemadmin", adminRoutes);
app.use("/loginuser", loginuserRoutes);
app.use("/loginadmin", loginadminRoutes);
app.use("/diagnosa", diagnosaRoutes);
app.use("/itemsave", saveRoutes);
app.use("/knowledgebase", knowledgeBaseRoutes);

app.use((err, req, res, next) => {
  return res.status(503).json({
    message: err.message,
  });
});

const PORT = 8080;
app.listen(PORT, () =>
  console.log(`Server berjalan dengan baik di port ${PORT}`)
);
