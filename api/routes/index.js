import express from "express";
import unzipRouter from "./unzip_add.js";
import adminRouter from "./admin.js"; // Nowy import

/**
 * Configures and mounts route handlers for an Express application. This function
 * sets up the primary routing for the application, associating each router with
 * its respective base path. 
 * 
 * - The root path (`/`) is configured to use the `unzipRouter`, which handles
 *   routes related to unzipping presentations.
 * - The `/admin` path is set up with the `adminRouter`, intended for administrative
 *   functions and endpoints.
 * 
 * This modular approach allows for easy expansion and maintenance of the application's
 * route structure. Each router can be developed and tested independently, improving
 * code organization and separation of concerns.
 *
 * @param {express.Application} app - The Express application instance to which the
 *                                    routers will be attached.
 */
const configureRoutes = (app) => {
  app.use("/", unzipRouter); 
  app.use("/admin", adminRouter); 
};

export default configureRoutes;
