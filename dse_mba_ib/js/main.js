document.addEventListener("DOMContentLoaded", () => {
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({ once: true });
    }

    // Nav Scroll
    const nav = document.querySelector('.navbar');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 60) nav.classList.add('scrolled');
            else nav.classList.remove('scrolled');
        });
    }

    // Mobile Menu
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            mobileMenu.classList.toggle('active');
        });
    }

    // Counters
    const counters = document.querySelectorAll('.stat-val .count');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000; 
        const increment = target / (duration / 50);
        let current = 0;
        
        const updateCounter = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.innerText = target;
                clearInterval(updateCounter);
            } else {
                counter.innerText = Math.ceil(current);
            }
        }, 50);
    });

    // Custom Interactive Placement Chart
    const chartBars = document.querySelectorAll('.chart-bar-fill');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const height = entry.target.getAttribute('data-target-height');
                entry.target.style.height = height;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    chartBars.forEach(bar => observer.observe(bar));
});
