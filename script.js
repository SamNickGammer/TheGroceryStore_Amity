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

const itemDetails = document.querySelector('.itemDetails');
const payButton = document.querySelector('.payButton');
const billDetails = document.querySelector('.billDetails');

if (itemList.length > 0) {
  payButton.disabled = false;
  billDetails.style.display = 'block';
  itemList.forEach((item) => {
    itemDetails.innerHTML += `
    <div class="singleItemDetails">
        <div class="singleProdCont">
            <div class="imageProd">
                <img src="${item.image}" alt="">
            </div>
            <div class="prodDesc">
                <h3>${item.name}</h3>
                <div class="priceDesc">
                    <h2>${item.price}</h2>
                    <h3>${item.discountAmount}</h3>
                    <h5>${item.discountPer} off</h5>
                </div>
                <p>${item.quantity} kg</p>
                <div class="amountCont">
                    <div class="amountBtn">
                        <span>-</span>
                    </div>
                    <div class="amount">
                        <span>1</span>
                    </div>
                    <div class="amountBtn">
                        <span>+</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
  });
} else {
  itemDetails.innerHTML = '<h2>No items in cart</h2>';
  payButton.ddisabled = true;
  billDetails.style.display = 'none';
}

const sideBarList = document.querySelector('.sideBarList');

sidebarData.forEach((item) => {
  sideBarList.innerHTML += `
  <li class="liDropdown">
  <span>${item.nameOfHead}</span>
  <div class="dropdownCont">
      <ul>
         ${Object.values(item.listSidebar)
           .map((value) => {
             return `<li class="listItemSideBarcont">${value}</li>`;
           })
           .join('')}
      </ul>
  </div>
  </li>
`;
});

const listItemSideBarcont = document.querySelectorAll('.listItemSideBarcont');
listItemSideBarcont.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    console.log(
      e.target.innerText,
      item.parentElement.parentElement.parentElement.firstElementChild.innerText
    );
    window.location.href = `./pages/ShopingListPage/index.html?c=${item.parentElement.parentElement.parentElement.firstElementChild.innerText}&s=${e.target.innerText}`;
  });
});

window.onclick = function (event) {
  console.log(event.target);
  if (event.target === overlay) {
    profilePopupIFrame.style.display = 'none';
    overlay.style.display = 'none';
    document.body.classList.remove('stop-scrolling');
  }
};
