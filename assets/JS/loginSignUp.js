const loginSignUpBtn = document.querySelector('#loginBtn');
const nameField = document.querySelector('#nameField');
const phoneField = document.querySelector('#phoneField');
const passwordField = document.querySelector('#passwordField');
const newAccBtn = document.querySelector('#newAccBtn');
const loginTxt = document.querySelector('#loginTxt');

newAccBtn.addEventListener('click', () => {
  if (loginSignUpBtn.textContent == 'Login') {
    showElem(nameField);
    loginSignUpBtn.innerHTML = 'Signup';
    newAccBtn.innerHTML = 'Already have an account? Login.';
    loginTxt.innerHTML = 'Signup';
  } else {
    hideElem(nameField);

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

const userAccountImage = document.querySelector('.userAccountImage');
const loginPopUpCont = document.querySelector('.loginPopUpCont');
const loginPopupPP = document.querySelector('.loginPopupPP');

userAccountImage.onclick = function () {
  if (localStorage.getItem('userDetails')) {
    alert('logindone');
  } else {
    loginPopUpCont.style.display = 'block';
    document.body.classList.add('stop-scrolling');
  }
};

function submitHandller() {
  localStorage.setItem(
    'userDetails',
    JSON.stringify({
      name: nameField.value,
      phone: phoneField.value,
      password: passwordField.value,
    })
  );
  loginPopUpCont.style.display = 'none';
}
