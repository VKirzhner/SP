////tabs - our services///


let ul = document.querySelector('.tabs');
ul.addEventListener('click', function (ev ){
    let data = ev.target.dataset.tab;

    document.querySelector(".active-inner")
        .classList.remove("active-inner");
    document.querySelector(".active-tab").classList.remove("active-tab");


    document.querySelector(`[data-li = ${data}]`)
        .classList.add("active-inner")

    ev.target.classList.add("active-tab")
});



////photo gallery///


const filterCards = document.querySelectorAll(".photo_card");
const photoButtons = document.querySelector(".photo_buttons");
const loadMoreBtn = document.querySelector(".load-more");
const loader = document.querySelector(".loader")

let  currFilter = "all";
let cardsNumber = 12;



function showLoader() {
    loadMoreBtn.classList.add("hide");
    loader.classList.remove("hide")
}

function hideLoader() {
    loadMoreBtn.classList.remove("hide")
    loader.classList.add("hide");

}

showCards();

loadMoreBtn.addEventListener("click", (event) => {
    event.preventDefault();


    showLoader();
    setTimeout(() => {
        cardsNumber += 12;
        hideLoader();
        showCards(currFilter);
    }, 2000);
});


photoButtons.addEventListener("click", function (event) {
    let currentBtn = document.querySelector(".photo-btn-active");
    currentBtn.classList.remove("photo-btn-active");
    event.target.classList.add("photo-btn-active");


    let filterButtons = event.target.dataset.filter;
    cardsNumber = 12;
    currFilter = filterButtons;
    showCards(filterButtons)
});


function showCards(filter = "all") {
    let j = 0;

    for (let i = 0; i < filterCards.length; i++) {
        if (
            (filterCards[i].classList.contains(filter) || filter === "all") &&
            j < cardsNumber
        ) {
            j++;
            filterCards[i].classList.remove("hide");
        } else {
            filterCards[i].classList.add("hide");
        }
    }

    if (j < cardsNumber) {
        loadMoreBtn.classList.add("hide");
    } else {
        loadMoreBtn.classList.remove("hide")
    }
}

////testimonial///


const slides = document.querySelectorAll(".slide");
const thumbnails = document.querySelectorAll(".thumbnail");
const leftArrow = document.querySelector(".left_arrow");
const rightArrow = document.querySelector(".right_arrow");


let currentSlide = 0;
let currentActive = 0;
let testimTimer;


window.onload = function () {

    function playSlide(slide) {
        for (let k = 0; k < thumbnails.length; k++) {
            slides[k].classList.remove("active");
            thumbnails[k].classList.remove("active")
        }

        if (slide < 0) {
            slide = currentSlide = slides.length - 1;
        }

        if (slide > slides.length - 1) {
            slide = currentSlide = 0;
        }

        slides[slide].classList.add("active");
        thumbnails[slide].classList.add("active");

        currentActive = currentSlide;

        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
            playSlide((currentSlide += 1));
        }, 5000);
    }

    leftArrow.addEventListener("click", function () {
        playSlide((currentSlide =+ 1));
    });

    rightArrow.addEventListener("click", function () {
        playSlide((currentSlide =- 1));
    })


    for (let l = 0; l < thumbnails.length; l++){
        thumbnails[l].addEventListener("click", function () {
            playSlide((currentSlide = Array.from(thumbnails).indexOf(this)))
        });
    }

    playSlide(currentSlide);


};

