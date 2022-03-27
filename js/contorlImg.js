const fileInput = document.getElementById("fileInput");
const fileUpload = document.querySelector(".fileUpload");

fileUpload.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", function (e) {
  let file = e.target.files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);
  console.log(reader);
  reader.onload = function () {
    let photoFrame = document.createElement("div");
    photoFrame.style = `background: url(${reader.result}); background-size: cover`;
    photoFrame.className = "photoFrame";
    document.getElementById("pictures").appendChild(photoFrame);
  };
});
