/**
 * Entry point for the Express application. This file sets up the server,
 * including middleware for request logging, CORS, request parsing, static file serving,
 * and routing. It also starts the server listening on a specified port.
 */

import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import configureRoutes from "./routes/index.js"; // Assumes this file coordinates all routers
import logRequest from "./middleware/customMiddleware.js"; // Import custom request logging middleware

// Calculate the directory name of the current module. This is used to serve static files.
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize the express application
const app = express();

// Apply middleware to parse JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS for all routes
app.use(cors());

// Use custom middleware to log all incoming requests
app.use(logRequest);

// Serve static files from the 'public/static' directory
app.use(express.static(path.join(__dirname, "public", "static")));

// Configure and use routers defined in 'routes/index.js'
configureRoutes(app);

// The port on which the server will listen
const port = 3000;

// Start listening for incoming requests on the specified port
app.listen(port, () => {
  console.log(`Application is listening on port ${port}`);
});
