const sideBarBody = document.querySelector('.sideBarBody');
const listOfName = document.querySelector('.listOfName');
const listofitems = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

var url = new URL(window.location.href);
var catoragy = url.searchParams.get('c');
var subCatogry = url.searchParams.get('s');

console.log(catoragy, subCatogry);

sidebarData.forEach((item) => {
  if (item.nameOfHead === catoragy) {
    sideBarBody.innerHTML = `
      <div class="imageProductPageTitleImage">
        <img src="${item.imageUrl}" alt="">
    </div>
    <div class="imageProductPageTitle">
        <h3>${item.nameOfHead}</h3>
    </div>
    <div class="listOfName">
        <ul>
        ${Object.values(item.listSidebar)
          .map((value) => {
            if (value === subCatogry) {
              showDataSets(subCatogry);
              return `<li class="listSubCatorgy active">${value}</li>`;
            }
            return `<li class="listSubCatorgy">${value}</li>`;
          })
          .join('')}
        </ul>
    </div>
      `;
  }
});

const listSubCatorgy = document.querySelectorAll('.listSubCatorgy');
listSubCatorgy.forEach((item) => {
  item.addEventListener('click', (e) => {
    listSubCatorgy.forEach((item) => {
      item.classList.remove('active');
    });
    e.target.classList.add('active');
    showDataSets(item.innerHTML);
  });
});

function showDataSets(itemName) {
  const bodyFlexMain = document.querySelector('.bodyFlexMain');
  bodyFlexMain.innerHTML = `
    <div class="headingCnt">
        <h1>${itemName}</h1>
        <h5> (Showing 1 - 15 products of 123 products)</h5>
    </div>
    <div class="bodyItem">
        ${listofitems
          .map((item) => {
            return `<div class="itembodysingleItem">
            <div class="singleBodyImage">
                <img src="../../assets/image/dairy.png" alt="">
            </div>
            <div class="singleBodyTitle">
                <h5>Natureland Organics Peanut </h5>
                <div class="priceDesc">
                    <h2>₹105</h2>
                    <h3>₹125</h3>
                    <h5>16% off</h5>
                </div>
            </div>
            <div class="singleBodyButton">
                <button class="btnaddtocart">Add to Cart</button>
            </div>
        </div>`;
          })
          .join('')}
    </div>
      `;
}

// const userAccountImage = document.querySelector('.userAccountImage');
// const loginPopUpCont = document.querySelector('.loginPopUpCont');
// const loginPopupPP = document.querySelector('.loginPopupPP');

// userAccountImage.onclick = function () {
//   loginPopUpCont.style.display = 'block';
//   document.body.classList.add('stop-scrolling');
// };

// window.onclick = function (event) {
//   if (event.target == loginPopupPP) {
//     loginPopUpCont.style.display = 'none';
//     document.body.classList.remove('stop-scrolling');
//   }
// };

window.onclick = function (event) {
  if (event.target == loginPopupPP) {
    loginPopUpCont.style.display = 'none';
    document.body.classList.remove('stop-scrolling');
  }
};
