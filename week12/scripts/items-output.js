  // Get the form element
const form = document.getElementById('myForm');

// Get the item count element
const itemCount = document.getElementById('itemCount');

// Get the form data display element
const formDataDisplay = document.getElementById('formData');

// Initialize the item count to 0
let count = 0;

// Add a submit event listener to the form
form.addEventListener('submit',  async function(event) {
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
    Instructions: formData.get('instru')
  }));

  // Reset the form
  form.reset();

  // Fetch the fruit nutritional data
  const response = await fetch('https://brotherblazzard.github.io/canvas-content/fruit.json');
  const fruitData = await response.json();

  // Parse the selected fruits and get their nutritional data
  const selectedFruits = formData.getAll('fruits');
  const nutritionalData = selectedFruits.map(fruit => {
    const data = fruitData.find(item => item.name === fruit);
    return data ? {
      name: data.name,
      carbohydrates: data.nutrition.carbohydrates,
      protein: data.nutrition.protein,
      fat: data.nutrition.fat,
      sugar: data.nutrition.sugar,
      calories: data.nutrition.calories
    } : null;
  }).filter(fruit => fruit !== null);

   // Display the form data and the nutritional data
  const options = { day: 'numeric', hour: 'numeric', minute: 'numeric' };
  const date = new Date().toLocaleString('en-US', options);
  formDataDisplay.innerHTML = `
    <h2>Form Data:</h2>
     <ul>
     <li>Name: ${formData.get('name')}</li>
     <li>Phone: ${formData.get('phone')}</li>
     <li>Email: ${formData.get('email')}</li>
     <li>Option 1: ${formData.get('option1')}</li>
     <li>Option 2: ${formData.get('option2')}</li>
     <li>Option 3: ${formData.get('option3')}</li>
     <li>Nutritional Information:</li>
     <ul>
       ${nutritionalData.map(fruit => `
         <li>${fruit.name} - Carbohydrates: ${fruit.carbohydrates}, Protein: ${fruit.protein}, Fat: ${fruit.fat}, Sugar: ${fruit.sugar}, Calories: ${fruit.calories}</li>
       `).join('')}
     </ul>
     <li>instructions: ${formData.get('instru')}</li>
   </ul>
   <p>Order Date: ${date}</p>
 `;
});