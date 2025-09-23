document.addEventListener("DOMContentLoaded", () => {
  console.log("hello world");
});
//Scrolling:
window.onscroll = function () {
  scroll();
};
function scroll() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("sticky").style.padding = "5px";
    document.getElementById("stickyAnchor").style.padding = "5px";
    document.getElementById("sticky").style.fontSize = "13px";
  } else {
    document.getElementById("sticky").style.padding = "20px";
    document.getElementById("stickyAnchor").style.padding = "13px";
    document.getElementById("sticky").style.fontSize = "18px";
  }
}
//Carousel:
let Index = 1;
showSlides(Index);

function moveSlides(n) {
  showSlides((Index += n));
}

function currentSlide(n) {
  showSlides((index = n));
}

function showSlides(n) {
  let i = 0;
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) {
    Index = 1;
  }
  if (n < 1) {
    Index = slides.length;
    console.log(Index);
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[Index - 1].style.display = "block";
}
