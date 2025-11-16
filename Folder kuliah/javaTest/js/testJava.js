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