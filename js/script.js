///////////////
///////////////////
/////////////////
//////////////
//to show color small line on nav
// let el = document.querySelector(".scroll");
// let height =
//   document.documentElement.scrollHeight - document.documentElement.clientHeight;

// window.addEventListener("scroll", () => {
//   let scroller = document.documentElement.scrollTop;
//   el.style.width = `${(scroller / height) * 100}%`;
// });
////////////////////////////////////

//create scroll to top button
// let btn = document.querySelector("button");
// window.addEventListener("scroll", () => {
//   if (window.scrollY >= 500) {
//     btn.style.display = "block";
//   } else {
//     btn.style.display = "none";
//   }
// });
// // //click scroll to top
// btn.addEventListener("click", () => {
//   window.scrollTo({
//     left: 0,
//     top: 0,
//     behavior: "smooth",
//   });
// });
//////////////////////////////////////////////////////////////////
// slider//
// get slider item Array.from()<= es6
let sliderImages = Array.from(document.querySelectorAll(".img-container img"));

//number of slides
let slidesCount = sliderImages.length;

//index of start slide == lets start
let startSlides = 1;

//slide number element
let slideNumberElement = document.getElementById("slide-number"); //slide number

//prev and next buttons
let nextBtn = document.getElementById("next");

let prevBtn = document.getElementById("prev");

//Handle click on previous and next Buttons
nextBtn.onclick = nextSlide;
prevBtn.onclick = preSlide;

//create the main ul Elements
let ulElement = document.createElement("ul");

//set ID in created Ul elements
ulElement.setAttribute("id", "pagination-ul");

//create li ==slides count
for (let i = 1; i <= slidesCount; i++) {
  //create li

  let liElement = document.createElement("li");

  //create custom attribute
  liElement.setAttribute("data-index", i);

  //set li content
  liElement.appendChild(document.createTextNode(i));

  //append li to ul
  ulElement.appendChild(liElement);
}

//add ul to page
document.getElementById("indicators").appendChild(ulElement);

//get new created new ul
let paginationCreatedUl = document.getElementById("pagination-ul");

// get pagination item Array.from()<= es6
let paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

//loop through all bullets item
for (let i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = function () {
    startSlides = parent(this.getAttribute("data-index"));
  };
}

//trigger checker f
checker();

//function next slid
function nextSlide() {
  if (nextBtn.classList.contains("disabled")) {
    return false;
  } else {
    startSlides++;
    checker();
  }
}
//function previous slid
function preSlide() {
  if (prevBtn.classList.contains("disabled")) {
    return false;
  } else {
    startSlides--;
    checker();
  }
}

//create the checker function
function checker() {
  //set the slider Number
  slideNumberElement.textContent =
    "slide # " + startSlides + "of" + slidesCount;

  // remove all active classes from images and bullets

  //set active class on current slide
  sliderImages[startSlides - 1].classList.add("active");

  //set active on ul element
  paginationCreatedUl.children[startSlides - 1].classList.add("active");

  //check if current slide is the first
  if (startSlides == 1) {
    //add disabled class on previous btn
    prevBtn.classList.add("disabled");
  } else {
    //remove disabled class from previous btn
    prevBtn.classList.remove("disabled");
  }

  //check if current slide is the last
  if (startSlides == slidesCount) {
    //add disabled class on next btn
    nextBtn.classList.add("disabled");
  } else {
    //remove disabled class from nextBtn btn
    nextBtn.classList.remove("disabled");
  }

  // function remove all active classes from images and bullets
  function removeAllActive() {
    //loop through images
    sliderImages.forEach(function (img) {
      img.classList.remove("active");
    });

    //loop through pagination bullets
    paginationBullets.forEach(function (bullet) {
      bullet.classList.remove("active");
    });
  }
}
