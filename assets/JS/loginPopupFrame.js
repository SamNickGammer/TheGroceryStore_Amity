const profilePopupIFrame = document.querySelector('.profilePopupIFrame');
const userAccountImage = document.querySelector('.userAccountImage');
const overlay = document.querySelector('.overlay');
const productIFrame = document.querySelector('.productIFrame');

userAccountImage.addEventListener('click', (e) => {
  if (localStorage.getItem('userDetails')) {
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    window.location.href = `../../pages/UserProfile/index.html?username=${userDetails.email}`;
  } else {
    profilePopupIFrame.style.display = 'block';
    overlay.style.display = 'block';
    document.body.classList.add('stop-scrolling');
  }
});
