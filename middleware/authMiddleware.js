import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Ambil token dari header

  if (!token) {
    return res
      .status(401)
      .json({ message: "Akses ditolak! Token diperlukan." });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Token tidak valid." });
    }

    req.user = decoded; // Simpan data user dari token
    next();
  });
};
