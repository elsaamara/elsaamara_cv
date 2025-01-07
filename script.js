// Animasi sederhana untuk skill items
document.addEventListener('DOMContentLoaded', function() {
    // Animasi untuk skill levels
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(level => {
        const percentage = level.getAttribute('data-level');
        setTimeout(() => {
            level.style.width = `${percentage}%`;
        }, 300);
    });

    // Animasi untuk timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    timelineItems.forEach(item => {
        observer.observe(item);
        item.classList.add('fade-in');
    });

    // Hover effect untuk contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('hover');
        });
        item.addEventListener('mouseleave', () => {
            item.classList.remove('hover');
        });
    });
});

// Tambahkan class untuk animasi
document.querySelectorAll('.skill-item, .timeline-item').forEach(item => {
    item.classList.add('animate-on-scroll');
});

// Menambahkan tahun otomatis pada pengalaman kerja
const currentYear = new Date().getFullYear();
const experienceYears = document.querySelector('.exp-item p');
if (experienceYears) {
    experienceYears.textContent = `2022 - ${currentYear}`;
} 