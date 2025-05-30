// Vanilla JavaScript
window.addEventListener('load', function () {
  setTimeout(function () {
    document.getElementById('loading').classList.add('hide');
  }, 0); // 2000 milliseconds = 2 seconds
});

$(document).ready(function() {
  // Smooth scrolling for anchor links in the navigation menu
  $('.nav-menu-og a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
      const hash = this.hash;
      const targetOffset = $(hash).offset().top - $('header').outerHeight(); // Adjusted for fixed header
      const currentPosition = $(window).scrollTop();
      const distance = Math.abs(currentPosition - targetOffset);
      const duration = Math.min(500, distance); // Adjust the duration based on the distance
      $('html, body').animate({
        scrollTop: targetOffset
      }, duration);
    }
  });
});

/////////////////

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll behavior for anchor links with existing classes
    const links = document.querySelectorAll('.nav-menu a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

        sections.forEach(section => {
        observer.observe(section);
    });
});

//header section identifier

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-menu a, .nav-menu-og a");

    function onScroll() {
      let currentSectionId = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const triggerLine = window.innerHeight - 275; // 50px from bottom
        if (rect.top <= triggerLine && rect.bottom >= triggerLine) {
          currentSectionId = section.id;
        }
      });

      if (currentSectionId) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${currentSectionId}`) {
            link.classList.add("active");
          }
        });
      }
    }

    window.addEventListener("scroll", onScroll);
    onScroll(); // trigger on load
  });