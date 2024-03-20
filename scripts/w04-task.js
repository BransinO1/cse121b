/* LESSON 3 - Programming Tasks  Week 04 Task.js */

/* Profile Object */

let myProfile = {};

myProfile.name = "Corbin Meacham";

myProfile.photo = "images/corbinimage.png";

myProfile.favoriteFoods = ["Pizza", "Pasta", "Chocolate", "Ice Cream"];

myProfile.hobbies = ["Reading", "Video Games", "Singing", "Fishing"];

myProfile.placesLived = [];

/* Populate Profile Object with placesLive objects */
let currentLocation = {
    place: "Boise, Idaho",
    length: "2 years"
};
myProfile.placesLived.push(currentLocation);

let previousLocation1 = {
    place: "Pocatello, Idaho",
    length: "2 years"
};
myProfile.placesLived.push(previousLocation1);

let previousLocation2 = {
    place: "Boise, Idaho",
    length: "18 years"
};
myProfile.placesLived.push(previousLocation2);

/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").innerText = myProfile.name;

/* Photo with attributes */
document.getElementById("photo").src = myProfile.photo;

document.getElementById("photo").alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.getElementById("favorite-foods").appendChild(li);
});

 /* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.getElementById("hobbies").appendChild(li);
});

 /* Places Lived DataList */
myProfile.placesLived.forEach(location => {
    let dt = document.createElement("dt");
    dt.textContent = location.place;
    
    let dd = document.createElement("dd");
    dd.textContent = location.length;

    document.getElementById("places-lived").appendChild(dt);
    document.getElementById("places-lived").appendChild(dd);
});


















