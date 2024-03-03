const AdmZip = require("adm-zip");
const fs = require("fs");
const path = require("path");
const xml2js = require("xml2js");
const fsa = require("fs").promises;
import { unzipPresentation } from "../scripts/add_presentation"; // Upewnij się, że ścieżka i nazwa pliku są poprawne

// Ścieżka do pliku .pptx
let prezentationName = "sample_1.pptx";

// Liczenie plików w katalogu slajdów
const tmpDir = `./unzipped/${prezentationName}`;

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("add_index_btn");
  button.addEventListener("click", (event) => {
    event.preventDefault(); // Zapobiega domyślnej akcji przycisku (jeśli to konieczne)
    addSlideIndex(prezentationName);
    console.log("Udało się");
  });
});

function addSlideIndex(prezentationName) {
  const slidesDir = path.join(tmpDir, "ppt/slides");
  fs.readdir(slidesDir, (err, files) => {
    if (err) {
      console.error("Error reading slides directory:", err);
      return;
    }

    // Wyświetlenie indeksu każdego slajdu
    files.map((file, index) => {
      // console.log(`Slajd ${index + 1}`);

      let prezentationIndex = document.getElementById("presentation_index");

      console.log(`An file named: ${file} with index: ${index + 1}`);

      prezentationIndex.textContent = `An file named: ${file} with index: ${
        index + 1
      }`;

      console.log(typeof file);
    });
  });
}

// addSlideIndex(prezentationName);
