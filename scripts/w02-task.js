/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */


/* Step 2 - Variables */
document.addEventListener('DOMContentLoaded', function() {
    const fullName = "Alec Nugent";
    let currentYear = 'October';

    let profilePicture = `images/profileImage.png`; // Profile path element


    /* Step 3 - Element Variables */
    const nameElement = document.getElementById('name');

    const foodElement = document.getElementById('food');

    const yearElement = document.querySelector('#year'); // # indicates id attribute

    const imageElement = document.getElementById('profileImage');


    /* Step 4 - Adding Content */
    nameElement.innerHTML = `<strong>${fullName}</strong>`; 

    yearElement.textContent = currentYear;

    imageElement.setAttribute('src', profilePicture);
    imageElement.setAttribute('alt', `Profile image of ${fullName}`);


    /* Step 5 - Array */
    const favoriteFoods = ["Pizza","Burger","Chicken"];

    foodElement.textContent = favoriteFoods.join(", "); // Comma-separated string

    const newFavoriteFood = "Cake";
    favoriteFoods.push(newFavoriteFood); // Adds value to array

    foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`; // Appends with line break

    favoriteFoods.shift(); // Remove first element
    foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`; 

    favoriteFoods.pop(); // Remove last element
    foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`;
});

