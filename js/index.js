// document.addEventListener("click", function (e) {
//   const targetElement = e.target;

//   if (targetElement.closest(".menu-burger")) {
//     document.documentElement.classList.toggle("menu-open");
//     e.preventDefault();
//   }
// });

// new Swiper(".hero-slider");

function scrollToTop() {
  const scrollToTopButton = document.getElementById("scroll-to-top-button");
  const scrollStep = -window.scrollY / (500 / 15); // Швидкість скролінгу (500 - час скролінгу в мілісекундах)

  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15); // Інтервал оновлення скролінгу (15 мілісекунд)
}
