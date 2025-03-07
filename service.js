// Example JavaScript for interactive elements
document.addEventListener('DOMContentLoaded', () => {
    console.log('Services Page Loaded');

    // Example hover effect for buttons
    document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#004080';
        });
        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '#00509e';
        });
    });
});
