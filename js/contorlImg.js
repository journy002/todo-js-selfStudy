const browseBtn = document.querySelector(".browse-btn");
const realInput = document.querySelector("#real-input");
const imgPreview = document.getElementById("imagePreview");

browseBtn.addEventListener("click", () => {
  realInput.click();
});

function readInputFile(e) {
  let sel_files = [];

  sel_file = [];
  imgPreview.remove();

  let files = e.target.files;
  let fileArr = Array.prototype.slice.call(files);
  let index = 0;

  fileArr.forEach(function (f) {
    if (!f.type.match("image/.*")) {
      alert("이미지 확장자만 가능");
      return;
    }

    if (files.length < 11) {
      sel_files.push(f);
      let reader = new FileReader(); // study
      reader.onload = function (e) {
        let html = `<a id='img_id_${index}'> <img src=${e.target.result} data-file=${f.name} /> </a>`;
        imgPreview.append(html);
        index++;
      };
      reader.readAsDataURL(f); // study
    }
  });
  if (files.length > 11) {
    alert("최대 10장까지 업로드 할 수 있습니다.");
  }
}

realInput.addEventListener("change", readInputFile);
