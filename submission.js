document.addEventListener('DOMContentLoaded', () => {
    const wasteImageInput = document.getElementById('waste-image');
    const previewImg = document.getElementById('preview-img');

    // Display image preview when an image is uploaded
    wasteImageInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                previewImg.src = e.target.result;
                previewImg.style.display = 'block';

                // Store the image data URL in localStorage
                localStorage.setItem('wasteImage', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    });

    // Handle form submission
    document.getElementById('ewaste-form').addEventListener('submit', (event) => {
        event.preventDefault();

        // Collect form data
        const formData = new FormData(event.target);
        const formEntries = {};
        for (const [key, value] of formData.entries()) {
            formEntries[key] = value;
        }

        // Store form data in localStorage
        localStorage.setItem('formData', JSON.stringify(formEntries));

        // Store the current timestamp
        const timestamp = new Date().toLocaleString();
        localStorage.setItem('submissionTime', timestamp);

        // Display success message
        alert(`Thank you for submitting your e-waste on ${timestamp}. Your contribution matters!`);

        // Redirect to the shipped order page
        window.location.href = 'shipped_order.html';
    });
});

// Function to handle the form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevents form from submitting the traditional way

    // Perform any necessary validation or data handling here
    const formData = new FormData(event.target);
    console.log("Form Data Submitted:");
    for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }

    // Redirect to the shipped order page
    window.location.href = "shipped_order.html"; // Make sure the path is correct
}

// Attach event listener to the form
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#e-waste-form"); // Ensure the form has this ID
    if (form) {
        form.addEventListener("submit", handleSubmit);
    }
});


