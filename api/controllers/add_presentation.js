import AdmZip from "adm-zip";
import fs from "fs/promises";
import path from "path";


/**
  * Validation for presentationName if it's exist in "unzipped" folder
  * Atention Kacper: it could be in class as staticmethod
  * @param {string} presentationName - presentation's name.
  * @returns {Boolean} true/false as answer.
*/
async function checkIfFolderExists(presentationName) {
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


/**
  * Validation for presentationName if it's exist in "presentations" folder.
  * Atention Kacper: it could be in class as staticmethod.
  * @param {string} presentationName - presentation's name.
  * @returns {Boolean} true/false as answer.
*/
async function checkIfFileExists(presentationName) {
  try {
    const filePath = path.join("/app/presentations/", presentationName);
    const answer = await fs.stat(filePath);
    if (answer.isFile()) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}


/**
 * Validation for presentationName if it's exist in "unzipped" folder
 * Atention Kacper: it could be in class as staticmethod
 * @param {string} presentationName - presentation's name adding by user.
 * @param {object} res - The HTTP response object used to send responses to the client.
 * @returns {Promise<void>} A promise that resolves when the operation is complete. The function
 *                          itself does not return a value, but uses the `res` object to send HTTP responses.
 */


async function unzippigPresentation(presentationName, res) {
  try {
    if (await checkIfFileExists(presentationName)) {
      const pptxFilePath = path.join("/app/presentations/", presentationName); 
      const tmpDir = `/app/unzipped/${presentationName}`;

      if (!(await checkIfFolderExists(presentationName))) {
        const zip = new AdmZip(pptxFilePath);

        zip.extractAllTo(tmpDir, true);
        console.log(
          `Unzipped to ${tmpDir} presentation named: ${presentationName}`
        );
        return res
          .status(201)
          .json({ message: "Presentation unzipped successfully" });
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

// Function export.
export { unzippigPresentation };
