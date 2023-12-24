const express = require("express");
const app = express();
const { exec } = require("child_process");

function runPythonScript(inputDirectory, outputDirectory) {
  exec(
    `/usr/bin/python3 ./text_extraction.py ${inputDirectory} ${outputDirectory}`,
    (error, stdout, stderr) => {
      // Handling code
    }
  );
}

const pdfDirectory = "./text";
const outputDirectory = "./2.text";

runPythonScript(pdfDirectory, outputDirectory);

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
