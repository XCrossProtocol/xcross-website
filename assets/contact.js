document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Collect form data
    const name = document.getElementById('name').value;
    const company = document.getElementById('company').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Validate form data (optional)
    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }
  
    // Send form data to a server or API
    fetch('https://example.com/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, company, email, message }),
    })
      .then((response) => {
        if (response.ok) {
          alert('Thank you for your message! We will get back to you soon.');
          document.getElementById('contactForm').reset(); // Clear the form
        } else {
          alert('There was an error sending your message. Please try again later.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again later.');
      });
  });