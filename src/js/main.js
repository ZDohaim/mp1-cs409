let Home = 0;
let Account = 0;
let Contact = 0;
//Scrolling:
window.onscroll = function () {
  scroll();
  Indicator();
};
function scroll() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("sticky").style.padding = "5px";
    document.getElementById("stickyAnchor1").style.padding = "5px";
    document.getElementById("stickyAnchor2").style.padding = "5px";
    document.getElementById("stickyAnchor3").style.padding = "5px";
    document.getElementById("sticky").style.fontSize = "13px";
  } else {
    document.getElementById("sticky").style.padding = "20px";
    document.getElementById("stickyAnchor1").style.padding = "15px";
    document.getElementById("stickyAnchor2").style.padding = "15px";
    document.getElementById("stickyAnchor3").style.padding = "15px";
    document.getElementById("sticky").style.fontSize = "18px";
  }
}

//Indicator:
function Indicator() {
  var Scroll = document.body.scrollTop || document.documentElement.scrollTop;

  if (Scroll <= 120) {
    Home = 1;
    About = 0;
    Contact = 0;
  } else if (Scroll <= 200) {
    About = 1;
    Home = 0;
    Contact = 0;
  } else {
    Contact = 1;
    Home = 0;
    About = 0;
  }
  console.log(Scroll);
  if (Home == 1) {
    document.getElementById("stickyAnchor1").style.backgroundColor =
      "lightgray";
  } else {
    document.getElementById("stickyAnchor1").style.backgroundColor = "";
  }
  if (About == 1) {
    document.getElementById("stickyAnchor2").style.backgroundColor =
      "lightgray";
  } else {
    document.getElementById("stickyAnchor2").style.backgroundColor = "";
  }
  if (Contact == 1) {
    document.getElementById("stickyAnchor3").style.backgroundColor =
      "lightgray";
  } else {
    document.getElementById("stickyAnchor3").style.backgroundColor = "";
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

  //Smooth Scrolling:
  var anchor1 = document.getElementById("stickyAnchor1");
  var anchor2 = document.getElementById("stickyAnchor2");
  var anchor3 = document.getElementById("stickyAnchor3");

  anchor1.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  anchor2.onclick = () => {
    window.scrollTo({ top: 200, behavior: "smooth" });
  };
  anchor3.onclick = () => {
    window.scrollTo({ top: 1000, behavior: "smooth" });
  };
});
