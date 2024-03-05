import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const unzipRouter = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

unzipRouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "templates", "index.html"));
});

unzipRouter.post("/unzipPresentation", async (req, res) =>
{try {
  const { prezentationName } = "sample_1.pptx";
  comsole.log(`String for prezetnation name: ${prezentationName}`);
  await unzipPrezentation(prezentationName);
  res.status(200).json({message: 'Presentation unzipped'});
} catch (error) {
  res.status(500).json({error: error.message });
}
});

export default unzipRouter;
