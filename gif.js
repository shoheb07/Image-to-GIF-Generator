const imageUpload = document.getElementById("imageUpload");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const preview = document.getElementById("preview");
const delayInput = document.getElementById("delay");

let gifBlob = null;

generateBtn.addEventListener("click", () => {
  const files = imageUpload.files;
  const delay = parseInt(delayInput.value);

  if (files.length === 0) {
    alert("Please upload at least one image.");
    return;
  }

  preview.innerHTML = "Generating GIF... Please wait.";

  const gif = new GIF({
    workers: 2,
    quality: 10,
    workerScript: "https://cdnjs.cloudflare.com/ajax/libs/gif.js/0.2.0/gif.worker.js"
  });

  Array.from(files).forEach(file => {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = new Image();
      img.src = e.target.result;
      img.onload = function() {
        gif.addFrame(img, { delay: delay });
        if (Array.from(files).indexOf(file) === files.length - 1) {
          gif.render();
        }
      };
    };
    reader.readAsDataURL(file);
  });

  gif.on("finished", function(blob) {
    gifBlob = blob;
    const url = URL.createObjectURL(blob);
    preview.innerHTML = `<img src="${url}">`;
    downloadBtn.disabled = false;
  });
});

downloadBtn.addEventListener("click", () => {
  if (!gifBlob) return;

  const link = document.createElement("a");
  link.href = URL.createObjectURL(gifBlob);
  link.download = "generated.gif";
  link.click();
});
