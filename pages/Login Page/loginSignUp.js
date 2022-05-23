const loginSignUpBtn = document.querySelector('#loginBtn');
const emailField = document.querySelector('#emailField');
const nameField = document.querySelector('#nameField');
const phoneField = document.querySelector('#phoneField');
const passwordField = document.querySelector('#passwordField');
const newAccBtn = document.querySelector('#newAccBtn');
const loginTxt = document.querySelector('#loginTxt');

newAccBtn.addEventListener('click', () => {
  if (loginSignUpBtn.textContent == 'Login') {
    showElem(nameField);
    showElem(phoneField);
    hideElem(emailField);
    loginSignUpBtn.innerHTML = 'Signup';
    newAccBtn.innerHTML = 'Already have an account? Login.';
    loginTxt.innerHTML = 'Signup';
  } else {
    hideElem(nameField);
    hideElem(phoneField);
    showElem(emailField);
    loginSignUpBtn.innerHTML = 'Login';
    newAccBtn.innerHTML = 'New here? Create an account.';
    loginTxt.innerHTML = 'Login';
  }
});

function showElem(elem) {
  elem.style.display = 'block';
  elem.previousSibling.previousSibling.style.display = 'block';
}

function hideElem(elem) {
  elem.style.display = 'none';
  elem.previousSibling.previousSibling.style.display = 'none';
}

const formSUbmit = document.querySelector('.formSUbmit');
formSUbmit.addEventListener('submit', (e) => {
  e.preventDefault();
  localStorage.setItem(
    'userDetails',
    JSON.stringify({
      email: emailField.value,
      password: passwordField.value,
    })
  );
  console.log(emailField.value, passwordField.value);
});
