import AdmZip from "adm-zip";
import fs from "fs/promises";
import path from "path";

async function checkIfFolderExists(presentationName) {
  // This function should chceck if file added by user exist and return asnwers.
  // param :: presentationName = input from user.

  try {
    const filePath = path.join("/app/unzipped/", presentationName);
    const answer = await fs.stat(filePath);
    if (answer.isDirectory()) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

async function checkIfFileExists(presentationName) {
  // This function should chceck if file added by user exist and return asnwers.
  // param :: presentationName = input from user.

  try {
    const filePath = path.join("/app/presentations/", presentationName);
    const answer = await fs.stat(filePath);
    if (answer.isDirectory()) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

// For unzipping
async function unzippigPresentation(presentationName, res) {
  try {
    let pptxFilePath = path.join("/app/presentations/", presentationName);

    if (await checkIfFileExists(pptxFilePath)) {
      const tmpDir = `/app/unzipped/${presentationName}`;

      if (await checkIfFolderExists(presentationName)) {
        const zip = new AdmZip(pptxFilePath);

        zip.extractAllTo(tmpDir, true);
        console.log(
          `Unzipped to ${tmpDir} presentation named: ${presentationName}`
        );
        // 201 for created f.e. in db // Wysyłanie odpowiedzi JSON
        return res
          .status(201)
          .json({ message: "Presentation unzipped successfully" });
        // return true;
      } else {
        return res.status(409).json({ message: "Presentation already exist" });
      }
    } else {
      return res.status(409).json({
        message: 'Presentation does not exist in "presentations" folder.',
      });
    }
  } catch (err) {
    console.error(`An error occurred: ${err}`);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// Export function
export { unzippigPresentation };

// Wywołanie asynchronicznej funkcji
// unzipPresentation("sample_2.pptx");
