
// Ścieżka do pliku .pptx
let presentationName = "sample_1.pptx";

// Liczenie plików w katalogu slajdów
// const tmpDir = `./unzipped/${prezentationName}`;

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("add_index_btn");
  button.addEventListener("click", (event) => {
    event.preventDefault();
    addSlideIndex(presentationName);
    console.log("Request sent to server");
  });
});


function addSlideIndex(presentationName) {
  fetch('/unzipPresentation', { // Make sure the URL is correct
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ presentationName }),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log(data.message);
    // Handle the response data here
  })
  .catch(error => {
    console.error("Error:", error);
  });
}



// function addSlideIndex(prezentationName) {
//   const slidesDir = path.join(tmpDir, "ppt/slides");
//   fs.readdir(slidesDir, (err, files) => {
//     if (err) {
//       console.error("Error reading slides directory:", err);
//       return;
//     }

//     // Wyświetlenie indeksu każdego slajdu
//     files.map((file, index) => {
//       // console.log(`Slajd ${index + 1}`);

//       let prezentationIndex = document.getElementById("presentation_index");

//       console.log(`An file named: ${file} with index: ${index + 1}`);

//       prezentationIndex.textContent = `An file named: ${file} with index: ${
//         index + 1
//       }`;

//       console.log(typeof file);
//     });
//   });
// }

// addSlideIndex(prezentationName);
