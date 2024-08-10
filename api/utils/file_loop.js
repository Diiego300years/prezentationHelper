const AdmZip = require("adm-zip");
const fs = require("fs");
const path = require("path");
const xml2js = require("xml2js");

// Kolejna funkcja odpowiada za obsługję pliku XML (slajdu)

// Ścieżka do katalogu z rozpakowanymi slajdami
const openSlidesDir = path.join("./tmp_extracted", "ppt/slides");

// Funkcja do odczytania i wyświetlenia zawartości pliku XML slajdu
function displaySlideContent(slidePath) {
  fs.readFile(slidePath, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading slide file: ${slidePath}`, err);
      return;
    }

    // Użyj xml2js do przekształcenia XML na obiekt JavaScript
    xml2js.parseString(data, (err, result) => {
      if (err) {
        console.error("Error parsing XML", err);
        return;
      }

      console.log(`Zawartość ${slidePath}:`);
      console.log(result); // Wyświetla przekształconą zawartość XML jako obiekt JavaScript
      console.log(typeof result); // Powinno wyświetlić 'object'
    });
  });
}

const slidePathh = path.join("./tmp_extracted", "ppt/slides", "slide1.xml");
displaySlideContent(slidePathh);
