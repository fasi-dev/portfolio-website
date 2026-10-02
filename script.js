// ============================================================
// Portfolio — navigation interactivity
// ============================================================

// Mobile menu toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen);
});

// Close the mobile menu when a link is clicked
navMenu.querySelectorAll(".nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
    });
});

// Scroll-spy: highlight the nav link of the section in view
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function () {
    const top = window.scrollY;

    sections.forEach(function (section) {
        const offset = section.offsetTop - 120;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(function (link) {
                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === "#" + id
                );
            });
        }
    });
});

// Keep the footer year current
document.getElementById("year").textContent = new Date().getFullYear();
