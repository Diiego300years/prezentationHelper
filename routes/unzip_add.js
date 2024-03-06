/**
 * Router configuration for the Express application. This module sets up the
 * HTTP routes for both displaying the main page and handling the presentation
 * unzipping functionality.
 * 
 * The root route serves the main index.html file, providing the user interface.
 * The `/unzipPresentation` route is designed to handle POST requests to unzip
 * a specified presentation file.
 */

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { unzippigPresentation } from "/app/controllers/add_presentation.js";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Serves the main application page to the client. This endpoint sends the
 * `index.html` file located in the `public/templates` directory.
 * 
 * @route GET /
 * @access Public
 */
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "templates", "index.html"));
});

/**
 * Endpoint to trigger the unzipping process for a given presentation file.
 * It calls the `unzippigPresentation` function, which is responsible for
 * unzipping the specified presentation. The name of the presentation is
 * currently taking from main.js POST option where in body is defind json.
 * 
 * @route POST /unzipPresentation
 * @access Public
 * @param {express.Request} req - The request object, not used in this function.
 * @param {express.Response} res - The response object used to send back a
 *                                 HTTP response.
 */
router.post("/unzipPresentation", async (req, res) => {
  try {
    const presentationName = req.body.presentationName; // Placeholder, adjust accordingly.
    await unzippigPresentation(presentationName, res);
  } catch (error) {
    console.error("Error while unzipping presentation:", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
