
document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    // Simulate sending data (replace with actual AJAX call)
    console.log('Form data:', formDataObject);

    // Clear form fields
    contactForm.reset();
  });
});
