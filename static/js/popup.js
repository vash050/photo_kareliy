const burger = document.getElementsByClassName('burger');
const popup = document.querySelector('.popup')
const elementX = document.getElementsByClassName('popup__close');

let viewPopup = false;

elementX[0].addEventListener('click', function (e) {
    const burger2 = document.getElementsByClassName('ham2');
    burger2[0].classList.remove('active');
    popupClose();
})

burger[0].addEventListener("click", function (e) {
    if (viewPopup === false) {
        popupOpen();
    } else {
        popupClose();
    }
})

function popupOpen() {
    popup.classList.add('open');
    viewPopup = true;
}

function popupClose() {
    popup.classList.remove('open');
    viewPopup = false;
}
