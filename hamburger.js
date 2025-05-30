let scrollPosition = 0;

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const body = document.body;

function openMenu() {
  scrollPosition = window.scrollY;
  body.classList.add("lock-scroll");
  body.style.top = `-${scrollPosition}px`;
  hamburger.classList.add("active");
  navMenu.classList.add("active");
}

function closeMenu() {
  body.classList.remove("lock-scroll");
  body.style.top = "";
  window.scrollTo(0, scrollPosition);
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

hamburger.addEventListener("click", () => {
  if (hamburger.classList.contains("active")) {
    closeMenu();
  } else {
    openMenu();
  }
});

document.querySelectorAll(".nav-menu .nav-item a").forEach(link => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

document.addEventListener("click", function(event) {
  const isClickInsideMenu = navMenu.contains(event.target);
  const isClickOnHamburger = hamburger.contains(event.target);

  if (!isClickInsideMenu && !isClickOnHamburger && hamburger.classList.contains("active")) {
    closeMenu();
  }
});
