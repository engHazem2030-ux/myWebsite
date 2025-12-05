// ---------------------- Mobile Navigation Toggle ----------------------
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    const toggleMenu = (e) => {
        e.preventDefault(); // يمنع أي glitch في الموبايل
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    };

    // تشغيل القائمة بالضغط أو اللمس
    hamburger.addEventListener('click', toggleMenu);
    hamburger.addEventListener('touchstart', toggleMenu);

    // إغلاق القائمة عند الضغط على أي لينك
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// ---------------------- Active Navigation Link ----------------------
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ---------------------- Scroll Animation ----------------------
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
};

// ---------------------- On Load & Scroll ----------------------
window.addEventListener('load', () => {
    setActiveNavLink();
    fadeInOnScroll();
});
window.addEventListener('scroll', fadeInOnScroll);

// ---------------------- Header background on scroll ----------------------
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
        } else {
            header.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
        }
    }
});

// ---------------------- Animate progress bars ----------------------
const progressBars = document.querySelectorAll('.progress-bar');

const animateProgressBars = () => {
    progressBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        const barVisible = 150;
        
        if (barTop < window.innerHeight - barVisible) {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        }
    });
};

window.addEventListener('scroll', animateProgressBars);
