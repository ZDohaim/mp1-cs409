document.addEventListener("DOMContentLoaded", () => {
  console.log("hello world");

  //Scrolling:
});

window.onscroll = function () {
  scroll();
};
function scroll() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    console.log("scroll");
    document.getElementById("sticky").style.padding = "5px";
    document.getElementById("stickyAnchor").style.padding = "5px";
    document.getElementById("sticky").style.fontSize = "13px";
  } else {
    document.getElementById("sticky").style.padding = "20px";
    document.getElementById("stickyAnchor").style.padding = "13px";
    document.getElementById("sticky").style.fontSize = "18px";
  }
}
