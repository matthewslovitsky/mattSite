document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-on-scroll');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        threshold: 0.1
    });

    const hiddenElements = document.querySelectorAll('.hidden-on-load, .container-layout');
    hiddenElements.forEach((el, index) => {
        el.style.transitionDelay = `${index * 25}ms`;
        el.classList.add('hidden-on-load');
        observer.observe(el);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const text = "SCROLL TO SEE MY EXPERIENCE";
    const target = document.getElementById("typewriter");

    let index = 0;
    let isDeleting = false;

    function typeLoop() {
        if (isDeleting) {
            if (index > 0) {
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
                setTimeout(typeLoop, 1500); // pause at full text
                return;
            }
        }

        setTimeout(typeLoop, isDeleting ? 50 : 100);
    }

    typeLoop();
});