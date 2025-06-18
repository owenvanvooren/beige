// beige - a tech company for humans
// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    
        // Close mobile menu when a nav link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.feature, .product, .team-member');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('revealed');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    
    // Initial check
    revealOnScroll();
    
    // Additional form enhancement
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        // Add loading state to submit button when form is submitted
        contactForm.addEventListener('submit', (e) => {
            // Make sure email reply-to is set
            const emailInput = document.getElementById('email');
            const replyToInput = document.querySelector('input[name="_replyto"]');
            if (emailInput && replyToInput) {
                replyToInput.value = emailInput.value;
            }
            
            const submitBtn = contactForm.querySelector('.submit-btn');
            if (submitBtn) {
                submitBtn.innerHTML = 'sending...';
                submitBtn.disabled = true;
                submitBtn.classList.add('submitting');
            }
        });
    }
    
    // Add any additional interactive elements or animations here
}); 