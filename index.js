// Get the form element
const registrationForm = document.getElementById('registrationForm');

// Add event listener to the form submission
registrationForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const acceptTerms = document.getElementById('acceptTerms').checked;

    // Validate if the terms are accepted
    if (!acceptTerms) {
        alert("Please accept the terms and conditions.");
        return;
    }

    // Save the form data to local storage
    const formData = {
        name,
        email,
        password,
        dob,
        acceptTerms: acceptTerms ? "Accepted" : "Not Accepted",
    };
    localStorage.setItem('formData', JSON.stringify(formData));

    // Display the form data in the console
    console.log(formData);

    // Clear the form inputs
    registrationForm.reset();
});
