// Module that checks if all of the form controls have been properly inputted

const form = document.querySelector('form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#passwordConfirm');

const errorMessage = document.querySelector('.error');

function checkErr(object) {
  if (object.validity.valid) {
    errorMessage.textContent = '';
    errorMessage.className = 'error';
  } else {
    errorMessage.className = 'error active';
    errorMessage.textContent = `The field ${object.id} has not been filled in correctly.`;
  }
}

email.addEventListener('input', () => { checkErr(email); });
password.addEventListener('input', () => { checkErr(password); });
