const openModelAll = document.querySelectorAll(".textbox");
const openModelHTML = document.querySelector(".html-img");
const overlay = document.querySelector(".overlay");
const textBox_HTML = document.querySelector(".html-info-textbox");
const closeModel = document.querySelector(".close-btn");

openModelHTML.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  textBox_HTML.classList.remove("hidden");
});

function removeModuleWindow() {
  overlay.classList.add("hidden");
  textBox_HTML.classList.add("hidden");
}

closeModel.addEventListener("click", removeModuleWindow);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    removeModuleWindow();
  }
});
