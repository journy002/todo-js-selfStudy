const fileInput = document.getElementById("fileInput");
const fileBtn = document.querySelector(".file-btn");
const fileContainer = document.querySelector(".file-container");

fileBtn.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", function (e) {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  console.log(reader);
  e.target.value = "";
  reader.onload = function () {
    const photoFrame = document.createElement("div");
    photoFrame.style = `background: url(${reader.result}); background-size: cover`;
    photoFrame.className = "photoFrame";
    fileContainer.appendChild(photoFrame);
    photoFrame.addEventListener("click", () => {
      fileContainer.removeChild(photoFrame);
    });
  };
});
