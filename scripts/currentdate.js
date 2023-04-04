const todaysdate = new Date();
//console.log(todaysdate) isso aqui vai printar a data no console mas eu não quero mais isso aqui. 
//toLocalDateString
const options = {weekday:'long',day:'numeric',month:'long',year:'numeric'};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US',options)