// var urlvar = 'http://127.0.0.1:5500/index.html?ar=12';
// var url = new URL(urlvar);
// var params = new URLSearchParams(url.search);
// var ar = params.get('ar');
// console.log(ar);

/*Model.............. */
var modal = document.getElementById('cartModel');
var btn = document.querySelector('.cartImage');
var closeBtn = document.querySelector('.closeModelCart');
btn.onclick = function () {
  modal.style.display = 'block';
  document.body.classList.add('stop-scrolling');
};
closeBtn.onclick = function () {
  modal.style.display = 'none';
  document.body.classList.remove('stop-scrolling');
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    document.body.classList.remove('stop-scrolling');
  }
};
