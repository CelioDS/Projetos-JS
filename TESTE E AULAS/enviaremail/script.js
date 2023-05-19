const nome = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

nome.addEventListener('blur', valName);
email.addEventListener('blur', valEmail);
phone.addEventListener('blur', valPhone);

function valName() {
  const re = /^[a-zA-Z]{2,20}$/;
  if(!re.test(nome.value)) {
    nome.classList.add('is-invalid');
  } else {
    nome.classList.remove('is-invalid');
  }
}

function valEmail() {
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if(!re.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

function valPhone() {
  const re = /^[0-9\-\+]{9,15}$/;
  if(!re.test(phone.value)) {
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}

