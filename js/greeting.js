const input = document.querySelector(".greeting-input");
const greetingBox = document.querySelector(".greeting");

function handleInput(e) {
  const value = e.target.value;
  input.classList.add("hide");
  greetingBox.innerHTML = `Hello ${value} !`;
}

input.addEventListener("change", handleInput);
