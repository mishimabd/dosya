
    document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll to sections
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
    link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
    top: targetSection.offsetTop,
    behavior: 'smooth'
});
});
});

    // Form submission and validation
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get form elements
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorMessage = document.getElementById('error-message');

    // Basic validation checks
    if (!name || !email || !message) {
    errorMessage.style.display = 'block';
} else if (!validateEmail(email)) {
    errorMessage.textContent = 'Please enter a valid email address.';
    errorMessage.style.display = 'block';
} else {
    // If everything is valid, submit the form (for demo purposes, we just clear the form)
    alert('Thank you for your message!');
    form.reset();
    errorMessage.style.display = 'none';
}
});

    // Function to validate email format
    function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}
});

