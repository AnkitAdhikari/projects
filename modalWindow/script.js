// selecting image tag
const openModelHTML = document.querySelector(".html-img");
const openModelCSS = document.querySelector(".css-img");
const openModelJS = document.querySelector(".js-img");
// selecting overlay
const overlay = document.querySelector(".overlay");
// selecting respective image textbox
const textBox_HTML = document.querySelector(".html-info-textbox");
const textBox_CSS = document.querySelector(".css-info-textbox");
const textBox_JS = document.querySelector(".js-info-textbox");
// selecting all cross/close btn
const closeModel = document.querySelectorAll(".close-btn");
// selecting all language/image
const openModel = document.querySelectorAll(".img");

function showOverlay() {
  overlay.classList.remove("hidden");
}
function hideOverlay() {
  overlay.classList.add("hidden");
}

openModelHTML.addEventListener("click", () => {
  textBox_HTML.classList.remove("hidden");
  showOverlay();
});
openModelCSS.addEventListener("click", () => {
  textBox_CSS.classList.remove("hidden");
  showOverlay();
});
openModelJS.addEventListener("click", () => {
  textBox_JS.classList.remove("hidden");
  showOverlay();
});

function removeModuleWindow() {
  if (!textBox_HTML.classList.contains("hidden"))
    textBox_HTML.classList.add("hidden");
  if (!textBox_CSS.classList.contains("hidden"))
    textBox_CSS.classList.add("hidden");
  if (!textBox_JS.classList.contains("hidden"))
    textBox_JS.classList.add("hidden");
}

for (let i of closeModel) {
  i.addEventListener("click", hideOverlay);
  i.addEventListener("click", removeModuleWindow);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!textBox_HTML.classList.contains("hidden")) {
      textBox_HTML.classList.add("hidden");
    }
    if (!textBox_CSS.classList.contains("hidden")) {
      textBox_CSS.classList.add("hidden");
    }
    if (!textBox_JS.classList.contains("hidden")) {
      textBox_JS.classList.add("hidden");
    }
    hideOverlay();
  }
});
