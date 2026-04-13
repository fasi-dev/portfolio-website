window.addEventListener("scroll", function () {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("nav a");

    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.style.color = "white";
                link.style.fontSize = "16px";

                if (link.getAttribute("href") === "#" + id) {
                    link.style.color = "#00adb5";
                    link.style.fontSize = "20px";
                }
            });
        }
    });
});