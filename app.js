// app.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import configureRoutes from "./routes/index.js"; // Załóżmy, że ten plik koordynuje wszystkie routery

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

// Ustawienie statycznych ścieżek dla Express
app.use(express.static(path.join(__dirname, "public")));

// Konfiguracja i użycie routerów
configureRoutes(app);

app.listen(port, () => {
  console.log(`Aplikacja nasłuchuje na porcie ${port}`);
});
