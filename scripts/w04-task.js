/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Alec Nugent",
    photo: "images/profileImage.png",
    favoriteFoods: [
        'Beans',
        'Hot Dog',
        'Apple Pie',
        'Chicken',
    ],
    hobbies: [
        'Gaming',
        'Music',
        'Yo-Yo',
        'Movies',
    ],
    placesLived: [],

};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
    place: 'Chandler, AZ',
    length: '1 year',
    },
    {
    place:'Queen Creek, AZ',
    length: '2 years',
    }
);



/* DOM Manipulation - Output */


document.querySelector('#name').textContent = myProfile.name;
/* Name */

document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
const photoElement = document.getElementById('photo');
photoElement.setAttribute('src', myProfile.photo);
photoElement.setAttribute('alt', myProfile.name);


/* Favorite Foods List*/
const favoriteFoodsElement = document.getElementById('favorite-foods');

myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  favoriteFoodsElement.appendChild(li);
});


/* Hobbies List */
const hobbiesElement = document.getElementById('hobbies');

myProfile.hobbies.forEach(hobby => {
  let li = document.createElement('li');
  li.textContent = hobby;
  hobbiesElement.appendChild(li);
});


/* Places Lived DataList */
const placesLivedElement = document.getElementById('places-lived');

myProfile.placesLived.forEach(place => {
  let dt = document.createElement('dt');
  dt.textContent = place.place;
  
  let dd = document.createElement('dd');
  dd.textContent = place.length;
  
  placesLivedElement.appendChild(dt);
  placesLivedElement.appendChild(dd);
});


