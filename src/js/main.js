//Scrolling:
window.onscroll = function () {
  scroll();
  Indicator();
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
//Indicator:
function Indicator() {
  var Scoll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
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

// Modal:
document.addEventListener("DOMContentLoaded", () => {
  var modal1 = document.getElementById("Modal1");
  var button1 = document.getElementById("Button1");
  var modal2 = document.getElementById("Modal2");
  var button2 = document.getElementById("Button2");
  var modal3 = document.getElementById("Modal3");
  var button3 = document.getElementById("Button3");
  var close1 = document.getElementsByClassName("close1")[0];
  var close2 = document.getElementsByClassName("close2")[0];
  var close3 = document.getElementsByClassName("close3")[0];
  button1.onclick = () => {
    modal1.style.display = "block";
  };

  close1.onclick = () => {
    modal1.style.display = "none";
    console.log("clicked");
  };

  button2.onclick = () => {
    modal2.style.display = "block";
  };

  close2.onclick = () => {
    modal2.style.display = "none";
  };

  button3.onclick = () => {
    modal3.style.display = "block";
  };

  close3.onclick = () => {
    modal3.style.display = "none";
  };
});
