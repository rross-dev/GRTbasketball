let scrollPosition = 0;
let scrollY = 0;

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const body = document.body;

function openMenu() {
  scrollY = window.scrollY;

  document.body.style.top = `-${scrollY}px`;
  document.documentElement.classList.add("lock-scroll");
  document.body.classList.add("lock-scroll");

  hamburger.classList.add("active");
  navMenu.classList.add("active");
  overlay.classList.add("active");
}


function closeMenu() {
  document.documentElement.classList.remove("lock-scroll");
  document.body.classList.remove("lock-scroll");

  document.body.style.top = "";
  window.scrollTo(0, scrollY); // Restore the scroll position

  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  overlay.classList.remove("active");
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
