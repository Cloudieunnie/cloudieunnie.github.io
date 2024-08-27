// Optional JavaScript for interactivity
document.addEventListener("DOMContentLoaded", function() {
    // Example: Add a click event to the images
    const images = document.querySelectorAll('.image-container img');
    images.forEach(image => {
        image.addEventListener('click', function() {
            alert('You clicked on an image of Justin Bieber!');
        });
    });
});
