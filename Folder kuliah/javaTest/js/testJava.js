// testJava.js
// Creates (or uses) an element to show text on the page and exposes showText(text).
/*
document.addEventListener('DOMContentLoaded', () => {
    let container = document.getElementById('output');
    if (!container) {
        container = document.createElement('div');
        container.id = 'output';
        container.style.fontFamily = 'Arial, sans-serif';
        container.style.fontSize = '16px';
        container.style.padding = '8px';
        document.body.appendChild(container);
    }

    // default text shown on load
    showText('Hello from JavaScript!');
    // allow calling showText(...) from console or other scripts
    window.showText = showText;
});

function showText(text) {
    const c = document.getElementById('output');
    if (!c) return;
    c.textContent = text;
}
    */

console.log("test");

// Task 1 Calculate area of rectangle
let width = 50;
let height = 100;
let firstName = "John";
let isLoggedIn1 = true;

const area = width * height;
console.log("_____ Day 1 check_____");
console.log("The Width is: " + width);
console.log("The Height is: " + height);
console.log("The Area is: " + area);
console.log("User Name: " + firstName);
console.log("Is User Logged In? " + isLoggedIn1);


// Task 2 Different Data Types
console.log("_____ Day 1 task 2 check_____");
let num1 = 10;
let num2 = 20;
let str1 = "10";
let str2 = "20";

console.log(num1 + num2); 

console.log(str1 + str2); 

console.log(num1 + str2);

console.log(str1 + num2);

let total = num1 + num2;
console.log("Total of num1 and num2 is: " + total);

let badTotal = str1 + str2;
console.log("Total of str1 and str2 is: " + badTotal);

// Task 3 Conditional Statements
console.log("____ Day 2 task 1 _____")
let grade = 85;

if (grade >= 90) {
    console.log("A");
} else if (grade >= 80) {
    console.log("B");
} else if (grade >= 70) {
    console.log("C");
} else if (grade >= 60) {
    console.log("D");
} else {
    console.log("F");
}

// Task 4 Two factor logic AND &&
console.log("____ Day 2 task 2 _____")
let isLoggedIn2 = true;
let userRole = "admin";

if (isLoggedIn2 && userRole === "admin") {
    console.log("Welcome, Admin. System Unlocked");
} else {
    console.log("Access Denied");
}

// Task 5 Logic OR ||
console.log("____ Day 2 task 3 _____");
let isMember = false;
let hasValidPass = true;
let bannedUser = false;

if ((isMember || hasValidPass) && bannedUser === false) {
    console.log("access granted");
} else {
    console.log("access denied");
}

// Task 6 truely and falsy values
console.log("____ Day 2 task 4 _____");

function check(value) {
  if (value) {
    console.log(value, "is TRUTHY");
} else {
    console.log(value, "is FALSY");
  }
}

check(true);
check(false);
check("hello");
check("");
check(5);
check(0);
check(null);
check(undefined);
check(NaN)

// Task 7 nested checks
console.log("____ Day 2 task 5 _____");
let age = 15;
let hasParent = false;

if (age >= 18) {
    console.log("You Can see R rated movie");
} else {
        if (hasParent) { 
        console.log("You can see the R-rated movie with your parent.");
    } else {
        console.log("You are too young and do not have a guardian. Go home.");
    }
}

/* Day 3 Array And loop
Task 8 The Shopping list */
console.log("____ Day 3 task 1 _____");

const shoppingList = ["Apples", "Milk", "Bread", "Eggs", "Cheese"];
console.log(shoppingList);
console.log(shoppingList[0]);
console.log(shoppingList[2]);
console.log("The Item on the list is " + shoppingList.length);


// Task 9 Looping
console.log("____ Day 3 task 2 _____");

for (let i = 10; i > 0; i--) {
console.log(i);
}
console.log("Liftoff!")

// Task 10 Looping through array
console.log("____ Day 3 task 3 _____");
for (let i = 0; i < shoppingList.length; i++) {
    console.log("Item " + (i + 1) + ": " + shoppingList[i]);
}

// Task 11 The Number Cruncher
console.log("____ Day 3 task 4 _____");
let prices =[25, 10 , 50, 5.5, 30];
let total1 = 0;

for (let i = 0; i < prices.length; i++){
total1 += prices[i];
}
console.log(total1);

// task 12 Functions
console.log("____ Day 4 task 1 _____");
function greetUser(name){
    console.log(`Welcome, ${name}!`);   
}
greetUser("Alice");
greetUser("Bob");
greetUser("Monet");

// Task 13 retun value
console.log("____ Day 4 task 2 _____");
function add(num1, num2){
    return num1 + num2;
}

let sum = add(5, 10);
console.log(sum)
console.log(add(100, -50));

// Task 14 Combining logic and functions
console.log("____ Day 4 task 3 _____");
function getGrade(score){
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log(getGrade(95));
console.log(getGrade(72));
console.log(getGrade(40));

// Task 15 Array and Functions
console.log("____ Day 4 task 4 _____");
function calculateTotal(pricesArray){
    let total = 0;
    for (let i = 0; i < pricesArray.length; i++) {
        total += pricesArray[i];
    }
    return total;
}

let prices1 = [15, 25, 35];
let prices2 = [100, 200, 300, 400];
console.log(calculateTotal(prices1));
console.log(calculateTotal(prices2));


// Task 16 Object Basics
console.log("____ Day 5 task 1 _____");
const inventory = {
    name: "Steel Hammer",
    price: 25.50,
    inStock: true,
};

console.log(inventory.name);
console.log(inventory['price']);

inventory.inStock = false;
inventory.serialNumber = "9001";
console.log(inventory);

// Task 17 Object and Functions
console.log("____ Day 5 task 2 _____");
let globalMessage = "Welcome To the Site: ";
function changeMessage() {
    let globalMessage = "Access Denied";
    console.log(globalMessage);
}

changeMessage();
console.log(globalMessage);

/* why the final log does not show "Access Denied" Because
Inside Te function let globalMessage creates a new local variable that only exists within the function scope.
The global variable globalMessage remains unchanged outside the function. So the correct code is remove let and write it only globalMessage = "Access Denied";*/

// Task 18 introduction to reduce
console.log("____ Day 5 task 3 _____");

let price = [10, 20, 30, 40, 50];
let totalPrice = price.reduce((sum, price1) => sum + price1, 0);
console.log(totalPrice);

// Task 19 Object Array
console.log("____ Day 5 task 4 _____");
const products = [
    {name: "Laptop", weight: 1.5},
    {name: "Smartphone", weight: 0.2},
    {name: "Tablet", weight: 0.5},
]

let totalWeight = 0;

for (let i = 0; i < products.length; i++) {
    console.log(products[i].name);
    totalWeight += products[i].weight;
}

console.log("Total Weight: " + totalWeight);