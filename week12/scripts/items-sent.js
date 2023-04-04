// Retrieve the current count of items from localStorage, or set it to 0 if it doesn't exist
var count = localStorage.getItem('itemCount');
if (count === null) {
  count = 0;
} else {
  count = parseInt(count);
}

// Retrieve the form element from the DOM
var form = document.getElementById('myForm');

// Add an event listener for the form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the default form submission behavior

  // Increment the count of items
  count++;

  // Store the updated count in localStorage
  localStorage.setItem('itemCount', count);

  
  var itemCountCard = document.getElementById('itemCountCard');
  var itemCount = document.getElementById('itemCount');

  // Update the itemCount element with the current count of items
  itemCount.innerText = count;

 
  itemCountCard.style.display = 'block';
});

var itemCountCard = document.getElementById('itemCountCard');
var itemCount = document.getElementById('itemCount');


itemCount.innerText = count;

// Show the itemCountCard if it was previously hidden
itemCountCard.style.display = 'block';