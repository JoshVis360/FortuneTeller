//This is my collection code
let motherFirstName = prompt("What is your mother's first name? ");
let streetName = prompt(" What is your street you grew up on?");
let currentAge = prompt("What is your current Age");
let favColor = prompt("What was your favorite color as a child?");
let numBetweenTen = prompt("Choose a number between 1-10");

//This is my math equations
let mathRound = Math.round(currentAge/numBetweenTen);
let remainderAge = Number(currentAge%numBetweenTen);
let currentAgeMinusNumBetweenTen = Number(currentAge-numBetweenTen);

console.log(`Based on the information you have provided \nThis is your outcomes for your future \n \nIn ${numBetweenTen} years you are going to meet your best friendo named ${motherFirstName} ${streetName} \nYou will get married in ${mathRound} years and have ${remainderAge} children \nIn ${currentAgeMinusNumBetweenTen} years , you are going to dye your hair ${favColor}`);

