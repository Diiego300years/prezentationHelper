import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { unzippigPresentation } from "/app/controllers/add_presentation.js";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "templates", "index.html"));
});

router.post("/unzipPresentation", async (req, res) => {
  // This endpoint is responsible for unpacking the presentation.

  try {
    const presentationName = "sample_1.pptx";
    // console.log(`String for presetnation name: ${presentationName}`);
    console.log("chuj");
    await unzippigPresentation(presentationName, res);
  } catch (error) {
    console.log("chuj v2");
    console.log({ error: error.message });
  }
});

export default router;
