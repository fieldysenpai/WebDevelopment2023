"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 12,
      close: 23,
    },
    sat: {
      open: 0, // open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    // Function that receives an object
    console.log(time, address, mainIndex, starterIndex);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1} and ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*

restaurant.orderPizza('Mushrooms', 'Onions', 'Olive', 'Spinach');

restaurant.orderDelivery({
  // passing the object, while calling the function
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

//  ***** DESTRUCTURING OBJECTS ***

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// MUTATING VARIABLES

let a1 = 111;
let b1 = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a1, b1 } = obj);
console.log(a1, b1);

//  Nested Objects

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

//  **** DESTRUCTURING ARRAYS ***

const arr = [2, 3, 4];
const arr1 = arr[0];
const arr2 = arr[1];
const arr3 = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//  Switching Variables

// const temp = main;
// main = secondary;
// secondary = temp;

[main, secondary] = [secondary, main]; //  Same as above, but with destructuring

console.log(restaurant.order(2, 0));

//  Receiving 2 return values from order function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//  Nested Destructuring
const nested = [2, 4, [5, 6]];

const [i, , [j]] = nested;
console.log(i, j);

// *** SPREAD OPERATOR ***

// It's used to expand an array into all its Elements. Unpacking all array elements at one.

const array1 = [7, 8, 9];
const badNewArray = [1, 2, array1];
const badNewArray2 = [1, 2, array1[0], array1[1], array1[2]];
console.log(badNewArray, badNewArray2);

const newGoodArray = [1, 2, ...array1]; // ... is the spread operator.
console.log(newGoodArray);
console.log(...newGoodArray); // this will log the array individualy

const newMenu = [...restaurant.mainMenu, 'Canelonis', 'Carbonara']; // This will add the mainMenu array + these 2 new items.
console.log(newMenu);

// Copy an array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Joining 2 arrays
const menuWrongWay = [...restaurant.mainMenu] + [...restaurant.starterMenu];
console.log(menuWrongWay); // This is the wrong way

const menuCorrectWay = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menuCorrectWay); // This will join the 2 arrays together

//  The spread operator can be used on iterables like Arrays, Strings, Sets. But not Objects.
const exampleString = 'Jonas';
const letters = [...exampleString, ' ', 'S.'];
console.log(letters);
console.log(...exampleString);

// const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("Ingredient 2?"), prompt("Ingredient 3?")];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

//  *** Objects *** Even tho objects are not iterables, since ES 2018 it can be used.

const newRestaurant = { foundedIN: 1998, ...restaurant, founder: 'Giancarlo' };
// Will copy all the properties from restaurant object and keep adding to the object.
console.log(newRestaurant);

//  *** REST PATTERN ***
// rest pattern does the oposite of spread operator. Rest patter always needs to be the last on the destructuring.
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// REST in objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// REST in functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const anotherX = [23, 5, 7];
add(...anotherX);


 

//  *** SHORT CIRCUITING (&& AND ||)
// logical operators can use ANY data type, return ANY data type and short circuiting.
// short circuit in the case of || operator - If the first value is a truthy value it will
// return that value.

console.log("---OR---");

console.log(3 || "Jonas");
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || "Hello" || 23 || null);

restaurant.numGuests = 0; // if there was no numGuests, it would assume numGuest = 10;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10; // Better way then if/else or ternary
console.log(guests2);

console.log("---AND---");
// The AND (&&) operator short circuits when the first value is falsy. Then imediatly returns that value.
console.log(0 && "Jonas");
console.log(7 && "Jonas");
console.log("Hello" && 23 && null && "Jonas"); //Since null is a falsy value, it short circuits and returns it.

// Pratical Example

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

// on this case the and operator does the same as the if statement

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

*/

//  NULLISH COALESCING OPERATOR

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

//  Nullish values: are null and undefined (Not a 0 or a "")
const correctGuests = restaurant.numGuests ?? 10; // It works with the concept of null values, not falsy nor truthy
console.log(correctGuests); // Only if the first element is null or undefined, then the second one will be executed.
