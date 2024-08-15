
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav .right');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scroll animation for job listing clicks
document.querySelectorAll('.job-listing').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add('animate');
        setTimeout(() => {
            item.classList.remove('animate');
        }, 300);
    });
});

document.querySelectorAll('.copy-link-btn').forEach(button => {
button.addEventListener('click', (e) => {
e.preventDefault();
const link = button.closest('.job-listing').querySelector('.apply-btn').href;
navigator.clipboard.writeText(link).then(() => {
    alert('Link copied to clipboard!');
});
});
});
