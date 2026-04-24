// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Simple Button Click Animation
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
    btn.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.95)';
    });
    btn.addEventListener('mouseup', function() {
        this.style.transform = 'scale(1.05)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

// Testimonial Slider Data
const testimonials = [
    {
        text: '"My edges were gone after years of tight braiding. The Growth Booster brought them back in 6 weeks!"',
        author: "- Ama, Accra"
    },
    {
        text: '"I love how the Honey Shampoo makes my 4C hair so soft and easy to detangle. Best product in Ghana!"',
        author: "- Efua, Kumasi"
    },
    {
        text: '"Finally found a solution for my itchy scalp. The herbal ingredients are pure magic."',
        author: "- Akosua, Tema"
    }
];

let currentTestimonial = 0;
const testimonialBox = document.querySelector('.testimonial-item');

function updateTestimonial() {
    testimonialBox.style.opacity = 0;
    
    setTimeout(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonialBox.innerHTML = `
            <p>${testimonials[currentTestimonial].text}</p>
            <span>${testimonials[currentTestimonial].author}</span>
        `;
        testimonialBox.style.opacity = 1;
    }, 500);
}

// Rotate testimonial every 5 seconds
setInterval(updateTestimonial, 5000);

// Smooth Scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});