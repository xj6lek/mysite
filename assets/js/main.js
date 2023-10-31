var sobremimSection = document.querySelector(".sobremim");
var articlesSection = document.querySelector(".articles");

window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        sobremimSection.classList.add("solid-bg");
        articlesSection.classList.add("solid-bg");
    } else {
        sobremimSection.classList.remove("solid-bg");
        articlesSection.classList.remove("solid-bg");
    }
});

function toggleMenu() {
  var navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}