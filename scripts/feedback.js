// Character counter for comments
const commentsTextarea = document.getElementById('comments');
const charCount = document.getElementById('char-count');

commentsTextarea.addEventListener('input', function() {
    charCount.textContent = this.value.length;
    if (this.value.length > 500) {
        this.value = this.value.slice(0, 500);
        charCount.textContent = 500;
    }
});

// Emoji rating functionality
const emojiButtons = document.querySelectorAll('.emoji-btn');
emojiButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        emojiButtons.forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
    });
});

// Form submission handling
const feedbackForm = document.querySelector('.feedback-form');
const submitBtn = document.querySelector('.submit-btn');

feedbackForm.addEventListener('submit', function(e) {
    e.preventDefault();
    submitBtn.disabled = true;

    // Validate required fields
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!fullName || !validateEmail(email)) {
        showNotification('Please fill in all required fields with valid information.', 'error');
        submitBtn.disabled = false;
        return;
    }

    // Collect form data
    const formData = new FormData(feedbackForm);
    const services = formData.getAll('services'); // Get all checked services

    // Simulate form submission
    setTimeout(() => {
        showNotification('Thank you for your feedback! We will review it soon.', 'success');
        feedbackForm.reset();
        emojiButtons.forEach(btn => btn.classList.remove('selected'));
        charCount.textContent = '0';
        requiredInputs.forEach(input => input.classList.remove('valid', 'invalid'));
        submitBtn.disabled = false;
    }, 1000);
});

// Real-time validation
const requiredInputs = document.querySelectorAll('input[required]');
requiredInputs.forEach(input => {
    input.addEventListener('input', function() {
        if (this.validity.valid) {
            this.classList.add('valid');
            this.classList.remove('invalid');
        } else if (this.value !== '') {
            this.classList.add('invalid');
            this.classList.remove('valid');
        } else {
            this.classList.remove('valid', 'invalid');
        }
    });
});

// Reset form handling
const resetBtn = document.querySelector('.reset-btn');
resetBtn.addEventListener('click', function() {
    feedbackForm.reset();
    emojiButtons.forEach(btn => btn.classList.remove('selected'));
    charCount.textContent = '0';
    requiredInputs.forEach(input => input.classList.remove('valid', 'invalid'));
    showNotification('Form has been reset.', 'info');
});

// Email validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification function
function showNotification(message, type) {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) existingNotification.remove();

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.setAttribute('role', 'alert');

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 100);

    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation on scroll for form groups
function observeFormElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.form-group').forEach(group => {
        observer.observe(group);
    });
}

document.addEventListener('DOMContentLoaded', observeFormElements);