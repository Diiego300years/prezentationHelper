import express from "express";
import unzipRouter from "./unzip_add.js";
import adminRouter from "./admin.js"; // Nowy import

const configureRoutes = (app) => {
  app.use("/", unzipRouter); // Główny router
  app.use("/admin", adminRouter); // Router dla /admin
};

export default configureRoutes;
