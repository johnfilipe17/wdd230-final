
var count = localStorage.getItem('itemCount');
if (count === null) {
  count = 0;
} else {
  count = parseInt(count);
}


var form = document.getElementById('myForm');


form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  // Increment the count of items
  count++;

 
  localStorage.setItem('itemCount', count);

  var itemCountCard = document.getElementById('itemCountCard');
  var itemCount = document.getElementById('itemCount');

 
  itemCount.innerText = count;

 
  itemCountCard.style.display = 'block';
});


var itemCountCard = document.getElementById('itemCountCard');
var itemCount = document.getElementById('itemCount');


itemCount.innerText = count;

itemCountCard.style.display = 'block';

