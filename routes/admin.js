import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "templates", "drugi_index.html"));
});

export default router;
