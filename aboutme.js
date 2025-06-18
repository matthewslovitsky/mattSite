document.addEventListener("DOMContentLoaded", () => {
    // Typewriter effect
    const text = "SCROLL TO SEE MY EXPERIENCE";
    const target = document.getElementById("typewriter");

    if (target) {
        let index = 0;
        let isDeleting = false;

        function typeLoop() {
            if (isDeleting) {
                if (index > 1) {
                    index--;
                    target.textContent = text.substring(0, index);
                } else {
                    isDeleting = false;
                }
            } else {
                if (index < text.length) {
                    index++;
                    target.textContent = text.substring(0, index);
                } else {
                    isDeleting = true;
                    setTimeout(typeLoop, 3500);
                    return;
                }
            }

            setTimeout(typeLoop, isDeleting ? 50 : 100);
        }

        typeLoop();
    }

    // Scroll-based reveal animations (optimized for mobile)
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show-on-scroll");
                    obs.unobserve(entry.target);
                }
            });
        },
        {
            threshold: isMobile ? 0.3 : 0.1,
            rootMargin: isMobile ? "0px 0px -50px 0px" : "0px",
        }
    );

    // Observe fewer elements on mobile for performance
    const allHidden = [...document.querySelectorAll(".hidden-on-load, .container-layout")];
    const visibleTargets = isMobile ? allHidden.slice(0, 10) : allHidden;

    visibleTargets.forEach((el, index) => {
        el.style.transitionDelay = isMobile ? "0ms" : `${index * 25}ms`;
        observer.observe(el);
    });
});