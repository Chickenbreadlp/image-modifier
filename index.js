const fs = require('fs');
const Jimp = require('jimp');

// Manages Image Seperation and Scaling for the specified file
async function handleFile(imgName) {
  return Jimp.read('./in/' + imgName)
    .then(img => {
      return img
        .brightness(.5)
        .contrast(.6)
        .write('./out/' + imgName);
    })
    .catch(err => {
      console.error(err);
    });
}

// Get's an Array of all Input-Files
var allFiles = fs.readdirSync('./in');
// Goes through one File at a time
(async () => {
  for (var i = 0; i < allFiles.length; i++) {
    if (allFiles[i] !== '#PLACEHOLDER') {
      console.log('Working on ' + allFiles[i]);
      await handleFile(allFiles[i])
    }
  }
})().catch((err) => {
  console.log(err);
})
