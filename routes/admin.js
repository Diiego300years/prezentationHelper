/**
 * Sets up an Express router to serve a specific HTML page from the `public/templates` directory.
 * This router configuration is responsible for defining HTTP endpoints for the application,
 * with a primary focus on serving the `drugi_index.html` file when the root URL is accessed.
 * 
 * This setup demonstrates a simple use case of Express's static file serving capabilities,
 * specifically optimized for situations where a single HTML page or application entry point
 * needs to be served in response to a specific route.
 */

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Initialize an Express router to define route handlers
const router = express.Router();

// Derive the directory name of the current module to construct paths dynamically
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Responds to GET requests on the root ("/") path by serving the `drugi_index.html` file.
 * This endpoint is designed to provide the entry point HTML page to clients, showcasing
 * the capability to serve static HTML content in response to web requests.
 * 
 * @route GET /
 * @access Public
 */
router.get("/admin", (req, res) => {
  // Construct the path to `drugi_index.html` and send it as the response
  res.sendFile(path.join(__dirname, "..", "public", "templates", "drugi_index.html"));
});

// Export the router for use in the main server configuration
export default router;
