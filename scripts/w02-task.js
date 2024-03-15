/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullname = "Corbin Meacham";
const currentYear = new Date().getFullYear();
const profilePicture = "images/corbinimage.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullname}</strong>`;
foodElement.textContent = "Favorite Food: All you can eat buffet";
yearElement.textContent = `Year: ${currentYear}`;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullname}`);


/* Step 5 - Array */
const favoriteFoods = ["Pizza", "Pasta", "Chocolate", "Bread"];
const singleFavoriteFood = "All you can eat buffets";
const anotherSingleFavoriteFood = "Ice-Cream";

                             // Displays original list
foodElement.innerHTML = `Favorite Foods: ${favoriteFoods.join(", ")}`;

                                  // Adds new favorite food
favoriteFoods.push(anotherSingleFavoriteFood);
foodElement.innerHTML += `<br>Favorite Foods: ${favoriteFoods.join(", ")}`;

                              // Removes first element
favoriteFoods.shift();
foodElement.innerHTML += `<br>Favorite Foods: ${favoriteFoods.join(", ")}`;

                                // Removes last element
favoriteFoods.pop();
foodElement.innerHTML += `<br>Favorite Foods: ${favoriteFoods.join(", ")}`;


//Corbin Meacham CSE 121B FILE

