// const visitsDisplay = document.querySelector("#lastVisited");

// // get the stored value in localStorage
// let numVisits = Number(window.localStorage.getItem("visits-ls"));

// // determine if this is the first visit or display the number of visits.
// if (numVisits !== 0) {
// 	visitsDisplay.textContent = numVisits;
// } else {
// 	visitsDisplay.textContent = `This is your first visit!`;
// }

// // increment the number of visits.
// numVisits++;
// // store the new number of visits value
// localStorage.setItem("visits-ls", numVisits);

// last visited in localStorage and display it in days
let lastVisited = window.localStorage.getItem("lastVisited");
let lastVisitedDisplay = document.querySelector("#lastVisited");
if (lastVisited) {
    let days = Math.round((Date.now() - lastVisited));
    lastVisitedDisplay.textContent = `You visited this page ${days} days ago.`;
} else {
    lastVisitedDisplay.textContent = `You visited this page for the first time today.`;
}