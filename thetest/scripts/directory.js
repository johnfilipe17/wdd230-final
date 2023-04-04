const requestURL = 'https://run.mocky.io/v3/9faece1d-5a2b-4e59-93b7-922d5add1c4f';

const list = document.querySelector('#list');
const table = document.querySelector('.table');
const grid = document.querySelector('#grid');
const cards = document.querySelector('.cards');
const displayItems = document.querySelector('.displayItems');


async function getData(requestURL) {
    const response = await fetch(requestURL);
    if (response.ok) {
        const data = await response.json();
        // console.log(data);
        const businesses = data['businesses'];
        businesses.forEach(business => {
            displayCards(business);
        });
        
        list.addEventListener('click', () => {
            table.innerHTML = '';
            cards.innerHTML = '';
            businesses.forEach(business => {
                displayTable(business);
            });
        });

        grid.addEventListener('click', () => {
            table.innerHTML = '';
            cards.innerHTML = '';
            businesses.forEach(business => {
                displayCards(business);
            });
        });
    }
}

getData(requestURL);

function displayCards(business) {
    let card = document.createElement('section');

    // Business Image
    let image = document.createElement('img');
    image.setAttribute('src', business.logo);
    image.setAttribute('alt', `${business.name} Logo`);
    card.appendChild(image);
    
    // Business Name
    let h2 = document.createElement('h2');
    h2.textContent = business.name;
    card.appendChild(h2);

    // Business Type
    let type = document.createElement('p');
    type.textContent = business.type;
    card.appendChild(type);

    //Business Address
    let address = document.createElement('p');
    address.textContent = business.Location.address1 + ' ' + ' ' + business.Location.city + ', ' + business.Location.state + ' ' + business.Location.zip_code;
    card.appendChild(address);


    // Business Phone
    let phone = document.createElement('p');
    phone.textContent = business.phone;
    card.appendChild(phone);


    // Append card to the DOM (the prophet list).
    document.querySelector('div.cards').appendChild(card);
}

function displayTable(business) {
    let tableRow = document.createElement('tr');

    // Business Name
    let name = document.createElement('td');
    name.textContent = business.name;
    tableRow.appendChild(name);

    // Business Type
    let type = document.createElement('td');
    type.textContent = business.type;
    tableRow.appendChild(type);

    // Business Address
    let address = document.createElement('td');
    address.textContent = business.Location.address1 + ' ' + ' ' + business.Location.city + ', ' + business.Location.state + ' ' + business.Location.zip_code;
    tableRow.appendChild(address);

    // Business Phone
    let phone = document.createElement('td');
    phone.textContent = business.phone;
    tableRow.appendChild(phone);

    document.querySelector('table').appendChild(tableRow);
}