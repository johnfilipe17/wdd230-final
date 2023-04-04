// Get all the lazy loading images
const images = document.querySelectorAll('.picture');

// Create an intersection observer
const observer = new IntersectionObserver((entries) => {
  // Loop through the entries
  entries.forEach((entry) => {
    // Check if the element is in the viewport
    if (entry.isIntersecting) {
      // Replace the data-src attribute with the src attribute
      entry.target.src = entry.target.dataset.src;
      // Remove the lazy class
      entry.target.classList.remove('picture');
      // Stop observing the element
      observer.unobserve(entry.target);
    }
  });
});

// Loop through each image and observe it
images.forEach((image) => {
  observer.observe(image);
});
