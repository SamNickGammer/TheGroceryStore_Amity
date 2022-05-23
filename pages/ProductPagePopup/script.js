ratingStars = document.querySelectorAll('.ratingStars');
ratingMask = document.querySelector('#ratingMask');
function setRating(n){
    rating = 5-n;
    console.log(rating*26.6);
    ratingMask.style.width = (rating*26.6) + "px";
    ratingMask.style.left = (752 + (133 -  rating*26.6)) + "px";
    document.querySelector("body > div > div > div.bodyContainer > div > div.productPageContainer > div.productPagePopup > div.productDetailsContainer > div.ratingRow > span.ratingRowBox").innerHTML = n + "★";
}

setRating(4.4)
