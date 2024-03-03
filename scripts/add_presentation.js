const AdmZip = require("adm-zip");
const { response } = require("express");
const fs = require("fs");
const path = require("path");
const xml2js = require("xml2js");
const fsa = require("fs").promises;

// This funciton is checking if directory exist.
export async function checkIfDirectoryExists(presentationName) {
  const dirPath = path.join("./unzipped", presentationName);

  try {
    await fsa.access(dirPath);
    return true;
  } catch (error) {
    return false;
  }
}

// This function return unzipped prezentation.
async function unzipPrezentation(prezentationName) {
  let pptxFilePath = `./presentations/${prezentationName}`;

  // Otwarcie pliku .pptx jako archiwum ZIP
  const zip = new AdmZip(pptxFilePath);

  // Wypakowanie zawartości do katalogu z nazwą prezentacji.
  const tmpDir = `./unzipped/${prezentationName}`;

  // Użycie await, aby poczekać na wynik sprawdzenia istnienia folderu
  if (await checkIfDirectoryExists(prezentationName)) {
    let my_response = "This folder exist!";
    console.log(my_response);
    // return my_response; // Zakończenie funkcji, jeśli folder istnieje
    return;
  } else {
    try {
      zip.extractAllTo(tmpDir, true);
      // Opcjonalnie: Usuwanie tymczasowego katalogu po zakończeniu
      // fs.rmdirSync(tmpDir, { recursive: true });
      console.log(
        `Unzipped to ${tmpDir} presentation named: ${prezentationName}`
      );
    } catch (err) {
      console.log(
        `In file ${path.basename(__filename)} an error occurred: ${err}`
      );
    }
  }
}

// Export function
module.exports.unzipPrezentation = unzipPrezentation;

// Wywołanie asynchronicznej funkcji
// unzipPrezentation("sample_2.pptx");
