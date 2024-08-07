
document.addEventListener('DOMContentLoaded', () => {

const button = document.querySelector('.view-img-button');
const closeButton = document.querySelector('.close-button')
let imgOriginal = document.querySelector('.image');
let imgLarge = document.querySelector('.img-large')
let imageLargeDiv = document.querySelector('.view-img-div');
let body = document.querySelector('.body')


button.addEventListener('click', () => {

    let imgSource = imgOriginal.getAttribute('src');
    imgLarge.setAttribute('src', imgSource);
    imageLargeDiv.style.display = 'flex';
    imageLargeDiv.style.backdropFilter = 'blur(6px)'
    closeButton.style.display = 'block';


});

closeButton.addEventListener('click', () => {
    imageLargeDiv.style.display = 'none';
    closeButton.style.display = 'none';
})

});