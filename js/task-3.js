const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", function () {
  let name = inputEl.value.trim();
  if (name === "") {
    spanEl.textContent = "Anonymous";
  } else {
    spanEl.textContent = name;
  }
});