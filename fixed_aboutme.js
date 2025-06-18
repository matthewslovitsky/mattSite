
document.addEventListener("DOMContentLoaded", () => {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) return; // Skip all JS for mobile to prevent Safari crashes

    // Scroll Animation Observer (desktop only)
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-on-scroll");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    const hiddenElements = document.querySelectorAll(".hidden-on-load, .container-layout");
    hiddenElements.forEach((el, index) => {
        el.style.opacity = "0";
        el.style.transition = "opacity 0.6s ease-out";
        observer.observe(el);
    });

    // Typewriter (desktop only)
    const target = document.getElementById("typewriter");
    if (target) {
        const text = "SCROLL TO SEE MY EXPERIENCE";
        let index = 0;

        const typeStep = () => {
            if (index <= text.length) {
                target.textContent = text.slice(0, index++);
                setTimeout(typeStep, 80);
            }
        };

        typeStep();
    }
});
