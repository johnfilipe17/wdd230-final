// Get the form element
const form = document.getElementById('myForm');

// Get the item count element
const itemCount = document.getElementById('itemCount');

// Initialize the item count to 0
let count = 0;

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form data
  const formData = new FormData(event.target);

  // Increment the item count
  count++;

  // Update the item count element
  itemCount.textContent = count;

  // Store the form data in the browser's local storage
  localStorage.setItem(`submission${count}`, JSON.stringify({
    name: formData.get('name'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    option1: formData.get('option1'),
    option2: formData.get('option2'),
    option3: formData.get('option3'),
    information: formData.get('instru')
  }));

  // Reset the form
  form.reset();
});