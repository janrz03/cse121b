/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Jamner Ruiz';
let currentYear = 2023;
profilePicture = 'images/profileimage.jpg'

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('main#home picture img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = '2023';
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
let favFoods = ['Lasagna', 'Pizza', ' Steak', 'Spaguetti'];
foodElement.innerHTML += `<br>${favFoods}`;
let favFoods2 = [' Brownie', ' Apple pie', ' Chessecake'];
favFoods.push(favFoods2);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift('lasagna'); // removing first element of the array 
foodElement.innerHTML += `<br>${favFoods}`;
favFoods2.pop('chessecake'); // removing the last element of the array 
foodElement.innerHTML += `<br>${favFoods}`;





