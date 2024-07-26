document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simple validation and submission logic
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Your message has been sent!');
        // Here you could send the form data to a server if desired
        // e.g., using fetch or XMLHttpRequest
    } else {
        alert('Please fill in all fields.');
    }
});
