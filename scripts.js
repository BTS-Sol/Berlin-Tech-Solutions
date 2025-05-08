document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => observer.observe(section));

    // Mobile-Menü Toggle (optional)
    const toggleButton = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector("nav ul");

    toggleButton.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });
});
