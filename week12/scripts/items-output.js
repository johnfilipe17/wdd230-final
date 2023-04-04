function handleSubmit(event) {
    event.preventDefault(); // prevent the form from submitting
  
    
    const firstName = document.querySelector('#fname').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const selectedFruits = Array.from(document.querySelectorAll('input[name=fruit]:checked')).map(input => input.value);
    const specialInstructions = document.querySelector('#instruction').value;
  
    
    const submissionDate = new Date();
  
    // retrieve the JSON data
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        // get the nutritional information for each selected fruit
        const fruitData = data.fruits.filter(fruit => selectedFruits.includes(fruit.name));
        const totalCarbs = fruitData.reduce((total, fruit) => total + fruit.carbs, 0);
        const totalProtein = fruitData.reduce((total, fruit) => total + fruit.protein, 0);
        const totalFat = fruitData.reduce((total, fruit) => total + fruit.fat, 0);
        const totalSugar = fruitData.reduce((total, fruit) => total + fruit.sugar, 0);
        const totalCalories = fruitData.reduce((total, fruit) => total + fruit.calories, 0);
  
        // format the output
        const outputHTML = `
          <p>First Name: ${firstName}</p>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>
          <p>Selected Fruits: ${selectedFruits.join(', ')}</p>
          <p>Special Instructions: ${specialInstructions}</p>
          <p>Submission Date: ${submissionDate}</p>
          <p>Total Carbs: ${totalCarbs}</p>
          <p>Total Protein: ${totalProtein}</p>
          <p>Total Fat: ${totalFat}</p>
          <p>Total Sugar: ${totalSugar}</p>
          <p>Total Calories: ${totalCalories}</p>
        `;
  
        
        const outputElement = document.querySelector('#output');
        outputElement.innerHTML = outputHTML;
      })
      .catch(error => console.error(error));
  }
  const formElement = document.querySelector('#myform');
  formElement.addEventListener('submit', handleSubmit);