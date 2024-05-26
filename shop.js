document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.custom-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Get form data
      const formData = new FormData(form);
      const name = formData.get('name');
      const phone = formData.get('phone');
      const wishes = formData.get('wishes');
  
      // Validate form data
      if (!name || !phone || !wishes) {
        alert('Please fill in all fields.');
        return;
      }
  
      // Send form data to server (you can replace this with your preferred method)
      // For example, you can use Fetch API to send data to a server endpoint
      fetch('https://your-api-endpoint.com/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
          wishes,
        }),
      })
      .then(response => {
        if (response.ok) {
          alert('Form submitted successfully!');
          form.reset(); // Reset form fields
        } else {
          alert('Failed to submit form. Please try again later.');
        }
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        alert('Failed to submit form. Please try again later.');
      });
    });
  });
  