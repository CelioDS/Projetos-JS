const form = document.getElementById("name-form");
const welcontainer = document.getElementById("welcome");
const logout = document.getElementById("logout");
//localStorage.clear()

function checkUser() {
  const nameStorage = localStorage.getItem("name");

  if (nameStorage) {
    form.style.display = "none";
    welcontainer.style.display = "block";

    const nameSpan = document.getElementById("username");
    nameSpan.textContent = nameStorage;
  } else {
    form.style.display = "block";
    welcontainer.style.display = "none";
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameInput = document.getElementById("name").value;
  localStorage.setItem("name", nameInput);

  nameInput.value = "";
  checkUser();
});

logout.addEventListener("click", function () {
  localStorage.removeItem("name");
  form.style.display = "block";
  checkUser();
});

//aplication Start
checkUser();
