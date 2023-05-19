const OpenModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const modal = document.getElementById("modal");
const fade = document.getElementById("fade");

const toggleModal = () => {
  // funcão
  [fade, modal].forEach((el) => el.classList.toggle("hide"));
};

const array = [OpenModal, closeModal, fade];

array.forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});
