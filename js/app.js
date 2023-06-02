const btn = document.getElementById("btn");
const modal = document.getElementById("modal");
const close_btn = document.getElementById("close_btn");
const overlay = document.getElementById("overlay");

btn.addEventListener("click", addFuc);
close_btn.addEventListener("click", removFuc);
overlay.addEventListener("click", removFuc);

function removFuc() {
  modal.classList.add("hiddin");
  overlay.classList.add("hiddin");
}

function addFuc() {
  modal.classList.remove("hiddin");
  overlay.classList.remove("hiddin");
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    removFuc();
  }
});

// btn.addEventListener("click", () => {
//   modal.classList.remove("hiddin");
//   overlay.classList.remove("hiddin");
// });

// close_btn.addEventListener("click", () => {
//   modal.classList.add("hiddin");
//   overlay.classList.add("hiddin");
// });

// overlay.addEventListener("click", () => {
//   modal.classList.add("hiddin");
//   overlay.classList.add("hiddin");
// });
