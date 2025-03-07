// Testimonial Data
const testimonials = [
    {
        name: "John Doe",
        comment: "This e-waste management system is fantastic! It helped me recycle my old gadgets easily."
    },
    {
        name: "Jane Smith",
        comment: "I never realized how important proper e-waste disposal was until I found this site. Great work!"
    },
    {
        name: "Mark Johnson",
        comment: "The recycling process is so efficient and easy. Highly recommend!"
    }
];

// Function to display testimonials
function displayTestimonials() {
    const testimonialContainer = document.getElementById('testimonial-container');
    testimonials.forEach(testimonial => {
        const div = document.createElement('div');
        div.classList.add('testimonial');
        div.innerHTML = `
            <h4>${testimonial.name}</h4>
            <p>${testimonial.comment}</p>
        `;
        testimonialContainer.appendChild(div);
    });
}

// Run the function on page load
document.addEventListener('DOMContentLoaded', displayTestimonials);
