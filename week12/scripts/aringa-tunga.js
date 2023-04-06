fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
  .then(response => response.json())
  .then(data => {
    const selectElement = document.getElementById('option1');
    data.forEach(item =>{
        const optionElement = document.createElement('option');
        optionElement.textContent = item.name;
        optionElement.value = item.id;
        selectElement.appendChild(optionElement)
    });
    const selectElement2 = document.getElementById('option2');
    data.forEach(item =>{
        const optionElement = document.createElement('option');
        optionElement.textContent = item.name;
        optionElement.value = item.id;
        selectElement2.appendChild(optionElement)
    });

    const selectElement3 = document.getElementById('option3');
    data.forEach(item =>{
        const optionElement = document.createElement('option');
        optionElement.textContent = item.name;
        optionElement.value = item.id;
        selectElement3.appendChild(optionElement)
    });

  }); 
