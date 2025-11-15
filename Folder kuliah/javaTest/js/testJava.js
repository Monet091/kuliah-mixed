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
let isLoggedIn = true;

const area = width * height;
console.log("_____ Day 1 check_____");
console.log("The Width is: " + width);
console.log("The Height is: " + height);
console.log("The Area is: " + area);
console.log("User Name: " + firstName);
console.log("Is User Logged In? " + isLoggedIn);


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

